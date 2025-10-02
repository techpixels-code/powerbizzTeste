import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const PessoasDigitaisSection = () => {
  const digitals = [
    {
      name: "Ana - Consultora de Vendas",
      avatar: "/placeholder.svg",
      specialties: ["Vendas", "Atendimento", "Qualificação de Leads"],
      description: "Especializada em converter visitantes em clientes, Ana domina técnicas de vendas consultivas e consegue identificar as necessidades específicas de cada prospect.",
      metrics: ["85% Taxa de Conversão", "40% Aumento em Vendas", "24/7 Disponibilidade"]
    },
    {
      name: "Carlos - Especialista Técnico",
      avatar: "/placeholder.svg",
      specialties: ["Suporte", "Treinamento", "Resolução de Problemas"],
      description: "Com vasto conhecimento técnico, Carlos resolve dúvidas complexas e orienta usuários através de processos técnicos de forma clara e didática.",
      metrics: ["92% Satisfação", "60% Redução Tickets", "Suporte Multilíngue"]
    },
    {
      name: "Mariana - Gestora de Relacionamento",
      avatar: "/placeholder.svg",
      specialties: ["CRM", "Fidelização", "Pós-venda"],
      description: "Focada em manter relacionamentos duradouros, Mariana acompanha clientes pós-venda e identifica oportunidades de upsell e cross-sell.",
      metrics: ["95% Retenção", "150% ROI", "Relacionamento Personalizado"]
    }
  ];

  return (
    <section id="pessoas-digitais" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              entregamos?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Muito mais do que um chatbot. Uma força de trabalho digital completa 
            que revoluciona como você se relaciona com seus clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  🎯 Qualificação inteligente de leads
                </h3>
                <p className="text-muted-foreground">
                  Identifica os prospects mais qualificados e os direciona para o funil de vendas correto.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  💬 Conversas que convertem
                </h3>
                <p className="text-muted-foreground">
                  Diálogos naturais e persuasivos que conduzem o cliente pela jornada de compra.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  📊 Relatórios em tempo real
                </h3>
                <p className="text-muted-foreground">
                  Acompanhe métricas, conversões e performance da sua pessoa digital 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                <div className="bg-background rounded-full p-6">
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Two people representation */}
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">👨‍💼</div>
                      <div className="text-5xl">👩‍💼</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -top-8 -right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                +300% Conversão
              </div>
              <div className="absolute top-1/2 -left-12 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                24/7 Online
              </div>
              <div className="absolute -bottom-8 left-1/3 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                ∞ Clientes
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            A Powerbizz.ai oferece exatamente isso para o seu negócio
          </p>
          <button
            onClick={() => window.open("https://wa.me/5514997665343", "_blank")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-smooth"
          >
            Quero minha pessoa digital
          </button>
        </div>
      </div>
    </section>
  );
};

export default PessoasDigitaisSection;