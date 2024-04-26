import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SelectFormInput,
  TextAreaFormInput,
  TextFormInput,
} from "@/components";

const ShippingAddressForm = () => {
  const shippingAddressFormSchema = yup.object({
    sfName: yup.string().required("Please enter your first name"),
    slName: yup.string().required("Please enter your last Name"),
    scompanyName: yup.string().optional(),
    saddress: yup.string().required("Please enter your Address"),
    scountry: yup.string().required("Please select your Country"),
    sstate: yup.string().required("Please select your State/Province"),
    scity: yup.string().required("Please select your City"),
    szipCode: yup.string().required("Please select your ZIP/Postal code"),
    semail: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    sphoneNo: yup.number().required("Please enter your Phone NO."),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(shippingAddressFormSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(() => { })}
      className="rounded-lg border border-default-200 p-6"
    >
      <h4 className="mb-6 text-xl font-medium text-default-900">
        Хүргэлтийн хаяг
      </h4>
      <div className="grid gap-6 lg:grid-cols-2">
        <TextFormInput
          name="sfName"
          label="Нэр"
          type="text"
          placeholder="Нэрээ оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="slName"
          label="Овог"
          type="text"
          placeholder="Овогоо оруулна уу"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="scompanyName"
          label="Компанийн нэр (заавал биш)"
          type="text"
          placeholder="Компанийнхаа нэрийг оруулна уу"
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
        <TextAreaFormInput
          name="saddress"
          label="Хаяг"
          placeholder="47/х зам, байшин №. 123/Б, Хавтгай дугаар В4"
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
        <SelectFormInput
          name="scountry"
          label="Улс/Бүс нутаг"
          control={control}
          id="billing-country3"
          instanceId="billing-country"
          containerClassName="lg:col-span-2"
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
          name="sstate"
          label="Муж/Аймаг"
          control={control}
          id="billing-state-province3"
          containerClassName="lg:col-span-2"
          instanceId="billing-state-province"
          options={[
            { value: "Alabama", label: "Alabama" },
            { value: "Alaska", label: "Alaska" },
            { value: "Arizona", label: "Arizona" },
            { value: "Arkansas", label: "Arkansas" },
            { value: "California", label: "California" },
            { value: "Colorado", label: "Colorado" },
            { value: "Connecticut", label: "Connecticut" },
            { value: "Delaware", label: "Delaware" },
            { value: "Florida", label: "Florida" },
            { value: "Gujarat", label: "Gujarat" },
            { value: "Iowa", label: "Iowa" },
            { value: "Kansas", label: "Kansas" },
            { value: "Kentucky", label: "Kentucky" },
          ]}
        />
        <SelectFormInput
          name="scity"
          label="Хот"
          control={control}
          id="billing-city3"
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
          name="szipCode"
          label="ZIP/Шуудангийн код"
          control={control}
          id="billing-zip-code3"
          instanceId="billing-zip-code"
          options={[
            { value: 356123, label: "356123" },
            { value: 350115, label: "350115" },
            { value: 350125, label: "350125" },
            { value: 350135, label: "350135" },
            { value: 350145, label: "350145" },
          ]}
        />
        <TextFormInput
          name="semail"
          label="Имэйл"
          type="text"
          placeholder="demoexample@mail.com"
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="sphoneNo"
          label="Утасны дугаар"
          type="text"
          placeholder="+1-123-XXX-4567"
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
        <div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500"
          >
            Өөрчлөлтүүдийг хадгалах
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShippingAddressForm;
