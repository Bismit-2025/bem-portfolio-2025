"use client";
import DetailModule from "@/modules/DetailProgramModule";
import  portfolios  from "@/modules/PortfolioModule/portfolio.const";
import { useParams } from "next/navigation";

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const portfolioData = portfolios.find((item) => item.id === id);

  if (!portfolioData) {
    return <div>Data portofolio tidak ditemukan.</div>;
  }

  return <DetailModule data={portfolioData} variant="portfolio" />;
};

export default PortfolioDetailPage;
