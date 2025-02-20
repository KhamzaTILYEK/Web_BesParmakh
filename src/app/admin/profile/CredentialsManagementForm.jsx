import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordFormInput } from "@/components";

const CredentialsManagementForm = () => {
  const credentialsManagementFormSchema = yup.object({
    currentPassword: yup
      .string()
      .required("Please enter your current password"),
    newPassword: yup.string().required("Please enter your new password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(credentialsManagementFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(() => { })}>
      <h4 className="mb-4 text-xl font-medium text-default-900">
        Нууц үг солих
      </h4>
      <PasswordFormInput
        name="currentPassword"
        label="Одоогын Нууц Үг"
        containerClassName="mb-4"
        placeholder="Нууц үгээ оруулна уу"
        control={control}
        fullWidth
      />
      <PasswordFormInput
        name="newPassword"
        label="Шинэ нууц үг"
        containerClassName="mb-4"
        placeholder="Шинэ нууц үгээ оруулна уу"
        control={control}
        fullWidth
      />
      <PasswordFormInput
        name="confirmPassword"
        label="Нууц үгээ баталгаажуулна уу"
        containerClassName="mb-4"
        placeholder="Баталгаажуулах нууц үгээ оруулна уу"
        control={control}
        fullWidth
      />
      <div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-primary-500"
        >
          Өөрчлөлтүүдийг хадгалах
        </button>
      </div>
    </form>
  );
};

export default CredentialsManagementForm;
