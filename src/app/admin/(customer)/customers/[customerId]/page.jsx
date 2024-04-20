import { lazy, useEffect, useState } from "react";
import { BreadcrumbAdmin, OrderDataTable } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import Error404 from "../../../../not-found";
const PersonDetailsCard = lazy(
  () => import("@/components/cards/PersonDetailsCard")
);

const CustomerDetails = () => {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null)

  useEffect(() => {

    setCustomer({})
    getCustumer()
  }, [customerId]);
  const getCustumer = async () => {
    try {
      const response = await fetch(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qfspg/endpoint/getCustomer?userName=${customerId}`
      )
      let customerData = await response.json();
      if (!customerData) {
        setCustomer(null)
      } else {
        console.log(customerData);
        setCustomer(customerData)
      }
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
  //   (async () => {
  //     const foundSeller = await getSellerById(Number(customerId));
  //     if (!foundSeller) {
  //       navigate("/not-found");
  //     } else {
  //       setSeller(foundSeller);
  //     }
  //   })();
  // }, [customerId]);

  const columns = [
    {
      key: "date",
      name: "Date",
    },
    {
      key: "id",
      name: "Order ID",
    },
    {
      key: "dish_id",
      name: "Dish",
    },
    {
      key: "amount",
      name: "Amount",
    },
    {
      key: "status",
      name: "Status",
    },
  ];

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">

        <BreadcrumbAdmin
          title="Хэрэглэгчийн дэлгэрэнгүй мэдээлэл"
          link="/admin/customers"
          subtitle="Үйлчлүүлэгчид"
        />
        {customer ? <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            {customer && <PersonDetailsCard customer={customer} />}
          </div>
          <div className="lg:col-span-2">
            <OrderDataTable
              title="Хэрэглэгчийн захиалгын түүх"
              columns={columns}
              rows={customer?.orders}
            />
          </div>
        </div> : <Error404 />}
      </div>
    </div>
  );
};

export default CustomerDetails;
