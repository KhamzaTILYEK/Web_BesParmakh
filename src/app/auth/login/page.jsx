import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";
import { AuthFormLayout, PageTitle } from "@/components";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Бүртгэлгүй юу?{" "}
    <Link to="/auth/register" className="ms-1 text-primary">
      <span className="font-medium">Бүртгүүлэх</span>
    </Link>
  </p>
);

const Login = () => {
  return (
    <AuthFormLayout
      authTitle="Нэвтрэх"
      helpText="Бес-пармак руу нэвтрэхийн тулд итгэмжлэлээ оруулна уу"
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <PageTitle title="Login" />
      <LoginForm />
    </AuthFormLayout>
  );
};

export default Login;
