import { Button } from "@/components/ui/button";


const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511974467018", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-header.png')`,
        }}
      ></div>

      {/* Background Overlay mais escuro */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(224, 64, 251, 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container-custom text-center relative z-10 px-4">
        <div className="max-w-6xl mx-auto mt-[73px] md:mt-0 ">
          {/* Main Hero Text */}
          <div className="mb-8 md:mb-12">
            <h1 className="h1Hero text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-8 leading-tight text-white">
              A força de trabalho{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                digital
              </span>{" "}
              do futuro
            </h1>
          </div>

          {/* Hero Description */}
          <div className="max-w-3xl mx-auto mb-10 md:mb-16 px-2">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#E4ECFF]">
              A Powerbizz.ai é a melhor plataforma de{" "}
              <strong>Agentic AI</strong> do Brasil. Criamos e gerenciamos
              Pessoas Digitais — colaboradores digitais que trazem governança,
              segurança e escala para todas as áreas da sua empresa.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-[#EB5CFF] to-[#F02AB5] hover:from-[#D633E0] hover:to-[#7B2CBF] h-[60px] sm:h-[67px] text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar agora
            </Button>
          </div>

          {/* Features abaixo do botão */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 items-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EB5CFF]"></span>
              <span className="text-white text-sm md:text-base">
                24/7 DISPONÍVEL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EB5CFF]"></span>
              <span className="text-white text-sm md:text-base">
                LGPD COMPLIANCE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EB5CFF]"></span>
              <span className="text-white text-sm md:text-base">
                SEGURANÇA CORPORATIVA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
