"use client";
import DetailModule from "@/modules/DetailProgramModule";
import programs from "@/modules/ProgramModule/programs.const";
import { useParams } from "next/navigation";

const ProgramDetailPage = () => {
  const { id } = useParams();

  const programData = programs.find((item) => item.id === id);

  if (!programData) {
    return <div>Data program tidak ditemukan.</div>;
  }
  return <DetailModule data={programData} variant="program" />;
};

export default ProgramDetailPage;
