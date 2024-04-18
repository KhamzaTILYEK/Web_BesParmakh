import { BreadcrumbAdmin, CustomerDataTable } from "@/components";

//data
import { sellersData } from "@/assets/data";
import { useEffect, useState } from "react";
const CustomersList = () => {
  const [customers,setCustomers]=useState([])
  useEffect(() => {
    getCustumersList()
  },[]);
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
      key: "name",
      name: "Name",
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
        <BreadcrumbAdmin title="Customers List" subtitle="Customers" />

        <CustomerDataTable
          rows={customers}
          columns={columns}
          title="Customers"
          buttonText="Add a new Customer"
          buttonLink="/admin/add-customer"
        />
      </div>
    </div>
  );
};

export default CustomersList;
