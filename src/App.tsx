import { Disclosure, Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Logo from "./assets/images/Logo.png";
import Marketing from "./assets/webp/marketing.webp";
import WebpProduct from "./assets/webp/product-recommendation.webp";
import { Button } from "./components/atoms/button";
import { Card } from "./components/atoms/card";
import { Banner } from "./components/organism/banner";
import { Header } from "./components/organism/header";
import { Main } from "./components/organism/main";
import { dataStatic } from "./constant/dataStatic";
function App() {
  const [testimoni, setTestimoni] = useState<any>();
  useEffect(() => {
    setTestimoni(dataStatic.testimoni[0]);
  }, []);

  return (
    <div className=" w-full h-screen">
      <Banner>
        <Header />
        <div className="h-full flex items-center justify-center mb-6 p-4 ">
          <form className=" allDekstop:w-1/2 w-full md:w-full justify-center flex flex-wrap allDekstop:mb-28 allMobile:my-10 ">
            <div className="flex flex-wrap gap-4 justify-center w-full mobileM:mt-20">
              <h3 className="text-white allDekstop:text-4xl allMobile:text-2xl allTab:text-4xl text-center font-bold">
                Bangun Website Terbaik dengan Layanan Hosting Terbaik
              </h3>
              <p className="text-center font-normal text-white text-sm w-[80%]">
                Kami menawarkan web hosting terbaik dengan fitur lengkap, harga
                terjangkau dan garansi 30 hari. Cek promos spesial dan dapatkan
                layanan terbaik mu.
              </p>
            </div>
            <div className="grid grid-rows-2 allDekstop:gap-4 allTab:gap-4 w-3/4">
              <h3 className="mt-4 text-base font-bold text-[#FFCF8A] text-center">
                Temukan Nama Domain Impian mu
              </h3>
              <div className="flex allMobile:flex-wrap gap-2 items-center allDekstop:justify-center">
                <input
                  type="text"
                  className="border-0 ring-0 p-2 px-4 outline-none w-full rounded-full"
                  placeholder="example.website"
                />
                <Button
                  type="button"
                  className=" allMobile:w-full rounded-full"
                  color="secondary"
                >
                  <label className="font-bold">Cari</label>
                </Button>
              </div>
            </div>
            <div className="w-full my-10 justify-center allMobile:grid allDekstop:flex allTab:flex allMobile:grid-cols-2 gap-4">
              {dataStatic.domains.map((data) => (
                <div
                  key={data.id}
                  className=" text-center px-5 py-3 border-2 cursor-pointer border-primary-400 rounded-lg flex items-center"
                >
                  <label className="text-secondary-500 font-bold text-lg mx-1">
                    {data.nama}
                  </label>
                  <label className="text-white">{data.harga}</label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </Banner>
      <section id="program" className=" allDekstop:p-6 allMobile:px-4">
        <div className="flex allDekstop:m-20 allMobile:flex-wrap my-14 items-center gap-4">
          <div className="allDekstop:w-1/2 allMobile:text-center allMobile:px-5 ">
            <label className="font-semibold allDekstop:text-2xl allMobile:text-lg ">
              Telah dioptimasi untuk berbagai CMS dan framework
            </label>
          </div>
          <div className="w-full justify-end items-center gap-2 grid grid-cols-4">
            {dataStatic.frameworks.map((data) => (
              <div
                key={data.id}
                className="flex allDekstop:justify-end allMobile:justify-center items-center"
              >
                <img
                  src={data.image}
                  className=" aspect-[3/2] object-contain allDekstop:w-1/2 allMobile:w-3/4 mix-blend-color-burn"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 allDekstop:mt-40 allMobile:mt-16">
          <h1 className=" text-center allDekstop:text-4xl allMobile:text-lg font-bold">
            Unlimited Web Hosting Indonesia
          </h1>
          <p className=" text-center allDekstop:text-lg allMobile:text-sm text-stone-600 allDekstop:w-8/12">
            Layanan web hosting Indonesia terbaik dengan fitur hosting
            terlengkap dan dukungan support 24 jam untuk kemudahan Anda meraih
            kesuksesan online!
          </p>
        </div>
        <div className="allDekstop:grid allDekstop:grid-cols-4 allDekstop:gap-3  allDekstop:p-20 allDekstop:px-24 allDekstop:my-10 allMobile:w-full allMobile:overflow-clip allMobile:my-7 allMobile:px-7 allMobile:p-2 allMobile:max-h-[800px] allMobile:flex-nowrap ">
          {dataStatic.pakets.map((paket) => (
            <Card
              key={paket.id}
              active={paket.highlight}
              className={` allMobile:mb-3 allMobile:drop-shadow-md  ${
                paket.highlight ? " allDekstop:-mt-14 " : null
              } rounded-2xl`}
            >
              {paket.highlight && (
                <div className="bg-secondary p-4 text-center text-white font-bold text-xl rounded-t-xl">
                  <label>Penawaran Terbaik!</label>
                </div>
              )}
              <div className="p-4">
                <h5 className=" allDekstop:text-base allMobile:text-lg font-medium allDekstop:mb-5 allMobile:mb-2">
                  {paket.name}
                </h5>
                <p className="text-sm text-stone-500">{paket.description}</p>
                <div className="flex gap-3 items-center justify-stretch allDekstop:my-8 allMobile:my-5">
                  <div
                    className={`${
                      paket.highlight ? "bg-[#f43636]" : "bg-[#00bfa6]"
                    } text-white px-4 py-2 rounded-md text-sm`}
                  >
                    <label>{paket.label}</label>
                  </div>
                  <div>
                    <p className=" text-gray-600 line-through">
                      {paket.discount}
                    </p>
                  </div>
                </div>
                <div className="flex items-end font-semibold my-8">
                  <label className="text-2xl text-secondary">
                    {paket.harga}
                  </label>
                  <p className="text-lg">/bulan</p>
                </div>
                <div className="flex justify-center">
                  <Button
                    type={"button"}
                    className="w-9/12 rounded-full py-3"
                    theme={paket.highlight ? "bgcolor" : "outline"}
                    color="secondary"
                  >
                    <label className="font-semibold">Pilih Paket</label>
                  </Button>
                </div>
                <div className=" my-5 border-b-2 border-gray-300">
                  <label className="font-medium text-gray-500">Resource</label>
                  <ul className="my-5">
                    {paket.fitur.map((data) => (
                      <li key={data.id} className="my-5">
                        <div className="flex items-start gap-2">
                          {data.status === "danger" ? (
                            <AiFillCloseCircle size={20} color="#f43636" />
                          ) : (
                            <AiFillCheckCircle
                              size={20}
                              color={
                                data.status === "success"
                                  ? "#00bfa6"
                                  : "#FFAA2E"
                              }
                            />
                          )}
                          <label className="text-sm font-normal text-gray-700">
                            {data.subtitle}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center font-medium text-primary pb-8">
                  <a href="#">Lihat Fitur Lengkap</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="feature"
        className="bg-slate-50 allDekstop:px-20 allMobile:px-5 pb-14"
      >
        <Card className=" w-full max-h-max rounded-2xl allDekstop:p-10 allMobile:p-4 allMobile:pb-10 mb-20 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
          <div className="  allDekstop:grid allDekstop:grid-cols-2 flex flex-col-reverse allDekstop:justify-stretch gap-2 px-5 items-center">
            <div className="flex flex-wrap gap-4 text-white">
              <h3 className="allDekstop:text-4xl allMobile:text-2xl font-bold">
                Rekomendasi Produk Sesuai Kebutuhan Anda!
              </h3>
              <label className="text-base">
                Masih bingung untuk memilih produk? Niagahoster siap membantu
                memilih produk yang paling tepat khusus untuk Anda. Cukup dengan
                menjawab kuisioner saja!
              </label>
              <Button
                type="button"
                theme="bgcolor"
                color="secondary"
                className="rounded-full mt-5 px-10 h-14 font-semibold"
              >
                <span>Detail Product</span>
              </Button>
            </div>
            <div className="">
              <img src={WebpProduct} className=" h-1/2 w-auto" />
            </div>
          </div>
        </Card>
        {dataStatic.features.map((feature) => (
          <div
            key={feature.id}
            className={`allDekstop:flex allDekstop:flex-nowrap gap-4 items-center px-5 ${
              feature.id % 2 === 0 ? "allDekstop:flex-row-reverse" : null
            }`}
          >
            <div className="flex flex-1 justify-center">{feature.image}</div>
            <div
              className={`flex flex-1 flex-wrap ${
                feature.id % 2 === 0
                  ? "allDekstop:text-end allDekstop:justify-end"
                  : null
              }`}
            >
              <h3 className="font-semibold allDekstop:text-2xl allMobile:text-xl">
                {feature.title}
              </h3>
              <label className=" my-4 text-gray-700 allDekstop:text-base allMobile:text-sm allDekstop:w-11/12 allMobile:w-full">
                {feature.subtitle}
              </label>
            </div>
          </div>
        ))}
      </section>
      <section
        id="testimoni"
        className="allDekstop:p-20 allDekstop:pb-0 pt-10 bg-blue-50"
      >
        <div className=" text-center allDekstop:text-2xl allMobile:text-xl allDekstop:font-bold allMobile:font-medium">
          Tanggapan Pengguna Eastech
        </div>
        <Tab.Group>
          <Tab.Panels>
            {dataStatic.testimoni.map((review) => (
              <Tab.Panel key={review.id} className={" allMobile:w-full"}>
                <figure className="flex allDekstop:flex-nowrap allMobile:flex-col pb-16 p-10 ">
                  <div className="allDekstop:py-16 flex-1">
                    <h3 className="allDekstop:text-8xl allMobile:text-6xl text-primary leading-none font-bold ">
                      “
                    </h3>
                    <label className=" allDekstop:text-2xl allMobile:text-lg text-gray-600">
                      {testimoni?.message}
                    </label>
                    <div className="text-start w-full leading-tight py-5 z-10 ">
                      <h3 className="font-semibold allDekstop:text-lg leading-snug text-primary">
                        {testimoni?.name}
                      </h3>
                      <label className=" allDekstop:text-base allMobile:text-sm text-gray-600">
                        {testimoni?.company}
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-1 justify-end py-10">
                    <div className="relative allMobile:m-auto allDekstop:w-80 allDekstop:h-80 allMobile:w-56 allMobile:h-56 bg-primary rounded-full aspect-square overflow-hidden blur-2xl "></div>
                    <img
                      src={testimoni?.figure}
                      className=" absolute aspect-square object-cover allDekstop:w-3/12 allMobile:w-3/4 allMobile:right-0 allMobile:left-0 allMobile:m-auto"
                    />
                  </div>
                </figure>
              </Tab.Panel>
            ))}
          </Tab.Panels>
          <Tab.List className="w-full allDekstop:flex  allMobile:grid allMobile:grid-cols-3 allMobile:p-3 allMobile:gap-2">
            {dataStatic.testimoni.map((tabs) => (
              <Tab
                key={tabs.id}
                onClick={() => setTestimoni(tabs)}
                className={`w-full right-0 ring-opacity-0 ring-offset-0 outline-none ${
                  testimoni?.id === tabs.id
                    ? "border-b-2 pb-4 border-primary-700"
                    : null
                } `}
              >
                <div className=" allDekstop:px-5 ">
                  <h3
                    className={`allDekstop:text-2xl allMobile:text-sm font-semibold ${
                      testimoni?.id === tabs.id
                        ? "text-primary-700"
                        : " text-gray-400"
                    }`}
                  >
                    {tabs.name}
                  </h3>
                  <label
                    className={`allDekstop:text-lg allMobile:text-xs  ${
                      testimoni?.id === tabs.id
                        ? "text-gray-500"
                        : " text-gray-300"
                    }`}
                  >
                    {tabs.company}
                  </label>
                </div>
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </section>
      <div
        id="relations"
        className="bg-blue-100 allDekstop:p-20 allMobile:p-5 "
      >
        <h3 className=" allDekstop:text-4xl allMobile:text-lg text-primary-600 font-bold text-center">
          Dipercaya 300.000++ Pelanggan di Seluruh Indonesia
        </h3>
      </div>
      <section
        id="question"
        className=" allDekstop:px-20 allMobile:p-5 allDekstop:pb-10"
      >
        <Card className=" w-full max-h-max rounded-2xl allDekstop:p-10 allMobile:p-4 allMobile:pb-10 my-5 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
          <div className="  allDekstop:grid allDekstop:grid-cols-2 allMobile:flex allMobile:flex-col-reverse gap-2 px-5 items-center">
            <div className="flex flex-wrap gap-4 text-white">
              <h3 className="allDekstop:text-4xl allMobile:text-2xl font-bold">
                Rekomendasi Produk Sesuai Kebutuhan Anda!
              </h3>
              <label className="text-base">
                Masih bingung untuk memilih produk? Niagahoster siap membantu
                memilih produk yang paling tepat khusus untuk Anda. Cukup dengan
                menjawab kuisioner saja!
              </label>
              <Button
                type="button"
                theme="bgcolor"
                color="secondary"
                className="rounded-full mt-5 px-10 h-14 font-semibold"
              >
                <span>Detail Product</span>
              </Button>
            </div>
            <div className="allDekstop:flex allDekstop:justify-end">
              <img src={Marketing} className=" w-4/5" />
            </div>
          </div>
        </Card>
        <div className=" allDekstop:px-10">
          <h3 className=" allDekstop:text-2xl allMobile:text-lg text-center my-10 allDekstop:font-bold allMobile:font-semibold">
            Pertanyaan yang sering diajukan
          </h3>
          {dataStatic.questions.map((data) => (
            <Disclosure key={data.id}>
              {({ open }) => (
                <div className="allDekstop:my-3 pb-4 allMobile:mb-3">
                  <Disclosure.Button
                    className={`py-2 rounded-lg w-full text-start px-5 ${
                      open ? "rounded-b-none border-b border-stone-400" : ""
                    }`}
                  >
                    <div className=" flex flex-grow justify-between items-center allMobile:text-sm allDekstop:font-medium">
                      <label className="w-full">{data.question}</label>
                      <FiChevronRight
                        size={20}
                        className={` w-5 ${open ? "rotate-90 transform" : ""}`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-600 bg-gray-50">
                    <div className="p-5 leading-relaxed">{data.answer}</div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
      <Main>
        <div className="grid grid-rows-2 justify-center text-center m-auto px-2">
          <div className=" mt-10">
            <h3 className="font-bold allDekstop:text-2xl allMobile:text-lg my-2">
              Awali kesuksesan Anda bersama EasyTech!
            </h3>
          </div>
          <div className="allDekstop:w-10/12 m-auto">
            <label className=" allMobile:text-sm allDekstop:text-lg">
              Kini tidak lagi sulit mewujudkan website impian. Performa hebat,
              keamanan ekstra, dan layanan dukungan teknis yang bisa diandalkan
              - semua dengan harga terjangkau!
            </label>
          </div>
          <Button
            type="button"
            color="secondary"
            className="my-5 w-56 m-auto rounded-lg font-semibold"
          >
            Mulai Sekarang
          </Button>
        </div>
      </Main>
      <footer className=" h-auto bg-primary-800 text-white allDekstop:px-52 allMobile:px-5 py-10">
        <div className=" grid gap-5 allDekstop:grid-cols-5 allMobile:grid-cols-2 text-sm">
          <div className="w-full flex flex-wrap gap-5 h-fit">
            <img src={Logo} />
            <p>
              Misi Kami adalah membantu jutaan orang memanfaatkan potensi yang
              ada di internet untuk membangun kesuksesan online.
            </p>
            <p>
              Jl. Palagan Tentara Pelajar No. 81 Jongkang, Sariharjo, Ngaglik,
              Sleman, Daerah Istimewa Yogyakarta, 55581
            </p>
            <div>
              <p>Telepon : 0333-271119999</p>
              <p>WhatsApp : 087701006245</p>
            </div>
            <ul className=" flex flex-wrap flex-1 allMobile:grid allMobile:grid-cols-3 justify-stretch allDekstop:gap-5 allMobile:gap-4 items-center">
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaInstagram />
              </li>
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaTiktok />
              </li>
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaYoutube />
              </li>
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaTwitter />
              </li>
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaFacebook />
              </li>
              <li className=" bg-secondary-500 text-lg rounded-full p-3 hover:bg-secondary-600">
                <FaLinkedin />
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap flex-1 w-full gap-5 px-3 h-fit">
            <div id="hosting">
              <h3 className="font-semibold mb-4 text-base">Web Hosting</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Hosting Indonesia</li>
                <li>Cloud Indonesia</li>
                <li>Email Indonesia</li>
                <li>Web Hosting Indonesia</li>
                <li>Hosting Terbaik</li>
                <li>Hosting Murah</li>
                <li>Hosting Singapore SG</li>
                <li>Keamanan SSL/HTTPS</li>
                <li>Data Center Hosting Terbaik</li>
                <li>Hosting Gratis</li>
                <li>Transfer Hosting</li>
                <li>VPS Gratis</li>
              </ul>
            </div>
            <div id="wordpress">
              <h3 className="font-semibold mb-4 text-base">WordPress</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>WordPress Hosting</li>
                <li>Simple WordPress</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap flex-1 w-full gap-5 px-3 h-fit">
            <div id="domain">
              <h3 className="font-semibold mb-4 text-base">Domain</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Domain</li>
                <li>Domain .ID</li>
                <li>Domain Gratis</li>
                <li>Domain .COM</li>
                <li>Harga Domain</li>
                <li>WHOIS</li>
                <li>Transfer Domain</li>
              </ul>
            </div>
            <div id="server">
              <h3 className="font-semibold mb-4 text-base">
                Virtual Private Server
              </h3>
              <ul className="font-light flex flex-col gap-2">
                <li>VPS Hosting</li>
                <li>cPanel VPS Hosting</li>
                <li>CyberPanel VPS Hosting</li>
                <li>VPS Gratis</li>
              </ul>
            </div>
            <div id="website">
              <h3 className="font-semibold mb-4 text-base">Website</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Jasa Pembuatan Website</li>
                <li>Website Instan</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap flex-1 w-full gap-5 px-3 h-fit">
            <div id="program">
              <h3 className="font-semibold mb-4 text-base">Program</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Program Afiliasi EasyTech</li>
                <li>Program Referal EasyTech</li>
                <li>Promo & Diskon Spesial</li>
                <li>Web Hosting Indonesia</li>
                <li>EasyTech Virtual Submit</li>
              </ul>
            </div>
            <div id="wawasan">
              <h3 className="font-semibold mb-4 text-base">Wawasan</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Blog</li>
                <li>Ebook</li>
                <li>EasyTech Course</li>
                <li>Knowledge Base</li>
                <li>EasyTech Forum</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap flex-1 allMobile:grid allMobile:grid-cols-3 allMobile:col-span-2 w-full gap-5 px-3 h-fit">
            <div id="perusahaan">
              <h3 className="font-semibold mb-4 text-base">Perusahaan</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Tentang Perusahaan</li>
                <li>Kontak</li>
                <li>Karir</li>
                <li>Event</li>
                <li>Status Layanan</li>
                <li>Review Pelanggan</li>
              </ul>
            </div>
            <div id="bantuan">
              <h3 className="font-semibold mb-4 text-base">Bantuan</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>Rekomendasi Produk</li>
                <li>Cara Pembayaran</li>
              </ul>
            </div>
            <div id="eazylink">
              <h3 className="font-semibold mb-4 text-base">EazyLink</h3>
              <ul className="font-light flex flex-col gap-2">
                <li>EazyLink</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid gap-5 allDekstop:mt-5 allDekstop:grid-cols-5 ">
          <div className="w-full p-2"></div>
          <div className="w-full p-2 col-span-2">
            <h3 className="font-semibold mb-7 allMobile:mb-3 allMobile:text-center">
              Newsletter
            </h3>
            <form className=" grid gap-3 allDekstop:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Masukkan Email"
                className="p-3 allMobile:py-2.5 rounded-full text-center text-gray-800 ring-0 outline-none"
              />
              <Button
                type="submit"
                color="secondary"
                className="rounded-full h-11"
              >
                Berlanggan
              </Button>
            </form>
          </div>
          <div className="w-full p-2 col-span-2">
            <h3 className="font-semibold">
              Transaksi Makin Mudah, dengan Metode Pembayaran Terlengkap!
            </h3>
            <div className="my-4 grid grid-cols-7 allMobile:grid-cols-4 gap-3 items-center">
              {dataStatic.payments.map((payment, idx) => (
                <div
                  key={idx}
                  className="flex justify-center bg-white rounded-md w-full px-2 py-1 h-fit"
                >
                  <img
                    src={payment}
                    className=" aspect-[4/2] object-contain allDekstop:w-full allMobile:w-3/4 "
                  />
                </div>
              ))}
              <div className="col-span-4 allMobile:col-span-3 text-center bg-primary-400 hover:bg-primary-500 cursor-pointer py-1.5 rounded-md text-xs allMobile:text-sm">
                Lihat metode lainya
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" p-10 bg-primary-900 text-center allMobile:text-sm text-white ">
        <label> Edited by Wahyu Tricahyo @cloning Juli 2023</label>
        <p>
          Powered by Vite React Typescript | Tailwind CSS | Windows | Android
        </p>
        <p>Thank You!</p>
      </div>
    </div>
  );
}

export default App;
