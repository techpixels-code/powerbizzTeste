import woman from "@/assets/womanHappy.png";
import elementoFlutuante1 from "@/assets/elemento-flutuante1.png";
import elementoFlutuante2 from "@/assets/elemento-flutuante2.png";
import elementoFlutuante3 from "@/assets/elemento-flutuante3.png";
import iconMaleta from "@/assets/icon-maleta.png";
import iconEscudo from "@/assets/icon-escudo.png";
import iconPessoas from "@/assets/icon-pessoas.png";

const SobreSection = () => {
  return (
    <section id="sobre" className="pt-[60px] md:pt-[80px] bg-[#000319]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Left Content */}
          <div className="relative text-center lg:text-left">
            {/* Blur rosa atrás do título */}
            <div className="absolute -top-10 -left-10 w-[250px] h-[120px] md:w-[400px] md:h-[200px] bg-pink-500/40 blur-[80px] md:blur-[120px] rounded-full"></div>

            {/* Título */}
            <h2 className="font-ubuntu text-[50px] sm:text-[48px] md:text-[60px] lg:text-[74px] font-normal leading-tight md:leading-[1.1] relative z-10">
              <span className="block text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text">
                Por que a
              </span>
              <span className="block text-transparent bg-gradient-to-r from-[#C000DB] to-[#FF6FD4] bg-clip-text">
                Powerbizz.ai
              </span>
              <span className="block text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text">
                existe?
              </span>
            </h2>

            {/* Texto abaixo */}
            <p className="sm:text-xl leading-relaxed mt-6 md:mt-8 text-[#E4ECFF]">
              <span className="font-semibold">O mundo corporativo</span> está diante de uma transformação: a força de trabalho digital já é realidade.
            </p>
            <p className="text-base sm:text-xl leading-relaxed mt-4 text-[#E4ECFF]">
              Mas as empresas enfrentam três grandes desafios para adotar Inteligência Artificial de forma séria.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <div className="relative w-[220px] sm:w-[300px] md:w-[380px] lg:w-auto">
              <img src={woman} alt="Powerbizz.ai Digital Person" className="w-full h-auto" />

              {/* Floating chat elements */}
              <div className="absolute -top-4 sm:-top-6 right-0 z-20 animate-float">
                <img src={elementoFlutuante1} alt="Chat element" className="w-16 sm:w-20 md:w-28 h-auto" />
              </div>
              <div
                className="absolute top-1/3 -left-6 sm:-left-10 z-20 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <img src={elementoFlutuante2} alt="Chat element" className="w-16 sm:w-20 md:w-28 h-auto" />
              </div>
              <div
                className="absolute bottom-1/4 -right-4 sm:-right-8 z-20 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <img src={elementoFlutuante3} alt="Chat element" className="w-14 sm:w-16 md:w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
