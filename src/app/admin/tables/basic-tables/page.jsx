import { BreadcrumbAdmin } from "@/components";
import { Link } from "react-router-dom";
import {
  basicTable,
  contextualTable,
  nestingTable,
  responsiveTable,
} from "../data";

const BasicTables = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Basic Tables" subtitle="Tables" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Үндсэн жишээ
              </h3>
              <p className="text-default-600 mb-4">
                Үндсэн хэв маягийн хувьд - хөнгөн дэвсгэр ба зөвхөн хэвтээ хуваагч - нэмнэ үү
                суурь анги <code className="text-danger">ширээ</code> хэнд ч
                <code className="text-danger">&lt;table&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Харанхуй ширээ
              </h3>
              <p className="text-default-600 mb-4">
                Та мөн өнгийг эргүүлж болно—харанхуй дээр цайвар тексттэй
                дэвсгэр - хамт<code className="text-danger">bg-dark</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="border overflow-hidden bg-slate-900 border-slate-800">
                    <table className="min-w-full divide-y divide-slate-800">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-white">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Ширээний толгойн гэрэл
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгт болон харанхуй хүснэгттэй адил өөрчлөгч ангиллыг ашиглана уу
                <code className="text-danger">.bg-light</code> хийх
                <code className="text-danger">&lt;thead&gt;</code>гэрэлтэй харагдаж байна
                эсвэл хар саарал.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr className="bg-default-100">
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Ширээний толгой харанхуй
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгт болон харанхуй хүснэгттэй адил өөрчлөгч ангиллыг ашиглана уу
                <code className="text-danger">.bg-dark</code> хийх
                <code className="text-danger">&lt;thead&gt;</code>гэрэлтэй харагдаж байна
                эсвэл хар саарал.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr className="bg-slate-900">
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Хилтэй ширээ
              </h3>
              <p className="text-default-600 mb-4">
                Нэмэх <code className="text-danger">хил</code> хилийн хувьд
                хүснэгт болон нүднүүдийн бүх тал.
              </p>
              <div className="relative overflow-auto">
                <table className="border-collapse min-w-full border border-default-200 bg-white dark:bg-transparent text-sm shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        #
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Эхлээд
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Сүүлийн
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-center">
                        Бариул
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(basicTable || []).map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <th
                            scope="row"
                            className={`flex items-center gap-2 px-4 py-4 text-default-900 whitespace-nowrap dark:text-default-400 ${value.id !== 1
                                ? "border-t border-default-200"
                                : ""
                              }`}
                          >
                            {value.id}
                          </th>
                          {value.id === 3 ? (
                            <td
                              colSpan={2}
                              className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400"
                            >
                              {value.firstName} {value.lastName}
                            </td>
                          ) : (
                            <>
                              <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.firstName}
                              </td>
                              <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.lastName}
                              </td>
                            </>
                          )}
                          <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400 text-center">
                            <Link to="">{value.username}</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Хилийн өнгө
              </h3>
              <p className="text-default-600 mb-4">
                Нэмэх <code className="text-danger">border-primary</code> төлөө
                Хүснэгт болон нүднүүдийн бүх талын хүрээ.
              </p>
              <div className="relative overflow-auto">
                <table className="border-collapse min-w-full border border-primary dark:border-primary bg-white dark:bg-transparent text-sm shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        #
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Эхлээд
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Сүүлийн
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-center">
                        Бариул
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(basicTable || []).map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <th
                            scope="row"
                            className={`flex items-center gap-2 px-4 py-4 text-default-900 whitespace-nowrap dark:text-default-400 ${value.id !== 1
                                ? "border-t border-primary dark:border-primary"
                                : ""
                              }`}
                          >
                            {value.id}
                          </th>
                          {value.id === 3 ? (
                            <td
                              colSpan={2}
                              className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400"
                            >
                              {value.firstName} {value.lastName}
                            </td>
                          ) : (
                            <>
                              <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.firstName}
                              </td>
                              <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.lastName}
                              </td>
                            </>
                          )}
                          <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400 text-center">
                            <Link to="">{value.username}</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Хил хязгааргүй ширээ
              </h3>
              <p className="text-default-600">
                Нэмэх <code className=" text-danger">divide</code> ширээний хувьд
                хил хязгааргүй.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Жижиг ширээ
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгтийг илүү нягт нямбай болгохын тулд эсийн дэвсгэрийг хагасаар нь багасгаж нэмнэ.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              {value.id === 3 ? (
                                <td
                                  colSpan={2}
                                  className="px-4 py-2 whitespace-nowrap text-sm text-default-600"
                                >
                                  {value.firstName} {value.lastName}
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                </>
                              )}
                              <td className="px-4 py-2 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-default-600">
                            4
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                            Mark
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                            Mark
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-start text-default-600">
                            @mdo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Хөвөгч мөрүүд
              </h3>
              <p className="text-default-600 mb-4">
                Нэмэх
                <code className="text-danger">
                  hover:{"{"}color{"}"}-*
                </code>
                a доторх хүснэгтийн мөрүүд дээр хулганын төлөвийг идэвхжүүлэх
                <code>&lt;tbody&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className="hover:bg-default-100 dark:hover:bg-transparent"
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Идэвхтэй хүснэгтүүд
              </h3>
              <p className="text-default-600 mb-4">
                Нэмэх
                <code className="text-danger">
                  hover:{"{"}color{"}"}-*
                </code>
                a доторх хүснэгтийн мөрүүд дээр хулганын төлөвийг идэвхжүүлэх
                <code>&lt;tbody&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${value.id === 1
                                  ? "bg-default-100 dark:bg-transparent"
                                  : "hover:bg-default-100 dark:hover:bg-transparent"
                                }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              {value.id === 3 ? (
                                <td
                                  colSpan={2}
                                  className="px-4 py-4 whitespace-nowrap text-sm text-default-600 bg-default-100 dark:bg-transparent"
                                >
                                  {value.firstName} {value.lastName}
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                </>
                              )}
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Судалчлагдсан эгнээ
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгтийн доторх дурын мөрөнд тахө зураас нэмэхийн тулд .table-striped-г ашиглана уу
                нь .
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${value.id !== 2
                                  ? "bg-default-100 dark:bg-transparent"
                                  : ""
                                }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Тайлбар
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгтийн гарчиг шиг функцийг гүйцэтгэдэг. Энэ нь хэрэглэгчдэд тусалдаг
                Дэлгэц уншигчид хүснэгтийг олж, энэ нь юу болохыг ойлгох болно
                мөн тэд үүнийг уншихыг хүсч байгаа эсэхийг шийднэ.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable.slice(0, 2) || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <p className="ps-2 text-default-600">List of users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Контекст ангиуд
              </h3>
              <p className="text-default-600 mb-4">
                Хүснэгтийн мөр эсвэл бие даасан нүднүүдийг будахын тулд контекст ангиллыг ашиглана уу.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Баганын гарчиг
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Баганын гарчиг
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Баганын гарчиг
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(contextualTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${value.id === 1
                                  ? `bg-${value.variant}-100 dark:bg-transparent`
                                  : `bg-${value.variant}/40`
                                }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                Баганын агуулга
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                Баганын агуулга
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                Баганын агуулга
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Үүрлэх ширээ
              </h3>
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Эхлээд
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Сүүлийн
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Бариул
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${value.id !== 2
                                  ? "bg-default-50 border-y border-default-200"
                                  : ""
                                }`}
                            >
                              {value.id === 2 ? (
                                <td colSpan={4} className="p-4">
                                  <table className="min-w-full divide-y divide-default-200">
                                    <thead>
                                      <tr>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          толгой
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          толгой
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          толгой
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {(nestingTable || []).map((item, idx) => {
                                        return (
                                          <tr
                                            key={idx}
                                            className="border-b border-default-200 dark:border-default-600"
                                          >
                                            <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-default-600">
                                              {item}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-default-600">
                                              эхлээд
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-start text-default-600">
                                              сүүлчийн
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-default-600">
                                    {value.id}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                    {value.username}
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2">
            <div className="border border-default-200 rounded-lg">
              <div className="p-6">
                <h3 className="font-medium text-base text-default-600 mb-4">
                  Хариуцлагатай хүснэгтүүд
                </h3>
                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-default-200">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              #
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Хүснэгтийн гарчиг
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-default-200">
                          {(responsiveTable || []).map((value, idx) => {
                            return (
                              <tr key={idx}>
                                <th
                                  scope="col"
                                  className="px-4 py-4 text-start text-sm font-medium text-default-600"
                                >
                                  {value}
                                </th>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Хүснэгтийн нүд
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTables;
