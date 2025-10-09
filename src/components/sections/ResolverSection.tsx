import { Button } from "@/components/ui/button";
import iconP from "@/assets/icon-p.png";
import iconMaleta from "@/assets/icon-maleta.png";
import iconEscudo from "@/assets/icon-escudo.png";
import iconPessoas from "@/assets/icon-pessoas.png";

const ResolverSection = () => {
  const features = [
    {
      icon: iconMaleta,
      title: "Dependência de especialistas",
      description:
        "Alto custo e dificuldade de manter times técnicos para IA, limitando a escalabilidade.",
    },
    {
      icon: iconEscudo,
      title: "Risco de segurança",
      description:
        "Dados sensíveis em modelos abertos e sem rastreabilidade, comprometendo a segurança corporativa.",
    },
    {
      icon: iconPessoas,
      title: "Falta de governança",
      description:
        "Agentes espalhados, sem controle nem auditoria, criando riscos operacionais e de compliance.",
    },
  ];

  // section-padding

  return (
    <section className=" text-center relative bg-[#000319] pb-[80px]">
      <div className="container-custom">
        {/* Feature Boxes */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-[2px] animate-gradient-border"
              >
                <div className="bg-gradient-to-b from-[#04071D] to-[#15183A] rounded-2xl p-6 h-full text-left">
                  <div className="flex flex-col items-start mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 mr-3"
                    />
                    <h3 className="text-xl   font-semibold text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#B7BADA] text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Linha vertical saindo de cada card */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-[161px] w-[2px] bg-gradient-to-b from-[#6971A2] via-[#FFFFFF] to-[#272A3C] rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Ícone central */}
          <div className="relative flex justify-center mt-[8rem] z-50"> {/* GAP abaixo dos cards */}
            <div className="p-[2px] rounded-[20px] animate-gradient-border z-30">
              <div className="w-16 h-16 rounded-[20px] bg-[#0F1124] flex items-center justify-center shadow-lg">
                <img src={iconP} alt="Powerbizz.ai" className="w-8 h-8" />
              </div>
            </div>
            {/* Linha Horizontal saindo de cada card */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-[68.55%] h-[2px] bg-gradient-to-r from-[#6971A2] via-[#FFFFFF] to-[#272A3C] rounded-full"></div>
          </div>
        </div>

        {/* Texto abaixo */}
        <div className="max-w-[676px] mx-auto mt-10">
          <h2 className="text-3xl md:text-4xl mb-6">
            <span className="text-[60px] text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text">
              A Powerbizz.ai {" "}
            </span>
            
            <span className="text-[60px] text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text">
              nasceu para resolver{" "}
            </span>
            <span className="text-[60px] text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text font-extrabold">
              exatamente isso.
            </span>
          </h2>

          <p className="text-[#E4ECFF] text-xl mb-10 leading-relaxed">
            Nossa razão de existir é criar uma nova força de trabalho digital
            para as empresas, com segurança, governança e simplicidade.
          </p>

          {/* CTA Button */}
          <Button
            onClick={() =>
              window.open("https://wa.me/5511974467018", "_blank")
            }
            className="bg-gradient-to-r from-[#04071D] to-[#15183A] h-[67px] hover:opacity-90 text-white rounded-xl px-8 py-4 text-lg transition-all duration-300"
          >
            Começar agora ↗
          </Button>
        </div>
      </div>

      {/* Animação de gradiente no border */}
      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient-border {
            background: linear-gradient(
              90deg,
              #6971A2 40%,
              #FFFFFF 70%,
              #272A3C 50%
            );
            background-size: 200% 200%;
            animation: gradient-move 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ResolverSection;
