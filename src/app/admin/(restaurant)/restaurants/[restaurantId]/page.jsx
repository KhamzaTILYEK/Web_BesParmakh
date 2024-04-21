import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { getRestaurantById, getSellerById } from "@/helpers";
import { BreadcrumbAdmin } from "@/components";
import { RestaurantMenuDataTable } from "@/components/data-tables";
import CostAndUsageChart from "./CostAndUsageChart";
import {
  avatar1Img,
  avatar2Img,
  restaurant1Img,
  restaurantBgImg,
} from "@/assets/data/images";
import { dishesData } from "@/assets/data";

const columns = [
  {
    key: "name",
    name: "Dish",
  },
  {
    key: "category",
    name: "Category",
  },
  {
    key: "price",
    name: "Price",
  },
  {
    key: "id",
    name: "Order ID",
  },
  {
    key: "review",
    name: "Rating",
  },
];

const RestaurantDetails = () => {
  const { restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    (async () => {
      const foundRestaurant = await getRestaurantById(Number(restaurantId));
      let foundSeller;
      if (foundRestaurant)
        foundSeller = await getSellerById(foundRestaurant.seller_id);

      if (!foundRestaurant || !foundSeller) {
        navigate("/not-found");
      } else {
        setRestaurant({ ...foundRestaurant, seller: foundSeller });
      }
    })();
  }, [restaurantId]);

  const navigate = useNavigate();

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title={restaurant?.name ?? "Restaurant Detail"}
          subtitle="Restaurants"
          link="/admin/restaurants"
        />
        <div className="mb-6 rounded-lg border border-default-200 p-6">
          <img
            src={restaurantBgImg}
            className="hidden w-full md:flex"
            alt="background"
          />
          <div className="flex items-center gap-3 md:-mt-14 md:items-end">
            <img
              src={restaurant1Img}
              className="h-28 w-28 rounded-full bg-default-50"
              alt="restaurant"
            />
            <div>
              <h4 className="mb-1 text-base font-medium text-default-800">
                {restaurant?.name ?? "Restaurant Detail"}
              </h4>
              <p className="text-sm text-default-600">2013 оноос хойш</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <CostAndUsageChart />

            <RestaurantMenuDataTable
              columns={columns}
              rows={dishesData}
              buttonLink="/admin/add-dish"
              buttonText="Хоол нэмнэ"
              title="Цэс"
            />
          </div>
          <div className="xl:col-span-1">
            <div className="mb-6 rounded-lg border border-default-200">
              <div className="border-b border-b-default-300 p-6">
                <h4 className="text-xl font-medium text-default-900">
                  Худалдагчийн хувийн мэдээлэл
                </h4>
              </div>
              <div className="px-6 py-5">
                <table cellPadding={10}>
                  <tbody>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Эзэмшигчийн нэр:
                      </td>
                      <td className="text-start">{restaurant?.seller?.name}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Статус:
                      </td>
                      <td className="text-start">
                        {restaurant?.seller?.status}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Имэйл:
                      </td>
                      <td className="text-start">
                        {restaurant?.seller?.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Холбоо барих дугаар:
                      </td>
                      <td className="text-start">
                        {restaurant?.seller?.contact_no}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Захиалга:
                      </td>
                      <td className="text-start">
                        {restaurant?.seller?.orders}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">
                        Байршил:
                      </td>
                      <td className="text-start">
                        {restaurant?.seller?.location}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-6 rounded-lg border border-default-200">
              <div className="border-b border-b-default-300 p-6">
                <h4 className="text-xl font-medium text-default-900">
                  Хэрэглэгчийн тойм
                </h4>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">5</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-full rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">4</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-4/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">3</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-3/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">2</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-2/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">1</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-1/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex justify-around">
                  <div className="text-center">
                    <h2 className="mb-1 text-2xl font-medium text-default-900">
                      4.5{" "}
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                    </h2>
                    <p className="block text-xs text-default-600">
                      452 тойм
                    </p>
                  </div>
                  <div className="text-center">
                    <h2 className="mb-1 text-2xl font-medium text-default-900">
                      91%
                    </h2>
                    <p className="block text-xs text-default-600">
                      Санал болгож байна
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={avatar1Img}
                      className="h-11 w-11 rounded-full"
                      alt="avatar"
                    />
                    <div className="flex-grow">
                      <h4 className="mb-1 text-xs text-default-700">
                        Ali Abakh{" "}
                        <span className="text-default-600">🇺🇸UB</span>
                      </h4>
                      <h4 className="text-xs text-green-400">Баталгаажсан худалдан авагч</h4>
                    </div>
                    <div>
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                    </div>
                  </div>
                  <h5 className="mb-2 text-sm text-default-600">
                    ТИЙМ АМТТАЙ 🍯💯
                  </h5>
                  <p className="text-sm text-default-600">
                    Үйлчлүүлэгчийн үйлчилгээтэй байх нь чухал ч түүний араас харилцагчийн үйлчилгээ бий болно
                    гэхдээ ийм үед тэд маш их хөдөлмөр, өвдөлтөөр унасан
                    зарим нь Хамгийн жижиг нарийн ширийн зүйлийг хэлэхэд бидний дасгал хэн бэ?
                  </p>
                </div>
                <div className="mb-4">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={avatar2Img}
                      className="h-11 w-11 rounded-full"
                      alt="avatar"
                    />
                    <div className="flex-grow">
                      <h4 className="mb-1 text-xs text-default-700">
                        Khamza tilyek {" "}
                        <span className="text-default-600">🇺🇸US</span>
                      </h4>
                      <h4 className="text-xs text-green-400">Баталгаажсан худалдан авагч</h4>
                    </div>
                    <div>
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                      <FaStar
                        size={20}
                        className="inline-flex fill-yellow-400 align-middle text-yellow-400"
                      />
                    </div>
                  </div>
                  <h5 className="mb-2 text-sm text-default-600">
                    ТИЙМ АМТТАЙ 🍯💯
                  </h5>
                  <p className="text-sm text-default-600">
                    Үйлчлүүлэгчийн үйлчилгээтэй байх нь чухал ч түүний араас харилцагчийн үйлчилгээ бий болно
                    гэхдээ ийм үед тэд маш их хөдөлмөр, өвдөлтөөр унасан
                    зарим нь Хамгийн жижиг нарийн ширийн зүйлийг хэлэхэд бидний дасгал хэн бэ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
