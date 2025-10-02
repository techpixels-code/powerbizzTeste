import { Card, CardContent } from "@/components/ui/card";
import iconFlecha from "@/assets/icon-flecha.png";
import logoOpenAI from "@/assets/logo-openai.png";
import logoMeta from "@/assets/logo-meta.png";
import logoGoogle from "@/assets/logo-google.png";
import logoAnthropic from "@/assets/logo-anthropc.png";
import logoAWS from "@/assets/logo-aws.png";
import logoA from "@/assets/logo-a.png";

const BeneficiosSection = () => {
  const benefits = [
    {
      title: "Conversão 5x maior",
      description: "Aumente drasticamente suas vendas com atendimento personalizado e qualificação inteligente de leads."
    },
    {
      title: "Atendimento 24/7",
      description: "Nunca perca uma oportunidade. Seus clientes são atendidos a qualquer hora, qualquer dia."
    },
    {
      title: "90% menos custos",
      description: "Reduza drasticamente os custos de atendimento mantendo ou melhorando a qualidade."
    },
    {
      title: "Infinitos clientes",
      description: "Atenda quantos clientes quiser simultaneamente, sem limite de capacidade."
    },
    {
      title: "Zero inconsistência",
      description: "Cada atendimento seguirá perfeitamente seu script e metodologia de vendas."
    },
    {
      title: "100% personalizado",
      description: "Cada conversa é única e adaptada ao perfil específico de cada cliente."
    }
  ];

  const technologies = [
    { name: "OpenAI", logo: logoOpenAI },
    { name: "Meta", logo: logoMeta },
    { name: "Google", logo: logoGoogle },
    { name: "Anthropic", logo: logoAnthropic },
    { name: "AWS", logo: logoAWS },
    { name: "Azure", logo: logoA }
  ];

  return (
    <section id="beneficios" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              Benefícios
            </span>{" "}
            para sua empresa
          </h2>
        </div>

        {/* Benefits Grid with Arrow */}
        <div className="relative mb-20">
          {/* Arrow Image - Positioned above cards */}
          <div className="mb-8">
            <img 
              src={iconFlecha} 
              alt="Flow" 
              className="w-full h-auto max-w-6xl mx-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6 text-center hover:scale-105 transition-smooth">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-lg text-muted-foreground mb-8">
            Tecnologias que utilizamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {technologies.map((tech, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;