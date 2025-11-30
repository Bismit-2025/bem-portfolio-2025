import { ProgramData } from "../DetailProgramModule/interface";

const programs: ProgramData[] = [
  {
    id: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
    src: "",
    name: "Workshop Desain UX Dasar",
    desc: "Program pelatihan intensif untuk mempelajari prinsip dasar Desain Pengalaman Pengguna (UX) selama 3 hari.",
    date: "2024-04",
    moments: [
      "Sesi pengenalan empathy mapping",
      "Praktek prototyping cepat dengan Figma",
      "Sertifikasi kelulusan.",
    ],
    impacts: [
      { src: "/icon/impact-ux.svg", title: "Peningkatan 40% Kualitas Desain" },
      { src: "/icon/impact-skill.svg", title: "100 Peserta Tersertifikasi" },
    ],
    clients: [
      {
        picture: "/pic/client-1.jpg",
        name: "Risa Amelia",
        position: "Manajer Produk, TechCorp",
        desc: "Workshop ini membuka wawasan tim kami tentang pendekatan UX yang lebih terstruktur.",
      },
    ],
  },
  {
    id: "9b0d8f64-5a2c-4c3e-b6e1-123456789abc",
    src: "",
    name: "Pelatihan Keuangan Digital UMKM",
    desc: "Serangkaian webinar dan mentoring untuk membantu UMKM bertransisi ke sistem pembayaran dan pencatatan keuangan digital.",
    date: "2024-05",
    moments: [
      "Webinar cara penggunaan e-wallet bisnis",
      "Sesi konsultasi 1-on-1 dengan konsultan keuangan",
      "Akses ke template laporan keuangan digital.",
    ],
    impacts: [
      {
        src: "/icon/impact-finance.svg",
        title: "90% UMKM Menerapkan Pembayaran Digital",
      },
      {
        src: "/icon/impact-growth.svg",
        title: "Rata-rata Kenaikan Penjualan 15%",
      },
    ],
    clients: [
      {
        picture: "/pic/client-2.jpg",
        name: "Budi Santoso",
        position: "Pemilik Kedai Kopi 'Senja'",
        desc: "Sangat membantu dalam mengelola arus kas harian tanpa ribet.",
      },
    ],
  },
  {
    id: "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d",
    src: "",
    name: "Hackathon Solusi Kota Pintar",
    desc: "Acara kompetisi coding 48 jam yang berfokus pada pengembangan solusi teknologi untuk masalah perkotaan.",
    date: "2024-06",
    moments: [
      "Sesi brainstorming bersama pakar urban",
      "Demo produk final di hadapan juri investor",
      "Pemberian hadiah utama.",
    ],
    impacts: [
      {
        src: "/icon/impact-innovation.svg",
        title: "3 Solusi Prototype Baru Dihasilkan",
      },
      {
        src: "/icon/impact-collaboration.svg",
        title: "Kemitraan dengan Pemerintah Daerah",
      },
    ],
    clients: [
      {
        picture: "/pic/client-3.jpg",
        name: "Dewi Lestari",
        position: "Kepala Dinas Inovasi",
        desc: "Kami menemukan ide-ide segar dan potensial dari para peserta muda.",
      },
    ],
  },
  {
    id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    src: "",
    name: "Bootcamp Analisis Data Python",
    desc: "Program intensif selama 6 minggu untuk menguasai Python dan library data science (Pandas, NumPy, Matplotlib).",
    date: "2024-12",
    moments: [
      "Modul pembersihan data menggunakan Pandas",
      "Proyek akhir analisis sentimen media sosial",
      "Sesi persiapan wawancara kerja.",
    ],
    impacts: [
      {
        src: "/icon/impact-hired.svg",
        title: "85% Peserta Mendapat Pekerjaan dalam 3 Bulan",
      },
      {
        src: "/icon/impact-expertise.svg",
        title: "Mencetak 50 Data Analyst Baru",
      },
    ],
    clients: [
      {
        picture: "/pic/client-4.jpg",
        name: "Kevin Chandra",
        position: "Peserta Bootcamp Angkatan 3",
        desc: "Materi sangat relevan, kini saya bekerja sebagai Junior Data Scientist.",
      },
    ],
  },
  {
    id: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
    src: "",
    name: "Seminar Kewirausahaan Hijau",
    desc: "Seminar yang membahas peluang bisnis ramah lingkungan dan cara mengintegrasikannya dalam model bisnis saat ini.",
    date: "2025-03",
    moments: [
      "Diskusi panel dengan pengusaha eco-friendly",
      "Panduan sertifikasi produk berkelanjutan",
      "Networking session.",
    ],
    impacts: [
      {
        src: "/icon/impact-sustain.svg",
        title: "Mendorong 20 Bisnis Baru Berorientasi Lingkungan",
      },
      {
        src: "/icon/impact-awareness.svg",
        title: "Meningkatkan Kesadaran Bisnis Berkelanjutan",
      },
    ],
    clients: [
      {
        picture: "/pic/client-5.jpg",
        name: "Farah Adila",
        position: "Pendiri 'EcoGoods'",
        desc: "Seminar ini memberikan peta jalan yang jelas untuk scaling bisnis hijau kami.",
      },
    ],
  },
];

export default programs;
