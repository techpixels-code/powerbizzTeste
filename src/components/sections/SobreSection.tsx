import { Card, CardContent } from "@/components/ui/card";
import womanImage from "@/assets/woman.png";
import elementoFlutuante1 from "@/assets/elemento-flutuante1.png";
import elementoFlutuante2 from "@/assets/elemento-flutuante2.png";
import elementoFlutuante3 from "@/assets/elemento-flutuante3.png";
import iconP from "@/assets/icon-p.png";
import iconEscabilidade from "@/assets/icon-escabilidade.png";
import iconEscudoRight from "@/assets/icon-escudoright.png";
import iconDepoimentos from "@/assets/icon-depoimentos.png";

const SobreSection = () => {
  const features = [
    {
      icon: iconEscabilidade,
      title: "Escabilidade total",
      description: "Atenda milhares de clientes simultaneamente sem precisar contratar mais pessoas"
    },
    {
      icon: iconEscudoRight,
      title: "Segurança e governança",
      description: "Proteção total dos seus dados com as melhores práticas de segurança e compliance"
    },
    {
      icon: iconDepoimentos,
      title: "Disponível 24/7",
      description: "Sua empresa nunca dorme. Atendimento e vendas funcionando sem parar"
    }
  ];

  return (
    <section id="sobre" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Por que a{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                Powerbizz.ai
              </span>{" "}
              existe?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Porque sabemos que cada minuto perdido sem atender um cliente é uma 
              oportunidade que se vai. Porque entendemos que escalar seu negócio 
              não pode depender apenas de contratar mais pessoas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é simples: criar a força de trabalho digital mais 
              avançada do Brasil, que trabalha incansavelmente para o seu negócio 
              crescer.
            </p>
          </div>

          {/* Right Content - Image from Figma */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main circular image with gradient border */}
              <div className="relative">
                <img 
                  src={womanImage} 
                  alt="Powerbizz.ai Digital Person" 
                  className="w-full h-auto relative z-10"
                />
              </div>
              
              {/* Floating chat elements - Exact from Figma */}
              <div className="absolute -top-8 -right-4 z-20 animate-float">
                <img src={elementoFlutuante1} alt="Chat element" className="w-32 h-auto" />
              </div>
              <div className="absolute top-1/3 -left-8 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                <img src={elementoFlutuante2} alt="Chat element" className="w-32 h-auto" />
              </div>
              <div className="absolute bottom-1/4 -right-6 z-20 animate-float" style={{ animationDelay: '1s' }}>
                <img src={elementoFlutuante3} alt="Chat element" className="w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6 text-center hover:scale-105 transition-smooth">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Central Logo - Using icon from Figma */}
          <div className="flex justify-center mt-8">
            <img src={iconP} alt="Powerbizz.ai" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;