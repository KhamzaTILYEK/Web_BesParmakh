import { Link } from "react-router-dom";

import { AuthFormLayout, PageTitle } from "@/components";
import RegisterForm from "./RegisterForm";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Бүртгэлтэй болсон уу?{" "}
    <Link to="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Нэвтрэх</span>
    </Link>
  </p>
);

const Register = () => {
  return (
    <AuthFormLayout
      authTitle="Register"
      helpText="Бүртгэлгүй юу? Бүртгэлээ үүсгээрэй, Bes-Parmakh дээр нэг минут хүрэхгүй хугацаа шаардагдана"
      bottomLink={null}
      hasThirdPartyAuth
    >
      <PageTitle title="Register" />
      <RegisterForm />
      <BottomLink />
    </AuthFormLayout>
  );
};

export default Register;
