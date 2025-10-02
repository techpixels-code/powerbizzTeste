import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Users, MessageCircle, Shield, FileText } from "lucide-react";

const SobreSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Automação Inteligente",
      description: "Nossa IA trabalha 24/7 para automatizar processos e maximizar resultados."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Segurança Garantida",
      description: "Proteção total dos seus dados com as melhores práticas de segurança."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Relatórios Detalhados",
      description: "Acompanhe cada métrica e resultado em tempo real."
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

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] p-1 rounded-full">
                <div className="bg-background rounded-full p-4">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👩‍💼</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 left-1/4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6 text-center">
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
          
          {/* Central Logo */}
          <div className="flex justify-center mt-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              P
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;