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
      className="section-padding relative bg-[#0a0a0f] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="container-custom text-center relative z-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-[32px] sm:text-[42px] md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent break-words">
              A{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                Powerbizz.ai
              </span>{" "}
              é a melhor plataforma de{" "}
              <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text">
                Agentic AI
              </span>{" "}
              do Brasil
            </h2>
          </div>

          {/* Descrição */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-[#E4ECFF]">
              Nós criamos e gerenciamos Pessoas Digitais, colaboradores digitais
              que trazem governança, segurança e escala para todas as áreas da sua empresa.
            </p>
          </div>

          {/* Destaque */}
          <p className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-[#EB5CFF] to-[#F02AB5] bg-clip-text text-transparent mb-8 sm:mb-10">
            Não é o futuro. É agora.
          </p>

          {/* Botão */}
          <div className="relative flex justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-[#EB5CFF] to-[#F02AB5] hover:from-[#d94de6] hover:to-[#d1249f] text-white font-semibold px-8 sm:px-10 h-[58px] sm:h-[67px] text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Começar agora <ArrowUpRight className="w-5 h-5" />
            </Button>

            {/* Glow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[60px] sm:-bottom-[80px] rounded-full w-[180px] sm:w-[250px] h-[90px] sm:h-[120px] bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlataformaSection;
