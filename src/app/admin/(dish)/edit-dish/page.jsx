import EditDishForm from "./EditDishForm";
import { BreadcrumbAdmin } from "@/components";
import EditDishUploader from "./EditDishUploader";

const EditProduct = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Таваг засах"
          subtitle="Аяга таваг"
          link="/admin/dishes"
        />
        <div className="grid gap-6 xl:grid-cols-3">
          <div>
            <EditDishUploader />
          </div>
          <EditDishForm />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
