import { Check } from "lucide-react";
import phone1 from "@/assets/phone1.mp4";
import phone2 from "@/assets/phone2.mp4";
import phone3 from "@/assets/phone3.mp4";
import phone4 from "@/assets/phone4.mp4";
import phone5 from "@/assets/phone5.mp4";

const AreasAtuacaoSection = () => {
  const areas = [
    "Operações",
    "Financeiro",
    "Jurídico",
    "RH",
    "Atendimento",
    "Marketing",
    "T.I.",
    "Vendas",
  ];

  const phoneVideos = [phone1, phone2, phone3, phone4, phone5];

  return (
    <section className=" relative bg-[#000319]">
      <div className="container-custom relative rounded-[20px] border border-[#272A3C] p-10">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10 ">
          {/* Título */}
          <h2 className="text-[38px] md:text-5xl font-bold leading-tight whitespace-nowrap">
            <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-white to-[#75798D] bg-clip-text">
              Atuando em <br /> áreas como:
            </span>
          </h2>

          {/* Lista de Áreas - 2 linhas de 4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-2xl mt-4 lg:mt-2 flex-1">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#FF6FD4]" />
                <span className="text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phones Videos */}
        <div className="flex justify-center gap-6 flex-wrap">
          {phoneVideos.map((videoSrc, i) => (
            <video
              key={i}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-[180px] md:w-[220px] rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacaoSection;
