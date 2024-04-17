import { Link } from "react-router-dom";
import { useShoppingContext } from "@/context";
import { currentCurrency } from "@/common";

const CartTotal = () => {
  const { getCalculatedOrder } = useShoppingContext();
  return (
    <div className="mb-5 rounded-lg border border-default-200 p-5">
      <h4 className="mb-5 text-lg font-semibold text-default-800">
        Сагс нийт
      </h4>
      <div className="mb-6">
        <div className="mb-3 flex justify-between">
          <p className="text-sm text-default-500">Дэд-нийлбэр</p>
          <p className="text-sm font-medium text-default-700">
            {currentCurrency}
            {getCalculatedOrder().orderTotal.toFixed(2)}
          </p>
        </div>
        <div className="mb-3 flex justify-between">
          <p className="text-sm text-default-500">Хүргэлт</p>
          <p className="text-sm font-medium text-default-700">Үнэгүй</p>
        </div>
        <div className="mb-3 flex justify-between">
          <p className="text-sm text-default-500">Хөнгөлөлт</p>
          <p className="text-sm font-medium text-default-700">
            -{currentCurrency}
            {getCalculatedOrder().totalDiscount.toFixed(2)}
          </p>
        </div>
        <div className="mb-3 flex justify-between">
          <p className="text-sm text-default-500">Татвар</p>
          <p className="text-sm font-medium text-default-700">
            +{currentCurrency}
            {getCalculatedOrder().tax.toFixed(2)}
          </p>
        </div>
        <div className="my-4 border-b border-default-200" />
        <div className="mb-3 flex justify-between">
          <p className="text-base text-default-700">Нийт</p>
          <p className="text-base font-medium text-default-700">
            {currentCurrency}
            {getCalculatedOrder().total.toFixed(2)}
          </p>
        </div>
      </div>
      <Link
        to="/checkout"
        className="inline-flex w-full items-center justify-center rounded-lg border border-primary bg-primary px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500"
      >
        Төлбөр тооцоог үргэлжлүүлнэ үү
      </Link>
    </div>
  );
};

export default CartTotal;
