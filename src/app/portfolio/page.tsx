import PortfolioModule from "@/modules/PortfolioModule";

const dummyPortfolioData: PortfolioData[] = [
  {
    id:"rpmj",
    name: "Revitalisasi Branding PT. Maju Jaya",
    desc: "Proyek rebranding total, mulai dari logo, tone of voice, hingga pedoman visual untuk adaptasi digital.",
    link: "https://www.majujaya.com/case-study",
    moments: [
      "Sesi wawancara mendalam dengan CEO",
      "Pengembangan 3 konsep logo alternatif",
      "Peluncuran pedoman merek digital."
    ],
    impacts: [
      { src: "/icon/impact-brand.svg", title: "Peningkatan 50% Pengenalan Merek" },
      { src: "/icon/impact-modern.svg", title: "Citra Merek Lebih Modern" }
    ],
    clients: [
      { picture: "/pic/client-6.jpg", name: "Ahmad Rizki", position: "Chief Marketing Officer", desc: "Hasilnya melampaui ekspektasi. Merek kami kini terasa segar dan relevan." }
    ]
  },
  {
    id:"pams",
    name: "Pengembangan Aplikasi Mobile 'SehatKu'",
    desc: "Pembangunan aplikasi pelacak kesehatan end-to-end, mencakup fitness tracker, jadwal obat, dan konsultasi online.",
    link: "https://appstore.com/sehatku",
    moments: [
      "Wireframing dan desain UI/UX",
      "Integrasi API untuk data perangkat wearable",
      "Beta testing dengan 500 pengguna awal."
    ],
    impacts: [
      { src: "/icon/impact-download.svg", title: "100.000+ Unduhan dalam Bulan Pertama" },
      { src: "/icon/impact-rating.svg", title: "Rating Aplikasi Rata-rata 4.8/5.0" }
    ],
    clients: [
      { picture: "/pic/client-7.jpg", name: "Dr. Lina Wijaya", position: "Pendiri Klinik Sehat Sentosa", desc: "Aplikasi ini menjadi jembatan utama kami untuk melayani pasien secara virtual." }
    ]
  },
  {
    id:"smiog",
    name: "Sistem Manajemen Inventaris Otomatisasi Gudang",
    desc: "Penerapan sistem barcode dan RFID untuk otomatisasi pencatatan dan pelacakan stok barang di gudang logistik.",
    link: "https://internal.logistik-prima.com/system",
    moments: [
      "Audit sistem inventaris manual",
      "Instalasi perangkat keras RFID",
      "Pelatihan intensif untuk staf gudang."
    ],
    impacts: [
      { src: "/icon/impact-efficiency.svg", title: "Pengurangan Kesalahan Inventaris 95%" },
      { src: "/icon/impact-time.svg", title: "Waktu Pencatatan Stok Berkurang 70%" }
    ],
    clients: [
      { picture: "/pic/client-8.jpg", name: "Herman Leo", position: "Kepala Logistik, Prima Logistik", desc: "Efisiensi operasional kami melonjak signifikan setelah sistem ini diimplementasikan." }
    ]
  },
  {
    id:"wefg",
    name: "Website E-Commerce Fesyen 'GayaKita'",
    desc: "Desain dan pengembangan website e-commerce yang responsif dan memiliki fitur custom order untuk produk fesyen.",
    link: "https://www.gayakita.co.id",
    moments: [
      "Penentuan arsitektur informasi",
      "Desain antarmuka produk yang berfokus pada gambar berkualitas tinggi",
      "Integrasi payment gateway lokal."
    ],
    impacts: [
      { src: "/icon/impact-conversion.svg", title: "Kenaikan Conversion Rate 3.5%" },
      { src: "/icon/impact-traffic.svg", title: "Mampu Menangani 10.000 Pengunjung/Hari" }
    ],
    clients: [
      { picture: "/pic/client-9.jpg", name: "Siska Dewi", position: "Pemilik Merek 'GayaKita'", desc: "Website baru ini memberikan pengalaman belanja yang mulus bagi pelanggan kami." }
    ]
  },
  {
    id:"kpdbs",
    name: "Kampanye Pemasaran Digital 'Bebas Sampah'",
    desc: "Kampanye kesadaran sosial menggunakan platform media sosial, video pendek, dan influencer untuk mengurangi sampah plastik.",
    link: "https://ig.com/bebassampah-campaign",
    moments: [
      "Analisis audiens dan penentuan strategi konten",
      "Peluncuran video viral di TikTok dan Instagram",
      "Laporan metrik engagement."
    ],
    impacts: [
      { src: "/icon/impact-reach.svg", title: "Mencapai 5 Juta Akun Unik" },
      { src: "/icon/impact-engagement.svg", title: "Tingkat Engagement Rata-rata 12%" }
    ],
    clients: [
      { picture: "/pic/client-10.jpg", name: "Joko Pranowo", position: "Koordinator LSM Lingkungan", desc: "Kami berhasil meningkatkan kesadaran publik terhadap isu sampah secara masif dan positif." }
    ]
  }
];

const PortfolioPage = () => {
  return <PortfolioModule />;
};

export default PortfolioPage;
