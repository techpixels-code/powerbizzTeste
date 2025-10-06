import iconColaboradores from "@/assets/icon-colaboradores.png";
import iconContextuais from "@/assets/icon-contextuais.png";
import iconExecutivos from "@/assets/icon-operacionais.png";
import iconDisponiveis from "@/assets/icon-disponivel.png";
import imgMidBlur from "@/assets/img-midBlur.png";

const EntregamosSection = () => {
  const features = [
    {
      icon: iconColaboradores,
      title: "Colaboradores digitais com identidade",
      description:
        "Cada Digital Worker tem nome, rosto e função clara, criando conexão humana.",
    },
    {
      icon: iconContextuais,
      title: "Contextuais e especializados",
      description:
        "Falam apenas do universo da sua empresa, com conhecimento específico do negócio.",
    },
    {
      icon: iconExecutivos,
      title: "Operacionais e executivos",
      description:
        "Executam tarefas reais — geram pedidos, respondem clientes, processam informações.",
    },
    {
      icon: iconDisponiveis,
      title: "Disponíveis 24/7",
      description:
        "Trabalham em escala, sem limite de horário, mantendo qualidade constante.",
    },
  ];

  return (
    <section
      id="entregamos"
      className="py-[100px] bg-[#000319] relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2 className="text-7xl leading-tight">
            <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-white to-[#75798D] bg-clip-text">
              O que{" "}
            </span>
            <span className="text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
              entregamos
            </span>
            <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-white to-[#75798D] bg-clip-text">
              ?
            </span>
          </h2>
          <div className="absolute left-[44%] bottom-[0] rounded-full w-[250px] h-[120px] bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] opacity-30 blur-3xl"></div>
          <p className="mt-6 text-[#E4ECFF] text-xl max-w-2xl mx-auto leading-relaxed">
            Entregamos Digital Workers, que nós chamamos de{" "}
            <span className="font-semibold">Pessoas Digitais:</span>
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-24">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3 text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-[#E4ECFF] text-lg text-base leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative z-10">
              <img
                src={imgMidBlur}
                alt="Pessoas Digitais"
                className="w-full max-w-lg lg:max-w-xl h-auto"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-24">
            {features.slice(2).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3 text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-[#E4ECFF] text-lg text-base leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntregamosSection;
