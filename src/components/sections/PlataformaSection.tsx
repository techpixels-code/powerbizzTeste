import { Button } from "@/components/ui/button";

const PlataformaSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5514997665343", "_blank");
  };

  return (
    <section id="plataforma" className="section-padding relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(224, 64, 251, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading - Exact from PNG */}
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              A{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                Powerbizz.ai
              </span>{" "}
              é a melhor plataforma de{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                Agentic AI
              </span>{" "}
              do Brasil
            </h2>
          </div>

          {/* Description - Exact from PNG */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Desenvolvemos a plataforma de Agentic AI mais avançada do Brasil, 
              criando pessoas digitais que trabalham incansavelmente para transformar 
              seu negócio e gerar resultados consistentes.
            </p>
          </div>

          {/* CTA Button - Exact from PNG */}
          <div className="flex justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] hover:from-[#D633E0] hover:to-[#7B2CBF] text-white font-semibold px-12 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlataformaSection;