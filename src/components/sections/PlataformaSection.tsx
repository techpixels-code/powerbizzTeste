import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import bgHeader from "@/assets/bg-header.png";

const PlataformaSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511974467018", "_blank");
  };

  return (
    <section
      id="plataforma"
      className="section-padding relative bg-[#0a0a0f] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
              A{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                Powerbizz.ai
              </span>{" "}
              é a melhor plataforma de{" "}
              <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
                Agentic AI
              </span>{" "}
              do Brasil
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-2xl  leading-relaxed text-[#E4ECFF]">
              Nós criamos e gerenciamos Pessoas Digitais — colaboradores digitais
              que trazem governança, segurança e escala para todas as áreas da sua empresa.
            </p>
          </div>

          {/* Highlight Text */}
          <p className="text-2xl font-semibold bg-gradient-to-r from-[#EB5CFF] to-[#F02AB5] bg-clip-text text-transparent mb-10">
            Não é o futuro. É agora.
          </p>

          {/* CTA Button */}
          <div className="relative flex justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-[#EB5CFF] to-[#F02AB5] hover:from-[#d94de6] hover:to-[#d1249f] text-white font-semibold px-10 h-[67px] text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Começar agora <ArrowUpRight className="w-5 h-5" />
            </Button>
            <div className="absolute left-[34%] -bottom-[80px] rounded-full w-[250px] h-[120px] bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlataformaSection;
