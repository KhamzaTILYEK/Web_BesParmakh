import { Link } from "react-router-dom";
import { AuthFormLayout, PageTitle } from "@/components";
import { useAuthContext } from "@/context";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Please come back and
    <Link to="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </Link>
  </p>
);

const Logout = () => {
  const { removeSession } = useAuthContext();

  removeSession();

  return (
    <AuthFormLayout
      authTitle="Logout"
      helpText="We are Sorry to see you go, please come back soon. 😢"
      bottomLink={<BottomLink />}
    >
      <PageTitle title="Logout" />
      <div></div>
    </AuthFormLayout>
  );
};

export default Logout;
