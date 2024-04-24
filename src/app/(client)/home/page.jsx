import { lazy, useEffect, useState } from "react";
import { LuClock3, LuPhone, LuPlay } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import {
  circleLineHomeImg,
  arrowHomeImg,
  avatar1Img,
  avatar2Img,
  avatar3Img,
  burger1IconCategoryImg,
  heroHomeImg,
  aboutUsHomeImg,
  cupIconImg,
  vegetablesIconImg,
  truckIconImg,
  testimonialHomeImg,
  avatar4Img,
  offerPopupHomeImg,
  mockupHomeImg,
  offerBgHomeImg,
} from "@/assets/data/images";
import { consumerReviews } from "@/assets/data";
import { currentCurrency } from "@/common";
import { PageTitle } from "@/components";
const TestimonialsSwiper = lazy(
  () => import("@/components/swipers/TestimonialsSwiper")
);
const SpecialMenu = lazy(() => import("@/components/SpecialMenu"));

const Home = () => {

  return (
    <>
      <PageTitle title="Нүүр хуудас" />
      <section className="relative py-6 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0 blur-[60px]" />
        <div className="container relative">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-10 py-20">
              <div className="z-10 order-last flex items-center justify-center lg:order-first lg:justify-start">
                <div className="text-center lg:text-start">
                  <span className="mb-8 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary lg:mb-2">
                    #Тусгай хоол 🍇
                  </span>
                  <div className="mb-5 text-3xl font-bold capitalize text-default-950 md:text-5xl/snug lg:text-6xl/normal">
                    санал болгож байна&nbsp;
                    <span className="relative inline-flex">
                      <span>Амттай</span>
                      <img
                        src={circleLineHomeImg}
                        width={282}
                        height={90}
                        alt="circle"
                        className="absolute -z-10 hidden h-full w-full lg:flex"
                      />
                    </span>
                    <span className="text-primary">Хоол</span> Мөн түргэн шуурхай үйлчилгээ
                  </div>
                  <p className="mx-auto mb-8 text-lg font-medium text-default-700 md:max-w-md lg:mx-0">
                    Бид танд эрүүл, амттай хоол өгдөг тул танд хоолны дэглэм хэрэггүй гэж төсөөлөөд үз дээ!
                  </p>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-normal">
                    <button className="rounded-full bg-primary px-10 py-5 font-medium text-white transition-all hover:bg-primary-500">
                      Захиалгах
                    </button>
                    <button className="flex items-center text-primary">
                      <span className="me-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-400 border-e-transparent">
                        <LuPlay size={24} className="fill-primary" />
                      </span>
                      <span className="font-semibold">Хэрхэн захиалах вэ</span>
                    </button>
                  </div>
                  <div className="mt-14">
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                      <div className="flex items-center -space-x-1">
                        <div className="h-12 w-12">
                          <img
                            src={avatar1Img}
                            alt="avatar"
                            height={48}
                            width={48}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            src={avatar2Img}
                            alt="avatar"
                            height={48}
                            width={48}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            src={avatar3Img}
                            alt="avatar"
                            height={48}
                            width={48}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="text-base font-medium text-default-800">
                          Манай үйлчлүүлэгчид
                        </h1>
                        <p className="text-base text-default-900">
                          <FaStar
                            size={16}
                            className="inline fill-yellow-400 text-yellow-400"
                          />{" "}
                          4.7{" "}
                          <span className="text-sm text-default-500">
                            (13.7k Шүүмж)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center py-20">
              <span className="absolute start-0 top-0 -rotate-[40deg] text-3xl">
                🔥
              </span>
              <span className="absolute end-[10%] top-0 inline-flex h-14 w-14 -rotate-12 items-center justify-center rounded-lg bg-yellow-400 text-white">
                <LuClock3 size={24} />
              </span>
              <span className="absolute end-0 top-1/4 inline-flex h-4 w-4 -rotate-12 items-center justify-center rounded bg-primary text-white" />
              <div className="absolute -end-0 bottom-1/4 hidden md:block lg:hidden xl:block 2xl:-end-24">
                <img src={arrowHomeImg} alt="arrow" height={169} width={84} />
                <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-6 shadow-lg">
                  <img
                    src={avatar1Img}
                    className="h-16 w-16 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <h6 className="text-sm font-medium text-default-900">
                      Ali Abakh
                    </h6>
                    <p className="text-[10px] font-medium text-default-900">
                      Эрүүл, амттай хоол
                    </p>
                    <span className="inline-flex gap-0.5">
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-0 end-0 inline-flex h-4 w-4 -rotate-12 items-center justify-center rounded-full bg-primary text-white" />
              <span className="absolute -bottom-16 end-1/3 text-3xl">🔥</span>
              <div className="absolute bottom-0 start-0">
                <div className="flex items-center gap-2 rounded-full bg-default-50 p-2 pe-6 shadow-lg">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <img
                      src={burger1IconCategoryImg}
                      alt="burger"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                  <div>
                    <h6 className="text-sm font-medium text-default-900">
                      Халуун бургер
                    </h6>
                    <span className="inline-flex gap-0.5">
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <FaStar
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </span>
                    <h6 className="text-sm font-medium text-default-900">
                      <span className="text-sm text-primary">$</span> 8.14
                    </h6>
                  </div>
                </div>
              </div>

              <img
                src={heroHomeImg}
                width={497}
                height={537}
                alt="hero"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-16">
        <div className="container">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-default-500/5">
                <img
                  src={aboutUsHomeImg}
                  alt="about-us-pizza"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="mb-6 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
                Бидний тухай
              </span>
              <h2 className="mb-6 max-w-xl text-3xl font-semibold text-default-900">
                Чанартай хоол, дээд зэргийн үйлчилгээтэй газар.
              </h2>
              <p className="mb-16 max-w-2xl font-medium text-default-500 xl:mb-20">
                Энэ бол хоол бүрийг урласан хоолны төгс туршлага юм
                шинэхэн, өндөр чанартай орц найрлагатай, найрсаг байдлаар үйлчилнэ
                явах ажилтнууд.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-md border border-default-100 bg-transparent shadow-lg transition-all duration-200 hover:border-primary">
                  <div className="p-6">
                    <div className="mb-6">
                      <img
                        src={cupIconImg}
                        width={48}
                        height={48}
                        alt="service-img"
                      />
                    </div>
                    <h3 className="mb-6 text-xl font-medium text-default-900">
                      Түргэн хоол
                    </h3>
                    <p className="text-base text-default-500">
                      Эрүүл хүнс бол шим тэжээлээр баялаг хүнс юм
                    </p>
                  </div>
                </div>
                <div className="rounded-md border border-default-100 bg-transparent shadow-lg transition-all duration-200 hover:border-primary">
                  <div className="p-6">
                    <div className="mb-6">
                      <img
                        src={vegetablesIconImg}
                        width={48}
                        height={48}
                        alt="service-img"
                      />
                    </div>
                    <h3 className="mb-6 text-xl font-medium text-default-900">
                      Эрүүл хоол
                    </h3>
                    <p className="text-base text-default-500">
                      Эрүүл хоол нь шим тэжээлээр баялаг хоол хүнс юм
                    </p>
                  </div>
                </div>
                <div className="rounded-md border border-default-100 bg-transparent shadow-lg transition-all duration-200 hover:border-primary">
                  <div className="p-6">
                    <div className="mb-6">
                      <img
                        src={truckIconImg}
                        width={48}
                        height={48}
                        alt="service-img"
                      />
                    </div>
                    <h3 className="mb-6 text-xl font-medium text-default-900">
                      Хурдан хүргэлт
                    </h3>
                    <p className="text-base text-default-500">
                      Эрүүл хүнс бол шим тэжээлээр баялаг хүнс юм
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <div className="flex items-center gap-2">
                  <img
                    src={avatar3Img}
                    height={48}
                    width={48}
                    className="h-12 w-12 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <h6 className="text-base font-medium text-default-900">
                      Ali Abakh
                    </h6>
                    <p className="text-sm font-medium text-default-500">
                      Үүсгэн байгуулагч гүйцэтгэх захирал
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpecialMenu />

      <section className="py-6 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <div className="relative">
                <img
                  src={testimonialHomeImg}
                  className="mx-auto lg:mx-0"
                  alt="testimonial"
                />
                <div className="absolute -bottom-10 end-20">
                  <div className="rounded-xl bg-white shadow-lg dark:bg-default-100">
                    <div className="p-6">
                      <h6 className="mb-2 text-base font-semibold text-default-900">
                        Манай тоймчид
                      </h6>
                      <div className="flex items-center justify-center -space-x-1">
                        <div className="h-12 w-12">
                          <img
                            src={avatar1Img}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            alt="avatar"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            src={avatar2Img}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            alt="avatar"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            src={avatar3Img}
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-default-50 ring ring-default-100">
                          <span className="text-base"> 12K </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TestimonialsSwiper reviews={consumerReviews} />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${offerBgHomeImg})` }}
        className="relative bg-cover bg-no-repeat py-10 lg:py-28"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container">
          <div className="relative w-full lg:w-1/2">
            <h4 className="mb-6 font-handrawn text-2xl text-yellow-500">
              Тусгай Combo санал
            </h4>
            <h2 className="mb-8 text-4xl font-semibold text-white">
              Бид танай хотод хамгийн сайн хоол хийдэг
            </h2>
            <p className="mb-10 max-w-2xl text-base text-white/75">
              &quot;Үйлчлүүлэгчийн үйлчилгээтэй байх нь чухал ч түүний араас харилцагчийн үйлчилгээ бий болно
              гэхдээ ийм үед тэд маш их хөдөлмөр, өвдөлттэй адил тохиолдсон. гэх мэт
              Учир нь би ямар ч ажил хийдэггүй хамгийн багадаа л ирнэ
              зарим нь ашигтай байж болохоос бусад тохиолдолд.&quot;
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-primary px-10 py-4 font-medium text-white transition-all hover:bg-primary-500">
                Миний гэдсийг дүүргэ
              </button>
              <h4 className="text-2xl font-medium text-yellow-400">
                {currentCurrency}23.47{" "}
                <span className="text-lg text-white/75 line-through">
                  {currentCurrency}44.99
                </span>
              </h4>
            </div>
            <div className="absolute bottom-10 end-0 lg:-bottom-16">
              <img
                src={offerPopupHomeImg}
                className="w-20 lg:w-auto"
                alt="offer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-16">
        <div className="container">
          <div className="rounded-lg bg-primary/10">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div className="relative h-full p-6 lg:p-20">
                <span className="absolute end-16 top-1/3 rotate-45 text-xl">
                  😃
                </span>
                <span className="absolute end-0 top-1/2 rotate-45 text-xl">
                  🔥
                </span>
                <span className="absolute bottom-40 end-40 inline-flex h-2 w-2 items-center justify-center rounded-full bg-primary text-white" />
                <div className="absolute bottom-4 end-2 hidden lg:-end-6 lg:block xl:bottom-10 xl:end-0">
                  <div className="rounded-full bg-default-50 p-2 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 overflow-hidden rounded-full">
                        <img src={avatar4Img} alt="avatar" />
                      </div>
                      <div>
                        <h6 className="mb-1 text-base font-medium text-default-900">
                          Ali Abakh
                        </h6>
                        <p className="text-sm font-medium text-default-500">
                          Хоолны шуудан зөөгч
                        </p>
                      </div>
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                        <LuPhone />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="mb-6 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">
                  Апп татаж авах
                </span>
                <h2 className="mb-6 max-w-sm text-3xl/relaxed font-semibold text-default-900">
                  Өнөөдөр бидэнтэй хамт эхлээрэй!
                </h2>
                <p className="mb-10 max-w-md text-base text-default-900">
                  Хаана ч, хэзээ ч хоол олж, хоолоо аваарай
                  хурдан шуурхай хүргэнэ.
                </p>
                <button className="inline-flex rounded-full bg-primary px-10 py-4 font-medium text-white transition-all hover:bg-primary-500">
                  Яг одоо захиалаарай
                </button>
              </div>
              <div className="relative px-20 pt-20">
                <span className="absolute bottom-28 end-10 -rotate-45 text-3xl">
                  🔥
                </span>
                <span className="absolute bottom-10 end-20 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary text-white" />
                <span className="absolute end-10 top-1/4 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-yellow-400 text-white" />
                <span className="absolute end-1/4 top-12 -rotate-45 text-xl">
                  😋
                </span>
                <span className="absolute start-10 top-12 inline-flex h-2 w-2 items-center justify-center rounded-full bg-primary text-white" />
                <img
                  src={mockupHomeImg}
                  className="max-h-full max-w-full"
                  alt="mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
