import { Card, CardContent } from "@/components/ui/card";
import imgMid from "@/assets/img-mid.png";
import iconRight from "@/assets/icon-right.png";

const EntregamosSection = () => {
  const leftFeatures = [
    {
      number: "01",
      title: "Pessoas Digitais Customizadas",
      description: "Criamos agentes de IA sob medida para as necessidades específicas do seu negócio, com personalidade alinhada à sua marca."
    },
    {
      number: "02",
      title: "Implementação Rápida",
      description: "Do planejamento à execução em até 48h. Sua pessoa digital trabalhando para você em tempo recorde."
    }
  ];

  const rightFeatures = [
    {
      number: "03",
      title: "Integração Total",
      description: "Conectamos com suas ferramentas existentes: CRM, WhatsApp, e-mail, chat do site e muito mais."
    },
    {
      number: "04",
      title: "Treinamento Contínuo",
      description: "Sua pessoa digital aprende continuamente com cada interação, melhorando seus resultados todos os dias."
    }
  ];

  return (
    <section id="entregamos" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">entregamos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entregamos uma solução completa de Agentic AI que transforma 
            completamente a forma como seu negócio atende e vende.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start space-x-4">
                  <img src={iconRight} alt="check" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                        {feature.number}
                      </span>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image - Team image from Figma */}
          <div className="relative flex justify-center">
            <img 
              src={imgMid} 
              alt="Equipe Powerbizz.ai" 
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start space-x-4">
                  <img src={iconRight} alt="check" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
                        {feature.number}
                      </span>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntregamosSection;
