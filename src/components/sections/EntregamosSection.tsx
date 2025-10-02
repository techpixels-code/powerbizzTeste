import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Settings, Users, Clock } from "lucide-react";

const EntregamosSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Atendimento 24/7",
      description: "Sua pessoa digital trabalha ininterruptamente, atendendo clientes a qualquer hora do dia."
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Automação Completa",
      description: "Automatizamos processos complexos, desde qualificação até fechamento de vendas."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Qualificação Inteligente",
      description: "Identificamos e qualificamos leads automaticamente, priorizando os mais promissores."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Resposta Instantânea",
      description: "Respostas imediatas para seus clientes, sem filas de espera ou demoras."
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
            {features.slice(0, 2).map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] p-1 rounded-full">
                <div className="bg-background rounded-full p-4">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {features.slice(2, 4).map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntregamosSection;
