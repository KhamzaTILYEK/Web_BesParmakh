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
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "user@coderthemes.com",
      password: "password",
    },
  });

  const changeUserRole = (role) => {
    reset({
      email: role == "user" ? "user@coderthemes.com" : "admin@coderthemes.com",
      password: role == "user" ? "password" : "password",
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
    try {
      const res = await HttpClient.post("/login", values);
      if (res.data.token) {
        saveSession({
          ...(res.data ?? {}),
          token: res.data.token,
        });
        if (res.data.role == "user" || res.data.role == "admin") {
          redirectAsRole(res.data.role, true);
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
      if (e.response?.data?.error) {
        toast.error(e.response?.data?.error, {
          position: "top-right",
          duration: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
    toast.success("Successfully logged in. Redirecting....", {
      position: "top-right",
      duration: 2000,
    });
  });

  return { loading, login, control, changeUserRole };
};

export default useLogin;
