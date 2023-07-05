import {
  FaServer,
  FaCloud,
  FaWordpress,
  FaEnvelope,
  FaGlobe,
  FaSearchengin,
  FaCertificate,
} from "react-icons/fa";

import { BiTransferAlt, BiGroup } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";

import Iphp from "../assets/images/php.png";
import Ilaravel from "../assets/images/laravel.png";
import Icodeigniter from "../assets/images/codeigniter.png";
import Ijomla from "../assets/images/jomla.png";
import Inodejs from "../assets/images/nodejs.png";
import Iphyton from "../assets/images/phyton.png";
import Igolang from "../assets/images/golang.png";
import Iwordpress from "../assets/images/wordpress.jpg";

import people1 from "../assets/images/people.png";
import people2 from "../assets/images/people1.png";
import people3 from "../assets/images/people2.png";
import people4 from "../assets/images/people3.png";
import people5 from "../assets/images/people4.png";

import bni from "../assets/images/bni.webp";
import bca from "../assets/images/bca.webp";
import bri from "../assets/images/bri.png";
import bsi from "../assets/images/bsi.webp";
import mandiri from "../assets/images/mandiri.webp";
import linkaja from "../assets/images/linkaja.png";
import dana from "../assets/images/dana.png";
import gopay from "../assets/images/gopay.png";
import ovo from "../assets/images/ovo.png";
import spay from "../assets/images/spay.png";
import qris from "../assets/images/qris.png";
import paypal from "../assets/images/paypal.png";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master.webp";
import indomart from "../assets/images/indomart.png";
import alfamart from "../assets/images/alfa.png";
import alfamidi from "../assets/images/midi.png";

import { IcCallCenter, IcSecurity, IcSpeed } from "../assets/svg";

