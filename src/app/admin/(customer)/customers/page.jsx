import { BreadcrumbAdmin, CustomerDataTable } from "@/components";

import { useEffect, useState } from "react";
const CustomersList = () => {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    getCustumersList()
  }, []);
  const getCustumersList = async () => {
    try {
      const response = await fetch(
        `https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qfspg/endpoint/getCustomers`
      )
      let postsData = await response.json();
      setCustomers(postsData)
    } catch (err) {
      console.log(err);
    }
  }
  const columns = [
    {
      key: "firstName",
      name: "FirstName",
    },
    {
      key: "lastName",
      name: "LastName",
    },
    {
      key: "contact_no",
      name: "Phone",
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "orders",
      name: "Orders",
    },
    {
      key: "order_total",
      name: "Order Total",
    },
    {
      key: "joining_date",
      name: "Customer Since",
    },
    {
      key: "status",
      name: "Status",
    },
  ];

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Хэрэглэгчдийн жагсаалт" subtitle="Үйлчлүүлэгчид" />

        <CustomerDataTable
          rows={customers}
          columns={columns}
          title="Үйлчлүүлэгчид"
          buttonText="Шинэ харилцагч нэмнэ үү"
          buttonLink="/admin/add-customer"
        />
      </div>
    </div>
  );
};

export default CustomersList;
