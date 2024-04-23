import { Link } from "react-router-dom";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const MegaMenuDropdown = () => {
  return (
    <li>
      <div className="hs-dropdown relative inline-flex [--trigger:hover] [--auto-close:inside]">
        <button className="hs-dropdown-toggle inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary hover:after:-bottom-10 lg:text-base">
          Мега цэс <LuChevronDown size={16} className="ms-2" />
        </button>
        <div className="hs-dropdown-menu absolute inset-x-0 top-full z-10 mt-4 hidden w-full min-w-full opacity-0 transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100">
          <div className="container">
            <div className="overflow-hidden rounded-lg border border-default-200 bg-white shadow-lg dark:bg-default-50">
              <div className="grid grid-cols-12">
                <div className="col-span-2 text-sm">
                  <div className="h-full w-full bg-default-100 px-6 py-10">
                    <nav
                      aria-label="Tabs"
                      className="flex flex-col space-y-3.5"
                      data-hs-tabs-vertical="true"
                      role="tablist"
                    >
                      <button
                        className="active inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#wraps"
                        role="tab"
                        type="button"
                      >
                        Боодол <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#noodles"
                        role="tab"
                        type="button"
                      >
                        Гоймон <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#mexican" type="button"
                      >
                        Мексик хоол{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#tacos"
                        role="tab"
                        type="button"
                      >
                        Тако <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#smart-meals"
                        role="tab"
                        type="button"
                      >
                        Ухаалаг хоол{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#burger"
                        role="tab"
                        type="button"
                      >
                        Бургер <LuChevronRight size={20} className="ms-auto" />
                      </button>
                      <button
                        className="inline-flex items-center !bg-transparent text-base font-medium text-default-600 transition-all hover:text-primary hs-tab-active:text-primary"
                        data-hs-tab="#beverages-desserts"
                        role="tab"
                        type="button"
                      >
                        Ундаа &amp; Амттан{" "}
                        <LuChevronRight size={20} className="ms-auto" />
                      </button>
                    </nav>
                  </div>
                </div>
                <div className="col-span-10">
                  <div className="py-10">
                    <div id="wraps" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Буурцагт суурилсан боолт
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хар шошны боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шарсан шош, бяслагны боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Фалафелийн боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Улаан вандуй ба Hummus боодол
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Шарсан хүнсний ногооны боодол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шарсан ногооны боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шарсан улаан чинжүүний боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Портобелло мөөгний боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хаш Пармезан боодол
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Бяслаг, бууцай боодол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Бууцай ба Фета боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Paneer Tikka боодог
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Caprese боолт
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Тахианы боодол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шарсан тахианы боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Буффало тахианы боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Цезарь тахианы боодол
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шаварма тахианы боодол
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="noodles" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Италийн гоймонгийн хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Болонезийн спагетти
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Феттучин Альфредо
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Лазанья
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Карбонара
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Пенне
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Азийн гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Рамен
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Пад Тайланд
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Pho
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Чоу Майн
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хутгасан гудамжууд
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Соба гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ло Майн
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Хятад гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Үхрийн махны шөл
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Дан Дан гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Кунжутын гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Вонтон гоймонтой шөл
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                ж А Жиан Миа Н
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Японы гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                якисоба
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Темпура Удон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хөргөсөн хятад хоол алга болдог
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Суши ороомог
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="mexican" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Тайландын гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Согтуу гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Том Юм гоймонтой шөл
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ногоон карри гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шилэн гоймонтой салат
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Энэтхэгийн гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Veg Hakka гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Магги гоймон
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Масала бэлэн гоймон
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Солонгос гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Жапчае
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Жажанмён
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Рамён
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Наенмён
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Баруун гоймонтой хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Тахианы гоймонтой шөл
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Үхрийн махны строганов
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Туна гоймонтой Casserole
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Гоймон ба бяслаг
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="tacos" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Тако
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Гудамжны тако
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Карнитас Такос
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                BBQ Tacos
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Загасны тако
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Цагаан хоолтон Тако
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Энчиладас
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Тахианы мах Enchiladas
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Чейз дэх Энчиладус
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Үхрийн мах Enchiladas
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Швейцарийн Энчиладас
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Тамалес
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Гахайн Тамалес
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Тамалес тахианы мах
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Амтат Тамалес
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Кесадилла
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Кесадилла бяслаг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Тахианы мах Кесадилла
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Цагаан хоолтон Кесадилла
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="smart-meals" role="tabpanel">
                      <div className="grid grid-cols-3 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Тэнцвэртэй хооллолт
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шарсан тахианы хөхний ууранд жигнэсэн брокколи болон
                                quinoa
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Аспарагус, бор будаатай жигнэсэн хулд загас
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Нүүрс ус багатай хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Цэцэгт байцааны будаа дүфүгээр хуурч, холино
                                хүнсний ногоо
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Песто болон шарсан сам хорхойтой цуккини гоймон
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Уураг ихтэй хоол
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хажуугийн салаттай туранхай үхрийн мах эсвэл цацагт хяруулын бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Жимс жимсгэнэ, самартай Грек тараг parfait
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hidden" id="burger" role="tabpanel">
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Сонгодог бургер
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Чизбургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Бэкон бяслаг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Давхар бяслаг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Гурвалсан бяслаг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Сонгодог ногооны бургер
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Пэтти хувилбарууд
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Турк бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Тахианы мах бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Бизон бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Салмон бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хар шоштой бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Портобелло мөөгтэй бургер
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Амтат амтлагч
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Барбекю бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Мөөгтэй Швейцарийн бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Баруун/Ковбой бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Цэнхэр бяслагтай бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Жалапэно бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Гуакамол бургер
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Өглөөний цайны бургер
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Авокадо бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Caprese бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Газар дундын тэнгисийн бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Текс-Мекс бургер
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Рубен бургер
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="hidden"
                      id="beverages-desserts"
                      role="tabpanel"
                    >
                      <div className="grid grid-cols-4 divide-x divide-default-200">
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Кофенд суурилсан
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Эспрессо
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Капучино
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Латте
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Америко
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Моча
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Макиато
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Цай
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Хар цай
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ногоон цай
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Ургамлын гаралтай цай
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Чай цай
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Эрл Грэй
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Бялуу
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шоколадтай бялуу
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Луувангийн бялуу
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Улаан хилэн бялуу
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Бяслагны бялуу
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ps-6">
                          <h6 className="text-base font-medium text-default-800">
                            Күүки &amp; нарийн боов
                          </h6>
                          <ul className="mt-4 grid space-y-3">
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Шоколадны чиптэй жигнэмэг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Үзэм Күүки
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Газрын самрын тостой жигнэмэг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Элсэн чихэртэй жигнэмэг
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Круассан
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                className="text-sm font-medium text-default-600 transition-all hover:text-primary"
                              >
                                Данийн нарийн боов
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MegaMenuDropdown;
