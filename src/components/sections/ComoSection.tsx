import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, BarChart3, Users, Shield, FileText } from "lucide-react";

const ComoSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Análise Inteligente",
      description: "Utilizamos IA avançada para analisar e otimizar todos os processos do seu negócio."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Integração Global",
      description: "Conectamos com todas as plataformas e ferramentas que você já utiliza."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Métricas em Tempo Real",
      description: "Acompanhe o desempenho e resultados através de dashboards intuitivos."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Atendimento Personalizado",
      description: "Criamos pessoas digitais únicas para cada cliente e situação."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Segurança Avançada",
      description: "Proteção total dos dados com criptografia de nível bancário."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Relatórios Detalhados",
      description: "Documentação completa de todas as interações e resultados obtidos."
    }
  ];

  return (
    <section id="como" className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">fazemos isso?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa metodologia proprietária garante que sua pessoa digital seja 
            perfeitamente alinhada com seu negócio e objetivos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6 text-center hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoSection;