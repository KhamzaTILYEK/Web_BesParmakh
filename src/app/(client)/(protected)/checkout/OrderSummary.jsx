import { useShoppingContext } from "@/context";
import { currentCurrency } from "@/common";
import { calculatedPrice } from "@/helpers";

const OrderSummary = () => {
  const { cartItems, getCalculatedOrder } = useShoppingContext();

  return (
    <div className="mb-5">
      <div className="rounded-lg border border-default-200 p-5">
        <h4 className="mb-5 text-lg font-semibold text-default-700">
          Захиалгын хураангуй
        </h4>

        {cartItems.map((item) => {
          const dish = item.dish;
          const quantity =
            cartItems.find((cartItem) => cartItem.dish_id == item.dish_id)
              ?.quantity ?? 1;
          return (
            dish && (
              <div key={item.id + dish?.id} className="mb-4 flex items-center">
                <img
                  src={dish.images[0]}
                  height={80}
                  width={80}
                  className="me-2 h-20 w-20"
                  alt={dish.name}
                />
                <div>
                  <h4 className="mb-2 text-base font-semibold text-default-700">
                    {dish.name}
                  </h4>
                  <h4 className="text-sm text-default-600">
                    {quantity} x{" "}
                    <span className="font-semibold text-primary">
                      {currentCurrency}
                      {calculatedPrice(dish)}
                    </span>
                  </h4>
                </div>
              </div>
            )
          );
        })}

        <div className="mb-6">
          <div className="mb-3 flex justify-between">
            <p className="text-sm text-default-500">Дэд нийлбэр</p>
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
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg border border-primary bg-primary px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500"
        >
          Захиалга өгөх
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
