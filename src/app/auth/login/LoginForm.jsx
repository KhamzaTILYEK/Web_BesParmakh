import { Link } from "react-router-dom";
import { LuCopy, LuLock, LuMail, LuShield, LuUser } from "react-icons/lu";
import useLogin from "./useLogin";
import { PasswordFormInput, TextFormInput } from "@/components";
import { calculateDiscount } from './../../../helpers/product';

const LoginForm = () => {
  const { loading, login, control, changeUserRole } = useLogin();

  return (
    <>
      <form onSubmit={login}>
        <TextFormInput
          name="email"
          control={control}
          type="email"
          className="bg-white"
          placeholder="Enter your email"
          label="Имэйл"
          containerClassName="mb-6"
          fullWidth
        />

        <PasswordFormInput
          name="password"
          control={control}
          label="Нууц үг"
          labelClassName="block text-sm font-medium text-default-900 mb-2"
          containerClassName="mb-1"
          fullWidth
        />

        <Link
          to="/auth/forgot-password"
          className="float-right text-end text-sm text-default-600 underline"
        >
          Нууц үгээ мартсан?
        </Link>
        
        <Link
          to="/"
          className="text-end text-sm text-default-600 underline"
        >
          {"< Нүүр хуудас руу буцах!"}
        </Link>
        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
          disabled={loading}
        >
          Нэвтрэх
        </button>
      </form>

      <div className="mt-6 flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuUser size={22} />
              <p className="text-base text-default-900">Хэрэглэгч</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              onClick={() => changeUserRole("user")}
            >
              <LuCopy />
              Ашиглах
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> aliabakh@gmail.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> 1234
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuShield size={22} />
              <p className="text-base text-default-900">Администратор</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              onClick={() => changeUserRole("admin")}
            >
              <LuCopy />
              Ашиглах
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> erali@g-service.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> 1234
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
