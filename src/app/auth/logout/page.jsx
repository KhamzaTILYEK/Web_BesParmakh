import { Link } from "react-router-dom";
import { AuthFormLayout, PageTitle } from "@/components";
import { useAuthContext } from "@/context";

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Буцаад ирээрэй
    <Link to="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Нэвтрэх</span>
    </Link>
  </p>
);

const Logout = () => {
  const { removeSession } = useAuthContext();

  removeSession();

  return (
    <AuthFormLayout
      authTitle="Гарах"
      helpText="Таныг явж байгаад харамсаж байна, удахгүй буцаж ирээрэй. 😢"
      bottomLink={<BottomLink />}
    >
      <PageTitle title="Logout" />
      <div></div>
    </AuthFormLayout>
  );
};

export default Logout;
