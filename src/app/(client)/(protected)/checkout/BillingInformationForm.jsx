import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuCreditCard, LuDollarSign } from "react-icons/lu";
import { amazonPaymentImg, paypal2PaymentImg } from "@/assets/data/images";
import { useShoppingContext } from "@/context";
import moment from 'moment';
import { useNavigate, useParams } from "react-router-dom";
import {
  DateFormInput,
  SelectFormInput,
  TextAreaFormInput,
  TextFormInput,
} from "@/components";
import OrderSummary from "./OrderSummary";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BillingInformation = () => {
  const navigate = useNavigate();
  const {cartItems,getCalculatedOrder} = useShoppingContext();
  const [bill,setBill] = useState("")
  const [total,setTotal] = useState(0)
  const [order,setOrder] = useState("")
  const [loading,setLoading] = useState(false)
  const billingFormSchema = yup.object({
    fname: yup.string().required("Хэрэглэгчийн нэрээ оруулна уу"),
    lName: yup.string().required("Овогоо оруулна уу"),
    companyName: yup.string().optional(),
    address: yup.string().required("Та хаягаа оруулна уу"),
    country: yup.string().required("Улсаа сонгоно уу"),
    state: yup.string().required("Өөрийн муж/аймаг сонгоно уу"),
    city: yup.string().required("Хотоо сонгоно уу"),
    zipCode: yup.string().required("ZIP/Шуудангийн кодоо сонгоно уу"),
    email: yup
      .string()
      .email("Хүчинтэй имэйл оруулна уу")
      .required("Имэйлээ оруулна уу"),
    phoneNo: yup.number().required("Утасны дугаараа оруулна уу."),
    nameOnCard: yup.string().required("Нэрээ оруулна уу."),
    cardNo: yup
      .number()
      .min(16, "Картын дугаар нь 16 оронтой байх ёстой")
      .max(16, "Картын дугаар нь 16 оронтой тооноос хэтрэхгүй байх ёстой")
      .required("Картын дугаараа оруулна уу."),
    expiryDate: yup.date().required("Дуусах огноог оруулна уу"),
    cvvNo: yup
      .number()
      .max(4, "CVV дугаар 4 оронтой тооноос хэтрэхгүй байх ёстой")
      .min(3, "CVV дугаар нь дор хаяж 3 оронтой байх ёстой")
      .required("CVV дугаараа оруулна уу"),
    message: yup.string().optional(),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(billingFormSchema)
  });

useEffect(() => {
toStr()
console.log(cartItems);
}, [cartItems])

const toStr = async() =>{
  let orders = await `${cartItems.map((cart)=>{return(
    `${cart.dish.name}*${cart.quantity}`
  )})}`
  setTotal(getCalculatedOrder().total)
  setOrder(orders);
}
const sendOrder = async (e) => {
  let date = moment().format("DD MM YYYY hh:mm:ss")
  e.preventDefault()
if (e.target[0].value) {
  try {      
    if (bill=="paymentCard") {
      const response = await fetch(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qfspg/endpoint/addOrder?status=ordered&date=${date}&firstName=${e.target[0].value}&lastName=${e.target[1].value}&address=${e.target[2].value}&email=${e.target[3].value}&phoneNumber=${e.target[4].value}&info=${e.target[5].value}&order=${order}&amount=${total}`
      )
    }else{
      const response = await fetch(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qfspg/endpoint/addOrder?status=ordered&date=${date}&firstName=${e.target[0].value}&lastName=${e.target[1].value}&address=${e.target[2].value}&email=${e.target[3].value}&phoneNumber=${e.target[4].value}&info=${e.target[5].value}&order=${order}&amount=${total}`
      )
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
    let postsData = await response.json();
    if (postsData) {
      navigate("/")
    }

  } catch (err) {
    toast.success("done", {
      position: "top-right",
      duration: 1000,
    });
  }
  finally {
    setLoading(false);
  }
}
    
}
  return (
    <form
      onSubmit={(e)=>sendOrder(e)}
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      <div className="col-span-1 lg:col-span-2">
        <div className="mb-8">
          <h4 className="mb-6 text-lg font-medium text-default-800">
            Тооцооны мэдээлэл
          </h4>
          <div className="grid gap-6 lg:grid-cols-4">
            <TextFormInput
              name="fname"
              type="text"
              label="Нэр"
              placeholder="Нэр"
              control={control}
              fullWidth
              containerClassName="lg:col-span-2"
            />

            <TextFormInput
              name="lName"
              type="text"
              label="Овог"
              placeholder="Овог"
              control={control}
              fullWidth
              containerClassName="lg:col-span-2"
            />

            {/* <TextFormInput
              name="companyName"
              type="text"
              label="Компанийн нэр (заавал биш)"
              placeholder="Компанийн нэр "
              containerClassName="lg:col-span-2"
              control={control}
              fullWidth
            /> */}

            <TextAreaFormInput
              name="address"
              label="Хаяг"
              placeholder="Өөрийн хаягаа оруулна уу"
              containerClassName="lg:col-span-4"
              control={control}
              fullWidth
            />

            {/* <SelectFormInput
              name="country"
              label="Улс"
              control={control}
              id="billing-country"
              instanceId="billing-country"
              options={[
                { value: "Mongolia", label: "Mongolia" }
              ]}
            /> */}

            {/* <SelectFormInput
              name="state"
              label="Муж/Аймаг"
              control={control}
              id="billing-state-province"
              instanceId="billing-state-province"
              options={[
                { value: "Ulaanbaatar", label: "Ulaanbaatar" }
              ]}
            /> */}

            {/* <SelectFormInput
              name="city"
              label="Хот"
              control={control}
              id="billing-city"
              instanceId="billing-city"
              options={[
                { value: "Ulaanbaatar", label: "Ulaanbaatar" }
              ]}
            /> */}

            {/* <SelectFormInput
              name="zipCode"
              label="ZIP/Post"
              control={control}
              id="billing-zip-code"
              instanceId="billing-zip-code"
              options={[
                { value: 13250, label: "13250" }
              ]}
            /> */}

            <TextFormInput
              name="email"
              type="text"
              label="Имэйл"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="example@example.com"
              containerClassName="lg:col-span-2"
              control={control}
            />

            <TextFormInput
              name="phoneNo"
              type="text"
              label="Утасны дугаар"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="+976  123-XXX-7890"
              containerClassName="lg:col-span-2"
              control={control}
            />
          </div>
        </div>
        <div>
                <h4 className="mb-6 text-lg font-medium text-default-800">
                  Нэмэлт мэдээлэл
                </h4>

                <TextAreaFormInput
                  name="message"
                  label="Зурвас (заавал биш)"
                  placeholder="Таны захиалгын талаархи тэмдэглэл, жишээ нь. хүргэх тусгай тэмдэглэл"
                  control={control}
                  fullWidth
                />
        </div>
        <div className="mb-8">
          <h4 className="mb-6 text-lg font-medium text-default-800">
            Төлбөрийн сонголт
          </h4>
          <div className="mb-5 rounded-lg border border-default-200 p-6 lg:w-5/6">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div onClick={()=>setBill("paymentCOD")} className="p-6 text-center">
                <label
                  htmlFor="paymentCOD"
                  className="mb-4 flex flex-col items-center justify-center"
                >
                  <LuDollarSign className="mb-4 text-primary" size={24} />
                  <h5 className="text-sm font-medium text-default-700">
                    Бэлэн мөнгө Хүргэлт
                  </h5>
                </label>
                <input
                  id="paymentCOD"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                  defaultChecked
                />
              </div>
              {/* <div onClick={()=>setBill("paymentPaypal")} className="p-6 text-center">
                <label
                  htmlFor="paymentPaypal"
                  className="mb-4 flex flex-col items-center justify-center"
                >
                  <img
                    src={paypal2PaymentImg}
                    className="mb-4 h-6 w-6"
                    alt="paypal"
                  />
                  <h5 className="text-sm font-medium text-default-700">
                    PayPal
                  </h5>
                </label>
                <input
                  id="paymentPaypal"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div>
              <div onClick={()=>setBill("paymentAmazonPay")} className="p-6 text-center">
                <label
                  htmlFor="paymentAmazonPay"
                  className="mb-4 flex flex-col items-center justify-center"
                >
                  <img
                    src={amazonPaymentImg}
                    className="mb-4 h-6 w-6 dark:invert"
                    alt="amazon"
                  />
                  <h5 className="text-sm font-medium text-default-700">
                    Amazon Pay
                  </h5>
                </label>
                <input
                  id="paymentAmazonPay"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div> */}
              
              <div onClick={()=>setBill("paymentCard")} className="p-6 text-center">
                <label
                
                  htmlFor="paymentCard"
                  className="mb-4 flex flex-col items-center justify-center"
                >
                  <LuCreditCard className="mb-4 text-primary" size={24} />
                  <h5  className="text-sm font-medium text-default-700">
                    Дебит/Кредит карт
                  </h5>
                </label>
                <input
                  id="paymentCard"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div>
            </div>
          </div>
          {bill == "paymentCard" &&
            <div className="grid gap-6 lg:grid-cols-2">
              <TextFormInput
                name="nameOnCard"
                type="text"
                label="Картан дээрх нэр"
                className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                placeholder="Карт эзэмшигчийн нэрийг оруулна уу"
                containerClassName="lg:col-span-2"
                control={control}
              />

              <TextFormInput
                name="cardNo"
                type="text"
                label="Картны дугаар"
                className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                placeholder="Картын дугаарыг оруулна уу"
                containerClassName="lg:col-span-2"
                control={control}
                maxLength={16}
              />

              <DateFormInput
                name="expiryDate"
                type="date"
                label="Дуусах огноо"
                className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                placeholder="MM/YY"
                control={control}
                options={{
                  dateFormat: "m/y",
                }}
                fullWidth
              />

              <TextFormInput
                name="cvvNo"
                type="text"
                label="CVV"
                className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
                placeholder="Enter CVV number"
                maxLength={3}
                control={control}
              />
            </div>
          }
          
        </div>
        
      </div>

      <OrderSummary />
    </form>
  );
};

export default BillingInformation;