export const dataStatic = {
  dropdowns: [
    {
      id: 1,
      menu: "Hosting",
      subMenu: [
        {
          title: "Unlimited Hosting",
          subtile: "Paket hosting terbaik tanpa batas",
          icon: <FaServer size={35} color="#0076D6" />,
        },
        {
          title: "Cloud Hosting",
          subtile: "Server dedicated untuk traffic tinggi",
          icon: <FaCloud size={35} color="#0076D6" />,
        },
        {
          title: "Wordpress Hosting",
          subtile: "Hosting paling optimal untuk Wordpress",
          icon: <FaWordpress size={35} color="#0076D6" />,
        },
        {
          title: "Email Hosting",
          subtile: "Email profesional, kredibilitas meningkat",
          icon: <FaEnvelope size={35} color="#0076D6" />,
        },
      ],
    },
    {
      id: 2,
      menu: "Website",
      subMenu: [
        {
          title: "Jasa Pembuatan Website",
          subtile: "Layanan profesional pengembangan Website anda",
          icon: <FaGlobe size={35} color="#0076D6" />,
        },
      ],
    },
    {
      id: 3,
      menu: "Domain",
      subMenu: [
        {
          title: "Cari & Cek Domain",
          subtile: "Cek Domain untuk Website anda",
          icon: <FaSearchengin size={35} color="#0076D6" />,
        },
        {
          title: "Cek Domain Indonesia",
          subtile: "Registrasi domain indonesia lebih mudah",
          icon: <FaCertificate size={35} color="#0076D6" />,
        },
        {
          title: "Transfer Domain",
          subtile: "Migrasi Domain lebih Murah dan Mudah",
          icon: <BiTransferAlt size={35} color="#0076D6" />,
        },
      ],
    },
    {
      id: 4,
      menu: "Promo dan Program",
      subMenu: [
        {
          title: "Promo",
          subtile: "Temukan promo dan penawaran spesial",
          icon: <TbDiscount2 size={35} color="#0076D6" />,
        },
        {
          title: "Afiliasi",
          subtile: "Tambahkan komisi dari program afiliasi",
          icon: <BiGroup size={35} color="#0076D6" />,
        },
      ],
    },
  ],
  domains: [
    {
      id: 1,
      nama: ".com",
      harga: "15.000",
    },
    {
      id: 2,
      nama: ".co.id",
      harga: "275.000",
    },
    {
      id: 3,
      nama: ".online",
      harga: "125.000",
    },
    {
      id: 4,
      nama: ".biz",
      harga: "75.000",
    },
  ],
  frameworks: [
    {
      id: 1,
      image: Ilaravel,
    },
    {
      id: 2,
      image: Iwordpress,
    },
    {
      id: 3,
      image: Ijomla,
    },
    {
      id: 4,
      image: Iphp,
    },
    {
      id: 5,
      image: Igolang,
    },
    {
      id: 6,
      image: Icodeigniter,
    },
    {
      id: 7,
      image: Inodejs,
    },
    {
      id: 8,
      image: Iphyton,
    },
  ],
  pakets: [
    {
      id: 1,
      name: "Bayi",
      description: "Mudah digunakan, bahkan untuk pemula sekalipun.",
      harga: "Rp 9.900",
      label: "Termurah",
      discount: "",
      highlight: false,
      fitur: [
        {
          id: 1,
          status: "warning",
          subtitle: (
            <span>
              Hingga <b>15.000</b> Pengunjung/Bulan
            </span>
          ),
          tooltip:
            "Perkiraan jumlah pengunjung website tiap bulan yang dapat ditampung akun hosting Anda.",
        },
        {
          id: 2,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Akun Email
            </span>
          ),
          tooltip:
            "Bebas kirim email tanpa batas. Baca syarat & ketentuan yang berlaku disini.",
        },
        {
          id: 3,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Bandwidth
            </span>
          ),
          tooltip:
            "Kapasitas bandwidth tersedia tanpa batas, tidak perlu khawatir jumlah trafik tinggi.",
        },
        {
          id: 4,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Database
            </span>
          ),
          tooltip:
            "Kapasitas data maksimal dalam database MySQL. Syarat & Ketentuan berlaku.",
        },
        {
          id: 5,
          status: "warning",
          subtitle: (
            <span>
              <b>500 MB</b> SSD Disk Space
            </span>
          ),
          tooltip:
            "Kapasitas penyimpanan file lebih besar didukung oleh SSD Storage.",
        },
        {
          id: 6,
          status: "danger",
          subtitle: (
            <span>
              <b>Gratis</b> Domain hingga <b>Rp175k</b>
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 7,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Domain
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 8,
          status: "success",
          subtitle: (
            <span>
              <b>Gratis </b>Sertifikat SSL
            </span>
          ),
          tooltip:
            "Reputasi website terjamin dengan jaringan yang terlindungi dan terenkripsi.",
        },
      ],
    },
    {
      id: 2,
      name: "Pelajar",
      description: "Beragam fitur untuk personal branding atau blog Anda.",
      harga: "Rp 24.900",
      label: "Diskon 58%",
      discount: "Rp 59900",
      highlight: false,
      fitur: [
        {
          id: 1,
          status: "warning",
          subtitle: (
            <span>
              Hingga <b>15.000</b> Pengunjung/Bulan
            </span>
          ),
          tooltip:
            "Perkiraan jumlah pengunjung website tiap bulan yang dapat ditampung akun hosting Anda.",
        },
        {
          id: 2,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Akun Email
            </span>
          ),
          tooltip:
            "Bebas kirim email tanpa batas. Baca syarat & ketentuan yang berlaku disini.",
        },
        {
          id: 3,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Bandwidth
            </span>
          ),
          tooltip:
            "Kapasitas bandwidth tersedia tanpa batas, tidak perlu khawatir jumlah trafik tinggi.",
        },
        {
          id: 4,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Database
            </span>
          ),
          tooltip:
            "Kapasitas data maksimal dalam database MySQL. Syarat & Ketentuan berlaku.",
        },
        {
          id: 5,
          status: "warning",
          subtitle: (
            <span>
              <b>500 MB</b> SSD Disk Space
            </span>
          ),
          tooltip:
            "Kapasitas penyimpanan file lebih besar didukung oleh SSD Storage.",
        },
        {
          id: 6,
          status: "danger",
          subtitle: (
            <span>
              <b>Gratis</b> Domain hingga <b>Rp175k</b>
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 7,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Domain
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 8,
          status: "success",
          subtitle: (
            <span>
              <b>Gratis </b>Sertifikat SSL
            </span>
          ),
          tooltip:
            "Reputasi website terjamin dengan jaringan yang terlindungi dan terenkripsi.",
        },
      ],
    },
    {
      id: 3,
      name: "Personal",
      description: "Untuk profil perusahaan, organisasi & komunitas Anda!",
      harga: "Rp 24.900",
      label: "Diskon 75%",
      discount: "Rp 99900",
      highlight: true,
      fitur: [
        {
          id: 1,
          status: "warning",
          subtitle: (
            <span>
              Hingga <b>15.000</b> Pengunjung/Bulan
            </span>
          ),
          tooltip:
            "Perkiraan jumlah pengunjung website tiap bulan yang dapat ditampung akun hosting Anda.",
        },
        {
          id: 2,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Akun Email
            </span>
          ),
          tooltip:
            "Bebas kirim email tanpa batas. Baca syarat & ketentuan yang berlaku disini.",
        },
        {
          id: 3,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Bandwidth
            </span>
          ),
          tooltip:
            "Kapasitas bandwidth tersedia tanpa batas, tidak perlu khawatir jumlah trafik tinggi.",
        },
        {
          id: 4,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Database
            </span>
          ),
          tooltip:
            "Kapasitas data maksimal dalam database MySQL. Syarat & Ketentuan berlaku.",
        },
        {
          id: 5,
          status: "warning",
          subtitle: (
            <span>
              <b>500 MB</b> SSD Disk Space
            </span>
          ),
          tooltip:
            "Kapasitas penyimpanan file lebih besar didukung oleh SSD Storage.",
        },
        {
          id: 6,
          status: "danger",
          subtitle: (
            <span>
              <b>Gratis</b> Domain hingga <b>Rp175k</b>
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 7,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Domain
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 8,
          status: "success",
          subtitle: (
            <span>
              <b>Gratis </b>Sertifikat SSL
            </span>
          ),
          tooltip:
            "Reputasi website terjamin dengan jaringan yang terlindungi dan terenkripsi.",
        },
      ],
    },
    {
      id: 4,
      name: "Bisnis",
      description:
        "Paket lengkap untuk bisnis, portal berita, atau toko online.",
      harga: "Rp 49.900",
      label: "Diskon 67%",
      discount: "Rp 149900",
      highlight: false,
      fitur: [
        {
          id: 1,
          status: "warning",
          subtitle: (
            <span>
              Hingga <b>15.000</b> Pengunjung/Bulan
            </span>
          ),
          tooltip:
            "Perkiraan jumlah pengunjung website tiap bulan yang dapat ditampung akun hosting Anda.",
        },
        {
          id: 2,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Akun Email
            </span>
          ),
          tooltip:
            "Bebas kirim email tanpa batas. Baca syarat & ketentuan yang berlaku disini.",
        },
        {
          id: 3,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Bandwidth
            </span>
          ),
          tooltip:
            "Kapasitas bandwidth tersedia tanpa batas, tidak perlu khawatir jumlah trafik tinggi.",
        },
        {
          id: 4,
          status: "success",
          subtitle: (
            <span>
              <b>Unlimited </b>Database
            </span>
          ),
          tooltip:
            "Kapasitas data maksimal dalam database MySQL. Syarat & Ketentuan berlaku.",
        },
        {
          id: 5,
          status: "warning",
          subtitle: (
            <span>
              <b>500 MB</b> SSD Disk Space
            </span>
          ),
          tooltip:
            "Kapasitas penyimpanan file lebih besar didukung oleh SSD Storage.",
        },
        {
          id: 6,
          status: "danger",
          subtitle: (
            <span>
              <b>Gratis</b> Domain hingga <b>Rp175k</b>
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 7,
          status: "warning",
          subtitle: (
            <span>
              <b>1</b> Domain
            </span>
          ),
          tooltip:
            "Anda hanya bisa menggunakan 1 domain pada akun hosting ini.",
        },
        {
          id: 8,
          status: "success",
          subtitle: (
            <span>
              <b>Gratis </b>Sertifikat SSL
            </span>
          ),
          tooltip:
            "Reputasi website terjamin dengan jaringan yang terlindungi dan terenkripsi.",
        },
      ],
    },
  ],
  features: [
    {
      id: 1,
      image: <IcSecurity />,
      title: "Keamanan Menyeluruh",
      subtitle:
        "Niagahoster mempunyai keamanan yg mapan dan solid dengan menggunakan Immunify 360 untuk perlindungan dari malwares, virus dan serangan-serangan tak terlihat lainnya. Niagahoster juga memberikan gratis SSL seumur hidup.",
    },
    {
      id: 2,
      image: <IcSpeed />,
      title: "Kecepatan Sangar",
      subtitle:
        "Semakin cepat kecepatan website anda, semakin banyak konversi pengunjung anda untuk melakukan pembelian. Interaksi pengunjung anda akan meningkat tajam karena mereka dengan cepat dan leluasa bisa mengakses semua menu di website anda.",
    },
    {
      id: 3,
      image: <IcCallCenter />,
      title: "Dukungan Teknis Nomor 1 di Indonesia",
      subtitle:
        "Hubungi Customer Success Agent Niagahoster kapan saja ketika terjadi permasalahan pada website Anda. Tidak perlu menunggu lama, permasalahan Anda akan diselesaikan secara cepat dan real-time melalui live-chat Intercom.",
    },
  ],
  testimoni: [
    {
      id: 1,
      name: "Mateo Mills",
      company: "CEO Krafthaus",
      message:
        "“Krafthaus menggunakan website untuk memberikan informasi kepada talent-talent muda khususnya di Yogyakarta untuk dapat bergabung bersama krafthaus”",
      figure: people1,
    },
    {
      id: 2,
      name: "Rosa Hewitt",
      company: "Business Owner",
      message:
        "“Selain bisa menampung traffic yang besar, Niagahoster juga punya layanan CS yang sangat sigap. Peluang mendapatkan cuan melalui website jadi makin terbuka lebar!”",
      figure: people2,
    },
    {
      id: 3,
      name: "Teddy Johnston",
      company: "Youtuber",
      message:
        "“Selain unggul di kecepatan loading dan keamanan server, Niagahoster juga punya layanan CS 24/7 yang full support banget. Jadi, selalu nyaman pakainya.”",
      figure: people3,
    },
    {
      id: 4,
      name: "Reuben Hardin",
      company: "Mastah FB Ads",
      message:
        "“Dengan website kita bisa lebih banyak menjangkau customer, selain itu juga trust atau kepercayaan dari customer juga akan meningkat”",
      figure: people4,
    },
    {
      id: 5,
      name: "Lydia Bates",
      company: "Founder Top Coach",
      message:
        "“Web hosting terbaik yang pernah saya pakai selama bertahun-tahun. Karena selain cepat dan aman, customer supportnya pun luar bisa membantu ketika ada kesulitan.",
      figure: people5,
    },
  ],
  questions: [
    {
      id: 1,
      question: "Apa itu hosting?",
      answer:
        "Hosting adalah layanan penyimpanan data website sehingga dapat diakses secara online oleh semua orang. Data website ini ditampung dalam ruang penyimpanan bernama server yang selalu aktif 24 jam setiap hari. File dari data web tersebut dapat berupa gambar, video, script program, aplikasi, database, email, dan sebagainya. Tanpa hosting, Anda tidak akan bisa membuat website. Kualitas layanan hosting menentukan cepat atau lambatnya suatu website diakses. Penyedia layanan hosting harus bertanggung jawab atas kecepatan dan uptime dari server yang dikelola. Oleh karena itu, saran kami selalu pilih penyedia layanan hosting terbaik untuk menemani perjalanan Anda di dunia digital!",
    },
    {
      id: 2,
      question: "Mengapa saya harus menggunakan hosting berserver Indonesia?",
      answer:
        "Ada banyak keuntungan bila Anda menggunakan layanan hosting dengan server yang berlokasi di Indonesia. Lokasi server hosting sangat berpengaruh terhadap performa suatu website, terutama jika target pengunjung website Anda juga berada di dalam wilayah Indonesia. Saat ini Niagahoster menggunakan Green Data Center Tier-4 DCI Indonesia berstandar internasional. Data center yang kami gunakan merupakan bagian dari Equinix, penyedia data center berkualitas tinggi terbaik di dunia dengan jaminan uptime hingga 99,99%",
    },
    {
      id: 3,
      question: "Apa yang dimaksud dengan Unlimited Hosting di EasyNet?",
      answer:
        "Unlimited Hosting Niagahoster tidak menetapkan batasan khusus dalam hal resource atau sumber daya website yang Anda butuhkan. Meskipun demikian, kami menetapkan Fair Usage Policy (FUP) atau kebijakan penggunaan secara adil yang berlaku untuk semua akun yang menggunakan paket Bayi, Pelajar, Personal, serta Bisnis. Penggunaan secara wajar sangat kami rekomendasikan, mengingat penggunaan resource CPU, RAM, serta disk space secara berlebihan dalam sebuah server dapat berdampak pada performa website milik pengguna lain yang tersimpan dalam server yang sama. Cek fitur Hosting Unlimited",
    },
    {
      id: 4,
      question: "Jenis hosting apa yang tepat untuk saya?",
      answer:
        "Niagahoster menawarkan beragam jenis hosting yang bisa Anda pilih sesuai kebutuhan. Oleh karena itu, kami sangat menyarankan Anda untuk mengetahui kebutuhan Anda terlebih dahulu. Apakah itu website company profile, blog pribadi, toko online, atau yang lainnya. Tiap jenis website ini memerlukan keperluan resource yang beragam. Sebagai contoh, jika Anda akan membuat jenis website sederhana dan langsung online, Anda bisa membeli paket Web Hosting.",
    },
    {
      id: 5,
      question:
        "Jika sudah memiliki website, apakah saya bisa transfer hosting ke Niagahoster?",
      answer:
        "Transfer hosting tidaklah rumit. Tim customer support Niagahoster siap membantu memindahkan hosting Anda ke kami kapan pun Anda inginkan. Caranya, Anda hanya perlu mengisi formulir dan permintaan transfer akan kami proses secepatnya. Pilih paket hosting lalu transfer ke layanan hosting Niagahoster sekarang dan dapatkan diskon hingga 50%! Silakan hubungi customer support kami untuk mendapatkan informasi lebih lengkap.",
    },
  ],
  payments: [
    bri,
    bca,
    mandiri,
    bsi,
    bni,
    qris,
    gopay,
    dana,
    ovo,
    spay,
    linkaja,
    paypal,
    alfamart,
    indomart,
    alfamidi,
    mastercard,
    visa,
  ],
};
