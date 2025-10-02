import { Button } from "@/components/ui/button";

const ResolverSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5514997665343", "_blank");
  };

  return (
    <section className="section-padding text-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Central Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] rounded-full flex items-center justify-center text-white text-3xl font-bold glow-primary">
              P
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              Powerbizz.ai
            </span>{" "}
            nasceu para resolver exatamente isso.
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Desenvolvemos a plataforma de Agentic AI mais avançada do Brasil, 
            criando pessoas digitais que trabalham incansavelmente para transformar 
            seu negócio e gerar resultados consistentes.
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-background font-semibold px-8 py-4 text-lg transition-all duration-300"
          >
            Começar agora?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResolverSection;
