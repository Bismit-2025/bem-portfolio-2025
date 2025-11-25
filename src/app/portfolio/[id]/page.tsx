import DetailModule from "@/modules/DetailProgramModule";

const portfolio: PortfolioData = {
  name: "Revitalisasi Branding PT. Maju Jaya",
  desc: "Proyek rebranding total, mulai dari logo, tone of voice, hingga pedoman visual untuk adaptasi digital.",
  link: "https://www.majujaya.com/case-study",
  moments: [
    "Sesi wawancara mendalam dengan CEO",
    "Pengembangan 3 konsep logo alternatif",
    "Peluncuran pedoman merek digital.",
  ],
  impacts: [
    {
      src: "/icon/impact-brand.svg",
      title: "Peningkatan 50% Pengenalan Merek",
    },
    { src: "/icon/impact-modern.svg", title: "Citra Merek Lebih Modern" },
  ],
  clients: [
    {
      picture: "/pic/client-6.jpg",
      name: "Ahmad Rizki",
      position: "Chief Marketing Officer",
      desc: "Hasilnya melampaui ekspektasi. Merek kami kini terasa segar dan relevan.",
    },
  ],
};
const PortfolioDetailPage = () => {
  return <DetailModule data={portfolio} variant="portfolio" />;
};

export default PortfolioDetailPage;
