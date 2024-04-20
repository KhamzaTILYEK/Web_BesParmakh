import { BreadcrumbAdmin, DishDataTable } from "@/components";
import { dishesData, adminDishListData } from "@/assets/data";

const columns = [
  {
    key: "name",
    name: "Dish Name",
  },
  {
    key: "category_id",
    name: "Category",
  },
  {
    key: "price",
    name: "Price",
  },
  {
    key: "quantity",
    name: "Quantity",
  },
  {
    key: "create_by",
    name: "Created By",
  },
  {
    key: "status",
    name: "Status",
  },
];

const ProductList = () => {
  const rows = dishesData.map((dish, idx) => {
    return {
      ...dish,
      ...adminDishListData[idx],
    };
  });

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Хоолны жагсаалт" subtitle="Аяга таваг" />

        <div className="grid grid-cols-1">
          <div className="rounded-lg border border-default-200">
            <DishDataTable
              rows={rows}
              columns={columns}
              title="Хоолны жагсаалт"
              buttonLink="/admin/add-dish"
              buttonText="Хоол нэмнэ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
