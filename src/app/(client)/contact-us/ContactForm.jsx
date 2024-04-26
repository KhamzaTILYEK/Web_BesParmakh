import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextAreaFormInput, TextFormInput } from "@/components";

const ContactForm = () => {
  const contactFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    subject: yup.string().required("Please enter your subject"),
    message: yup.string().required("Please enter your message"),
    fName: yup.string().required("Please enter your First name"),
    lName: yup.string().required("Please enter your Last Name"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(() => { })}>
      <div className="grid gap-6 lg:grid-cols-2">
        <TextFormInput
          name="fName"
          label="Нэр"
          type="text"
          placeholder="Нэр"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="lName"
          type="text"
          label="Овог"
          placeholder="Овог"
          control={control}
          fullWidth
        />
        <TextFormInput
          name="email"
          label="И-мэйл"
          type="email"
          placeholder="Имэйлээ оруулна уу"
          control={control}
          fullWidth
          containerClassName="lg:col-span-2"
        />
        <TextAreaFormInput
          name="message"
          label="Захиа"
          rows={5}
          className="bg-transparent"
          placeholder="Мессежээ оруулна уу"
          control={control}
          containerClassName="lg:col-span-2"
          fullWidth
        />
        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-3 text-base font-medium capitalize text-white transition-all hover:bg-primary-500"
          >
            мессеж илгээх
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
