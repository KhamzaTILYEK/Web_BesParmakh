import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuEraser, LuSave } from "react-icons/lu";
import { TextAreaFormInput, TextFormInput } from "@/components";

const BusinessDetailForm = () => {
  const businessDetailsFormSchema = yup.object({
    businessName: yup.string().required("Please enter your business name"),
    businessType: yup.string().required("Please enter your business type"),
    contactNO: yup.number().required("Please enter your contact Number"),
    gstNo: yup.string().required("Please enter your GST NO."),
    website: yup.string().required("Please enter website url"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    description: yup.string().required("Please Enter your description"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(businessDetailsFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(() => { })}
      id="tabBusinessDetail"
      className="hidden"
      role="tabpanel"
    >
      <h4 className="mb-6 text-lg font-medium text-default-900">Алхам 2:</h4>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TextFormInput
          name="businessName"
          type="text"
          label="Бизнес нэр"
          placeholder="Бизнесийнхээ нэрийг оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="businessType"
          type="text"
          label="Бизнесийн төрөл"
          placeholder="Бизнесийнхээ төрлийг оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="contactNO"
          type="text"
          label="Холбогдох дугаар"
          placeholder="Холбоо барих дугаараа оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="gstNo"
          type="text"
          label="GST дугаар"
          placeholder="GST дугаараа оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="website"
          type="text"
          label="Вэб сайт"
          placeholder="Website.com руу орно уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="email"
          type="email"
          label="Имэйл"
          placeholder="Имэйлээ оруулна уу"
          control={control}
          fullWidth
        />
        <TextAreaFormInput
          name="description"
          label="Тодорхойлолт"
          placeholder="Тодорхойлолтыг оруулна уу"
          rows={5}
          containerClassName="lg:col-span-2"
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

export default BusinessDetailForm;
