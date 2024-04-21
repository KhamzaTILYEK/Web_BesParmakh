import { truckIconImg } from "@/assets/data";

const DeliveryDetail = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 p-4">
        <h4 className="text-sm font-medium text-default-800">
          Хүргэлтийн дэлгэрэнгүй мэдээлэл
        </h4>
      </div>
      <div className="p-6 text-center">
        <img src={truckIconImg} className="mx-auto mb-3 flex" alt="truck" />
        <h4 className="mb-2 text-base font-medium text-default-800">
          Ali Abakh
        </h4>
        <p className="mb-2 text-base font-medium text-default-700">
          ID: buy02272234
        </p>
        <p className="text-base text-default-700">
          Payment Mode: Prepaid (Debit Card)
        </p>
      </div>
    </div>
  );
};

export default DeliveryDetail;
