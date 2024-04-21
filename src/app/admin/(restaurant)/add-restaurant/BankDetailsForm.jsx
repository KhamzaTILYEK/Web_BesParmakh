import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuEraser, LuSave } from "react-icons/lu";
import { TextFormInput } from "@/components";

const BankDetailsForm = () => {
  const bankDetailsFormSchema = yup.object({
    bankName: yup.string().required("Банкны нэрээ оруулна уу"),
    branchName: yup.string().required("Салбарынхаа нэрийг оруулна уу"),
    holderName: yup.string().required("Өөрийн данс эзэмшигчийн нэрийг оруулна уу"),
    accountNo: yup.number().required("Бүртгэлийн дугаараа оруулна уу."),
    ifscNo: yup.string().required("IFSC кодыг оруулна уу"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(bankDetailsFormSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(() => { })}
      id="tabBankDetail"
      className="hidden"
      role="tabpanel"
    >
      <h4 className="mb-6 text-lg font-medium text-default-900">Алхам 3:</h4>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TextFormInput
          name="bankName"
          type="text"
          label="Банкны нэр"
          placeholder="Банкны нэрээ оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="branchName"
          type="text"
          label="Салбар"
          placeholder="Салбарынхаа нэрийг оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="holderName"
          type="text"
          label="Дансны эзэмшигчийн нэр"
          placeholder="Дансны эзэмшигчийн нэрийг оруулна уу"
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="accountNo"
          type="text"
          label="Дансны дугаар"
          placeholder="Дансны дугаараа оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="ifscNo"
          type="text"
          label="IFSC код"
          placeholder="IFSC кодыг оруулна уу"
          control={control}
          fullWidth
        />
      </div>
      <div className="flex flex-wrap justify-end gap-4">
        <button
          type="reset"
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-6 py-2.5 text-center text-sm font-semibold text-red-500 shadow-sm transition-colors duration-200 hover:bg-red-500 hover:text-white"
        >
          <LuEraser size={20} />
          Тодорхой
        </button>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
        >
          <LuSave size={20} />
          Хадгалах
        </button>
      </div>
    </form>
  );
};

export default BankDetailsForm;
