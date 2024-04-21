import { LuSave, LuUndo } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextAreaFormInput, TextFormInput } from "@/components";

const BusinessDetailForm = () => {
  const businessDetailsFormSchema = yup.object({
    businessName: yup.string().required("Бизнесийнхээ нэрийг оруулна уу"),
    businessType: yup.string().required("Бизнесийнхээ төрлийг оруулна уу"),
    contactNO: yup.number().required("Холбоо барих дугаараа оруулна уу"),
    gstNo: yup.string().required("GST дугаараа оруулна уу."),
    website: yup.string().required("Вэбсайт url оруулна уу"),
    email: yup
      .string()
      .email("Хүчинтэй имэйл оруулна уу")
      .required("Имэйлээ оруулна уу"),
    description: yup.string().required("Тайлбараа оруулна уу"),
  });

  const defaultValue = {
    businessName: "Healthy Feast Corner",
    businessType: "Partnership",
    contactNO: 7465782356,
    gstNo: "GYOST6472",
    website: "http://healthyfeastcorner.com",
    email: "kianna.vetrov@mail.com",
    description:
      "Өвчтөнд анхаарал халамж тавих, үйлчлүүлэгчийг дагаж мөрдөх нь чухал боловч үүнтэй зэрэгцэн тэд маш их зовлон зүдгүүрт өртөх болно. Би нэг зүйлд оръё, бидний бэлтгэл юу вэ? Би нэг зүйлд оръё, бидний бэлтгэл юу вэ? Хамгийн жижиг нарийн ширийн зүйлийг хэлэхэд бидний дасгал хэн бэ?",
  };

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(businessDetailsFormSchema),
    defaultValues: defaultValue,
  });

  const undoChanges = () => {
    reset(defaultValue);
  };

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
          label="Business Name"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="businessType"
          type="text"
          label="Бизнесийн төрөл"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="contactNO"
          type="text"
          label="Холбогдох дугаар"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="gstNo"
          type="text"
          label="GST дугаар"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="website"
          type="text"
          label="Вэб сайт"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="email"
          type="email"
          label="Имэйл"
          control={control}
          fullWidth
        />
        <TextAreaFormInput
          name="description"
          label="Тодорхойлолт"
          placeholder="Enter Description"
          rows={5}
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
      </div>
      <div className="flex flex-wrap justify-end gap-4">
        <button
          type="reset"
          onClick={undoChanges}
          className="inline-flex items-center gap-1 rounded-lg border border-primary bg-transparent px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:bg-primary hover:text-white"
        >
          <LuUndo size={20} />
          Цуцлах
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
