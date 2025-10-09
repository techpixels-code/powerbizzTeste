import iconFlecha from "@/assets/icon-flecha.png";

const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="py-[80px] bg-[#000319]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-[60px] font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              Benefícios
            </span>{" "}
            para sua empresa
          </h2>
        </div>

        {/* Flecha + Conteúdo */}
        <div className="relative flex flex-col items-center">
          {/* Desktop/Tablet - Flecha visível */}
          <div className="relative w-full max-w-6xl hidden md:block">
            <img
              src={iconFlecha}
              alt="Flecha Benefícios"
              className="w-full h-auto"
            />

            {/* Textos dentro da flecha */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-12 text-center text-white">
              <div className="max-w-xs">
                <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Centralização</h3>
                <p className="text-xl text-gray-300">
                  Um único lugar para criar e controlar todos os agentes da empresa.
                </p>
              </div>
              <div className="max-w-xs">
                <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Redução de custos</h3>
                <p className="text-xl text-gray-300">
                  Menos mão de obra repetitiva, mais eficiência operacional.
                </p>
              </div>
              <div className="max-w-xs">
                <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Inovação</h3>
                <p className="text-xl text-gray-300">
                  Sua empresa operando com a força de trabalho digital do futuro.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile - Sem flecha, textos empilhados */}
          <div className="flex flex-col gap-8 text-center text-white md:hidden">
            <div className="max-w-sm mx-auto">
              <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Centralização</h3>
              <p className="text-base text-gray-300">
                Um único lugar para criar e controlar todos os agentes da empresa.
              </p>
            </div>
            <div className="max-w-sm mx-auto">
              <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Redução de custos</h3>
              <p className="text-base text-gray-300">
                Menos mão de obra repetitiva, mais eficiência operacional.
              </p>
            </div>
            <div className="max-w-sm mx-auto">
              <h3 className="font-bold text-2xl mb-1 text-[#E040FB]">Inovação</h3>
              <p className="text-base text-gray-300">
                Sua empresa operando com a força de trabalho digital do futuro.
              </p>
            </div>
          </div>

          {/* Itens abaixo da flecha */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center text-white">
            <div className="max-w-xs mx-auto">
              <h3 className="font-bold text-xl mb-1 text-[#E040FB]">Escala</h3>
              <p className="text-xl text-gray-300">
                Crie dezenas de Pessoas Digitais para diferentes áreas em minutos.
              </p>
            </div>
            <div className="max-w-xs mx-auto">
              <h3 className="font-bold text-xl mb-1 text-[#E040FB]">Confiabilidade</h3>
              <p className="text-xl text-gray-300">
                Controle, rastreabilidade e segurança em cada ação.
              </p>
            </div>
            <div className="max-w-xs mx-auto">
              <h3 className="font-bold text-xl mb-1 text-[#E040FB]">Velocidade</h3>
              <p className="text-xl text-gray-300">
                Implemente agentes em dias, não em meses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
