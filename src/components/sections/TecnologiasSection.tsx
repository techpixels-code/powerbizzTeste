import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  Cpu, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Layers
} from "lucide-react";

const TecnologiasSection = () => {
  const technologies = [
    {
      icon: <Brain className="w-10 h-10" />,
      name: "Machine Learning",
      description: "Algoritmos avançados que aprendem e evoluem continuamente com cada interação.",
      features: ["Deep Learning", "Neural Networks", "Pattern Recognition"]
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      name: "Natural Language Processing",
      description: "Compreensão contextual e processamento de linguagem natural em português brasileiro.",
      features: ["Análise Semântica", "Reconhecimento de Entidades", "Sentiment Analysis"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      name: "GPT & LLM",
      description: "Modelos de linguagem de última geração para conversas naturais e inteligentes.",
      features: ["GPT-4", "Claude", "Modelos Customizados"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      name: "Big Data & Analytics",
      description: "Processamento de grandes volumes de dados para insights e personalização.",
      features: ["Real-time Analytics", "Data Mining", "Predictive Modeling"]
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      name: "Cloud Infrastructure",
      description: "Infraestrutura escalável na nuvem para garantir disponibilidade e performance.",
      features: ["AWS/Azure", "Auto-scaling", "Edge Computing"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      name: "Security & Privacy",
      description: "Segurança de dados e privacidade em conformidade com LGPD e GDPR.",
      features: ["Criptografia", "LGPD Compliance", "Zero Trust"]
    }
  ];

  const integrations = [
    "WhatsApp Business API",
    "Telegram Bot API", 
    "Facebook Messenger",
    "Instagram Direct",
    "Website Chat Widget",
    "CRM Integration",
    "E-commerce Platforms",
    "Email Marketing"
  ];

  return (
    <section id="tecnologias" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologias de{" "}
            <span className="text-primary">Ponta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utilizamos as mais avançadas tecnologias de IA e machine learning 
            para criar experiências digitais que superam expectativas.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <Card key={index} className="gradient-border glow-card transition-smooth hover:scale-105 group">
              <CardContent className="p-6">
                {/* Icon */}
                <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit text-primary group-hover:bg-primary group-hover:text-white transition-smooth">
                  {tech.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrations Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Integrações Disponíveis
          </h3>
          <p className="text-muted-foreground mb-8">
            Conecte nossa IA com suas ferramentas e plataformas favoritas
          </p>
        </div>

        <Card className="gradient-border glow-card">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                  <Layers className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{integration}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Não encontrou sua plataforma? Desenvolvemos integrações customizadas!
              </p>
              <button
                onClick={() => window.open("https://wa.me/5511974467018", "_blank")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg glow-primary transition-smooth"
              >
                Solicitar Integração
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TecnologiasSection;