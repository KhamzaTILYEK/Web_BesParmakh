import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuSave, LuUndo } from "react-icons/lu";
import {
  DateFormInput,
  SelectFormInput,
  TextAreaFormInput,
  TextFormInput,
} from "@/components";

const PersonalDetailsForm = () => {
  const personalDetailsFormSchema = yup.object({
    fName: yup.string().required("Өөрийн нэрээ оруулна уу"),
    lName: yup.string().required("Өөрийн овог нэрээ оруулна уу"),
    contactNO: yup.number().required("Холбоо барих дугаараа оруулна уу"),
    panNo: yup.string().required("PAN NO-оо оруулна уу."),
    email: yup
      .string()
      .email("Хүчинтэй имэйл оруулна уу")
      .required("Имэйлээ оруулна уу"),
    birthDate: yup.string().required("Төрсөн огноогоо сонгоно уу"),
    city: yup.string().required("Хотоо сонгоно уу"),
    country: yup.string().required("Улсаа сонгоно уу"),
    zipCode: yup.string().required("ZIP/Шуудангийн кодоо сонгоно уу"),
    description: yup.string().required("Тайлбараа оруулна уу"),
  });

  const defaultValue = {
    fName: "Kianna",
    lName: "Vetrovs",
    contactNO: 9876343281,
    panNo: "KGX5793RSD",
    email: "kianna.vetrov@mail.com",
    birthDate: "12/9/2000",
    city: "Kitchener",
    country: "Canada",
    zipCode: "45 3424",
    description:
      "Өвчтөнд анхаарал халамж тавих, үйлчлүүлэгчийг дагаж мөрдөх нь чухал боловч үүнтэй зэрэгцэн тэд маш их зовлон зүдгүүрт өртөх болно. Би нэг зүйлд оръё, бидний бэлтгэл юу вэ? Би нэг зүйлд оръё, бидний бэлтгэл юу вэ? Хамгийн жижиг нарийн ширийн зүйлийг хэлэхэд бидний дасгал хэн бэ?",
  };
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(personalDetailsFormSchema),
    defaultValues: defaultValue,
  });

  const undoChanges = () => {
    reset(defaultValue);
  };
  return (
    <form
      onSubmit={handleSubmit(() => { })}
      id="tabPersonalDetail"
      role="tabpanel"
    >
      <h4 className="mb-6 text-lg font-medium text-default-900">Алхам 1:</h4>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TextFormInput
          name="fName"
          type="text"
          label="Нэр"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="lName"
          type="text"
          label="Овог"
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
          name="panNo"
          type="text"
          label="PAN картын дугаар"
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
        <DateFormInput
          name="birthDate"
          type="date"
          label="Төрсөн он сар өдөр"
          className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
          options={{
            dateFormat: "d/m/Y",
          }}
          fullWidth
          control={control}
        />
      </div>
      <div className="mb-6 grid gap-6 lg:grid-cols-3">
        <SelectFormInput
          name="city"
          label="Хот"
          control={control}
          id="billing-city"
          instanceId="billing-city"
          options={[
            { value: "Alexander", label: "Alexander" },
            { value: "Andalusia", label: "Andalusia" },
            { value: "Anniston", label: "Anniston" },
            { value: "Athens", label: "Athens" },
            { value: "Atmore", label: "Atmore" },
            { value: "Auburn", label: "Auburn" },
            { value: "Chickasaw", label: "Chickasaw" },
            { value: "Clanton", label: "Clanton" },
            { value: "Demopolis", label: "Demopolis" },
            { value: "Guntersville", label: "Guntersville" },
            { value: "Huntsville", label: "Huntsville" },
            { value: "Jasper", label: "Jasper" },
            { value: "Marion", label: "Marion" },
          ]}
        />
        <SelectFormInput
          name="country"
          label="Улс/Бүс нутаг"
          control={control}
          id="billing-country"
          instanceId="billing-country"
          options={[
            { value: "United States", label: "United States" },
            { value: "Canada", label: "Canada" },
            { value: "Australia", label: "Australia" },
            { value: "Germany", label: "Germany" },
            { value: "Bangladesh", label: "Bangladesh" },
            { value: "China", label: "China" },
            { value: "Argentina", label: "Argentina" },
            { value: "Bharat", label: "Bharat" },
            { value: "Afghanistan", label: "Afghanistan" },
            { value: "France", label: "France" },
            { value: "Brazil", label: "Brazil" },
            { value: "Belgium", label: "Belgium" },
            { value: "Colombia", label: "Colombia" },
            { value: "Albania", label: "Albania" },
          ]}
        />
        <SelectFormInput
          name="zipCode"
          label="ZIP/Шуудангийн код"
          control={control}
          id="billing-zip-code1"
          instanceId="billing-zip-code1"
          options={[
            { value: 356123, label: "356123" },
            { value: 350115, label: "350115" },
            { value: 350125, label: "350125" },
            { value: 350135, label: "350135" },
            { value: 350145, label: "350145" },
          ]}
        />
        <TextAreaFormInput
          name="description"
          label="Тодорхойлолт"
          rows={5}
          containerClassName="lg:col-span-3"
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

export default PersonalDetailsForm;
