import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { useAuthContext } from "@/context";
import { HttpClient } from "@/helpers";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { session, saveSession } = useAuthContext();
  const [searchParams] = useSearchParams();

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Имэйлээ оруулна уу"),
    password: yup.string().required("Нууц үгээ оруулна уу"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "aliabakh@gmail.com",
      password: "1234",
    },
  });

  const changeUserRole = (role) => {
    reset({
      email: role == "user" ? "erali@g-service.com" : "aliabakh@gmail.com",
      password: role == "user" ? "1234" : "1234",
    });
  };

  useEffect(() => {
    if (session) {
      redirectAsRole(session.role);
    }
  }, []);

  const redirectAsRole = (role, current = false) => {
    const redirectLink = searchParams.get("redirectTo");
    const adminRoute = redirectLink?.startsWith("/admin");

    if (role == "admin" && !(redirectLink && !adminRoute)) {
      navigate(redirectLink && adminRoute ? redirectLink : "/admin/dashboard");
      return;
    } else if (role == "user" && !(redirectLink && adminRoute)) {
      navigate(redirectLink && !adminRoute ? redirectLink : "/home");
      return;
    }

    if (current) {
      if (role == "admin") {
        navigate("/admin/dashboard");
      } else if (role == "user") {
        navigate("/home");
      }
    }
  };

  const login = handleSubmit(async (values) => {
    console.log(values);
    try {
      const response = await fetch(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qfspg/endpoint/login?email=${values.email.toLowerCase()}&password=${values.password}`
      )
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let postsData = await response.json();
      console.log(postsData);
      if (postsData.token) {
        saveSession({
          ...(postsData ?? {}),
          token: postsData.token,
        });
        if (postsData.role == "user" || postsData.role == "admin") {
          redirectAsRole(postsData.role, true);
        }
        toast.success(`Successfully logged in. ${postsData?.userInfo?.userName}`, {
          position: "top-right",
          duration: 1000,
        });
      } else {
        toast.error("user not found", {
          position: "top-right",
          duration: 1000,
        });
      }

    } catch (err) {
      toast.error(err.response?.data?.error, {
        position: "top-right",
        duration: 1000,
      });
    }
    finally {
      setLoading(false);
    }

    // try {

    //   const res = await HttpClient.post("/login", {});
    //   if (res.data.token) {
    //     saveSession({
    //       ...(res.data ?? {}),
    //       token: res.data.token,
    //     });
    //     if (res.data.role == "user" || res.data.role == "admin") {
    //       redirectAsRole(res.data.role, true);
    //     }
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (e) {
    //   if (e.response?.data?.error) {
    //     toast.error(e.response?.data?.error, {
    //       position: "top-right",
    //       duration: 2000,
    //     });
    //   }
    // }
  });

  return { loading, login, control, changeUserRole };
};

export default useLogin;
