import DetailModule from "@/modules/DetailProgramModule";

const program: ProgramData = {
  id: "wdux",
  name: "Workshop Desain UX Dasar",
  desc: "Program pelatihan intensif untuk mempelajari prinsip dasar Desain Pengalaman Pengguna (UX) selama 3 hari.",
  date: "2025-07-15",
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
};

const ProgramDetailPage = () => {
  return <DetailModule data={program} variant="program" />;
};

export default ProgramDetailPage;
