import { Link } from "react-router-dom";

import ForgotPasswordForm from "./ForgotPasswordForm";
import { AuthFormLayout, PageTitle } from "@/components";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Буцах{" "}
    <Link to="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Нэвтрэх</span>
    </Link>
  </p>
);

const RecoverPassword = () => {
  return (
    <AuthFormLayout
      authTitle="Нууц үгээ мартсан"
      helpText="Имэйл хаягаа оруулна уу, бид танд нууц үгээ шинэчлэх заавар бүхий имэйл илгээх болно."
      bottomLink={<BottomLink />}
    >
      <PageTitle title="Recover Password" />
      <ForgotPasswordForm />
    </AuthFormLayout>
  );
};

export default RecoverPassword;
