import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Clock, 
  Shield, 
  Users, 
  BarChart3, 
  Sparkles
} from "lucide-react";

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
    "OpenAI",
    "Azure (Microsoft)",
    "Google",
    "Anthropic",
    "AWS",
    "Meta"
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
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6 text-center">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Animated Arrow */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 pointer-events-none">
            <div className="flex justify-center">
              <div className="w-96 h-1 bg-gradient-to-r from-transparent via-[#E040FB] to-transparent opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-lg text-muted-foreground mb-8">
            Tecnologias que utilizamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-white/60 text-lg font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;