import { Link } from "react-router-dom";
import { lazy } from "react";
import { LuEye, LuShoppingCart } from "react-icons/lu";
import {
  demo1Img,
  logoDarkImg,
  logoLightImg,
  offerBgOtherImg,
} from "@/assets/data/images";
import {
  adminPanelDemosData,
  authDemosData,
  clientAppDemosData,
  extraDemosData,
  frameworksData,
  landingFeaturesData,
  mainDemosData,
} from "@/assets/data/landing";
import { FeatureCard, DemoCard, TopMenu } from "@/components/landing";
const StickyHeader = lazy(() => import("@/components/StickyHeader"));

export default function Home() {
  return (
    <>
      <StickyHeader>
        <div className="flex h-16 items-center">
          <div className="container">
            <nav className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <img
                    src={logoDarkImg}
                    width={160}
                    height={80}
                    alt="logo"
                    className="flex h-16 dark:hidden"
                  />
                  <img
                    src={logoLightImg}
                    width={160}
                    height={80}
                    alt="logo"
                    className="hidden h-16 dark:flex "
                  />
                </Link>
              </div>

              <TopMenu />

              <div>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-lg  shadow-transparent transition-all duration-500 ease-in-out hover:-translate-y-[2px] focus:outline-none md:me-0"
                >
                  <LuShoppingCart size={20} /> Яг одоо захиалаарай
                </a>
              </div>
            </nav>
          </div>
        </div>
      </StickyHeader>
      <section
        className="relative bg-gradient-to-t from-orange-600/20 via-orange-600/5 to-orange-600/0 py-6 lg:pb-36 lg:pt-24"
        id="home"
      >
        <div className="absolute inset-0 " />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-10">
            <div className="z-10 self-center lg:col-span-4">
              <div className="text-center lg:text-start">
                <h1 className="text-2xl font-medium capitalize text-primary-950 dark:text-primary-50  md:text-3xl/snug lg:text-4xl/normal">
                  Олон зориулалттай{" "}
                  <span className="font-semibold text-primary">Хоол</span>{" "}
                  Үйлчлүүлэгч &amp; Tailwind-тэй админ програм
                </h1>
                <p className="mt-5">
                  Өөрийн дуртай хоолыг хүргэхэд хялбар болохыг олж мэдээрэй
                  шууд таны хаалга руу. 🚪
                </p>
                <a
                  href="#demo"
                  className="mt-10 inline-flex w-auto items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/10"
                >
                  Демо үзэх <LuEye size={20} />
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:col-start-6 lg:col-end-11">
              <img
                alt="demo"
                src={demo1Img}
                width={728}
                height={527}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className="text-2xl font-medium">ашиглан боловсруулсан</p>
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4">
              {frameworksData.map((framework, idx) => (
                <div
                  key={framework.name + idx}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-default-200"
                >
                  <img
                    src={framework.icon}
                    height={36}
                    width={36}
                    alt={framework.name}
                    className="h-9 w-9"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="demo">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Програмууд
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Client &amp; Admin Apps
            </h2>
            <p className="text-base font-medium text-default-900">
              Хүнсний бизнесийг чадавхижуулах: Үйлчлүүлэгчдэд саадгүй хяналт, хүч чармайлтгүй
              Админуудад зориулсан менежмент!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 lg:grid-cols-2">
            {mainDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold text-primary-700">
              Хэрэглэгч
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Үйлчлүүлэгч програм
            </h2>
            <p className="text-base font-medium text-default-900">
              Шуурхай амт, хялбар захиалга: Таны хоолны аялал эхэлнэ
              Манай Хүнсний үйлчлүүлэгчийн вэб програмыг энд оруулав!
            </p>
          </div>
          <div className="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientAppDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" id="admin">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Хяналт
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Админ самбар
            </h2>
            <p className="text-base font-medium text-default-900">
              Хүчин чармайлтгүй гал тогооны менежмент: Хоол хийх бизнесээ дээшлүүлээрэй
              Манай админ вэб програм!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {adminPanelDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Аюулгүй байдал
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Auth Pages
            </h2>
            <p className="text-base font-medium text-default-900">
              Мэдээжийн хэрэг, бид баталгаажуулалтын хуудсыг өгөх болно
              яг таны апп-д тохирсон.
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {authDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Туслагч
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Нэмэлт хуудаснууд
            </h2>
            <p className="text-base font-medium text-default-900">
              Амтаас гадна: Манай Нэмэлт хуудас вэб програмын тусламжтайгаар хүнсний сортуудыг судлаарай
              – Хоолны олон талт байдал инновацитай нийцдэг газар!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {extraDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-default-50/80 py-20" id="features">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Онцлогууд
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">
              Загварын гайхалтай онцлогууд
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {landingFeaturesData.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>
          <p className="mt-6 text-center text-base font-medium text-primary-900 dark:text-primary">
            Энэ бүхэн амттай сонсогдож байна, тийм үү? Худалдан авах хүртлээ хүлээнэ үү. 😉
          </p>
        </div>
      </section>
      <footer
        style={{ backgroundImage: `url(${offerBgOtherImg})` }}
        className="relative"
      >
        <div className="pb-10 pt-20">
          <div className="container relative">
            <div className="text-center">
              <div className="mx-auto mb-12">
                <Link className="flex items-center justify-center" to="">
                  <img
                    src={logoDarkImg}
                    width={130}
                    height={40}
                    alt="logo"
                    className="flex h-10 dark:hidden"
                  />
                  <img
                    src={logoLightImg}
                    width={130}
                    height={40}
                    alt="logo"
                    className="hidden h-10 dark:flex"
                  />
                </Link>
                <h2 className="my-5 text-xl font-semibold capitalize text-default-900 md:text-3xl">
                  Өөртөө хоол аваарай
                </h2>
                <p className="font-semibold text-default-800">
                  Хамтран ажиллаж эхэл <span className="text-primary">хоол </span>
                  өөрийн апп-аа олон сая хүнд үзүүлэх.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-lg  shadow-transparent transition-all duration-500 ease-in-out hover:-translate-y-[2px] focus:outline-none md:me-0"
                to=""
              >
                <LuShoppingCart size={20} /> Одоо худалдаж авах
              </Link>
            </div>
          </div>
        </div>
        <div className="container relative">
          <p className="py-6 text-center font-medium text-default-900">
            © Bes-Parmakh. аар урласан болон кодлогдсон{" "}
            <span className="text-red-500">❤️</span> by{" "}
            <Link
              className="text-primary-700"
              to="https://coderthemes.com/"
              target="_blank"
            >
              Кодер сэдэв
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
