import iconGovernanca from "@/assets/icon-governanca.png";
import iconIntegracao from "@/assets/icon-mundo.png";
import iconEscalabilidade from "@/assets/icon-escabilidade.png";
import iconGestao from "@/assets/icon-gestao.png";
import iconSeguranca from "@/assets/icon-escudoright.png";
import iconImplementacao from "@/assets/icon-implementacao.png";

const ComoSection = () => {
  const features = [
    {
      icon: iconGovernanca,
      title: "Governança total",
      description:
        "Cada interação registrada, auditável e em conformidade com a LGPD.",
    },
    {
      icon: iconIntegracao,
      title: "Integração nativa",
      description:
        "Conectamos os Digital Workers a ERP, CRM, APIs internas e plataformas de mercado.",
    },
    {
      icon: iconEscalabilidade,
      title: "Escalabilidade sem barreiras",
      description:
        "Qualquer área pode ter seus próprios colaboradores digitais, sem especialistas.",
    },
    {
      icon: iconGestao,
      title: "Gestão unificada",
      description:
        "Todos os agentes em um só painel, evitando o 'caos de bots'.",
    },
    {
      icon: iconSeguranca,
      title: "Segurança corporativa",
      description:
        "Ambientes isolados, criptografia e controle de acesso rigoroso.",
    },
    {
      icon: iconImplementacao,
      title: "Implementação rápida",
      description:
        "Implemente agentes em dias, não em meses, com nossa infraestrutura pronta.",
    },
  ];

  return (
    <section id="como" className="relative py-16 px-4 md:px-8">
      <div className="container-custom mx-auto rounded-[24px] p-[2px] bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D]">
        {/* Inner content with dark background */}
        <div className="rounded-[22px] bg-[#000319] px-6 py-12 md:px-16 md:py-16">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[60px] leading-tight">
              <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-white to-[#75798D] bg-clip-text">
                Como{" "}
              </span>
              <span className="relative text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                fazemos
                <div className="absolute -top-10 -left-20 w-[160px] sm:w-[200px] md:w-[260px] h-[100px] sm:h-[130px] md:h-[150px] bg-pink-500/40 blur-[120px] rounded-full"></div>
              </span>{" "}
              <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-white to-[#75798D] bg-clip-text">
                isso?
              </span>
            </h2>
            <p className="mt-6 text-[#E4ECFF] text-base sm:text-lg md:text-xl max-w-[95%] sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light">
              Nós <strong>criamos a plataforma líder de Agentic AI</strong> no
              Brasil. Uma infraestrutura unificada que permite às empresas
              criar, gerenciar e escalar Digital Workers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-12 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 w-full max-w-[400px] mx-auto"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-[#E4ECFF] text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoSection;
