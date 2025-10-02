import { Card, CardContent } from "@/components/ui/card";
import iconImplementacao from "@/assets/icon-implementacao.png";
import iconMundo from "@/assets/icon-mundo.png";
import iconGestao from "@/assets/icon-gestao.png";
import iconColaboradores from "@/assets/icon-colaboradores.png";
import iconGovernanca from "@/assets/icon-governanca.png";
import iconDisponivel from "@/assets/icon-disponivel.png";

const ComoSection = () => {
  const features = [
    {
      icon: iconImplementacao,
      title: "Implementação Rápida",
      description: "Sua pessoa digital funcionando em 48h, integrada e pronta para gerar resultados."
    },
    {
      icon: iconMundo,
      title: "Atendimento Global",
      description: "Suporte multilíngue para atender clientes em qualquer lugar do mundo."
    },
    {
      icon: iconGestao,
      title: "Gestão Centralizada",
      description: "Controle total através de um painel único e intuitivo."
    },
    {
      icon: iconColaboradores,
      title: "Múltiplos Colaboradores",
      description: "Crie equipes digitais completas para diferentes áreas do seu negócio."
    },
    {
      icon: iconGovernanca,
      title: "Governança Total",
      description: "Controle completo sobre permissões, acessos e conformidade."
    },
    {
      icon: iconDisponivel,
      title: "Disponível 24/7",
      description: "Sua equipe digital nunca descansa, sempre pronta para atender."
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
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
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