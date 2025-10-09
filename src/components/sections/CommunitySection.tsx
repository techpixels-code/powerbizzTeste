import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import iconBlur from "@/assets/icon-blur.png";
import iconCirculoPontilhado from "@/assets/icon-circuloPontilhado.png";
import iconMeialuaPontilhado from "@/assets/icon-meialuaPontilhado.png";
import elementoFlutuante1 from "@/assets/elemento-flutuante1.png";
import elementoFlutuante2 from "@/assets/elemento-flutuante2.png";
import elementoFlutuante3 from "@/assets/elemento-flutuante3.png";
import elementoFlutuante4 from "@/assets/elemento-flutuante4.png";

const CommunitySection = () => {
  return (
    <section
      id="community"
      className="relative section-padding overflow-hidden"
    >
      {/* Fundo dividido em 2 cores */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#000319]" />
        <div className="h-3/4 bg-[#E559F9]" />
      </div>

      {/* Elementos decorativos escondidos no mobile */}
      <img
        src={iconBlur}
        alt="Blur"
        className="hidden md:block absolute top-80 left-80 w-[100px] opacity-70"
      />
      <img
        src={iconBlur}
        alt="Blur"
        className="hidden md:block absolute top-90 right-80 w-[120px] opacity-70"
      />
      <img
        src={iconCirculoPontilhado}
        alt="Círculo Pontilhado"
        className="hidden md:block absolute top-5 right-80 w-[550px] opacity-80"
      />
      <img
        src={iconMeialuaPontilhado}
        alt="Meia Lua Pontilhada"
        className="hidden md:block absolute top-30 -left-12 w-[250px] opacity-80"
      />
      <img
        src={elementoFlutuante1}
        alt="Elemento Flutuante 1"
        className="hidden md:block absolute top-1/4 left-5 w-[120px] animate-[float_6s_ease-in-out_infinite]"
      />
      <img
        src={elementoFlutuante2}
        alt="Elemento Flutuante 2"
        className="hidden md:block absolute top-20 right-40 w-[200px] animate-[float_7s_ease-in-out_infinite]"
      />
      <img
        src={elementoFlutuante3}
        alt="Elemento Flutuante 3"
        className="hidden md:block absolute bottom-60 right-0 w-[140px] animate-[float_8s_ease-in-out_infinite]"
      />
      <img
        src={elementoFlutuante4}
        alt="Elemento Flutuante 4"
        className="hidden md:block absolute bottom-10 left-1/3 w-[100px] animate-[float_8s_ease-in-out_infinite]"
      />

      {/* Card central */}
      <div className="container-custom relative z-10 flex justify-center">
        <div className="bg-white rounded-2xl shadow-2xl px-6 md:px-8 py-10 md:py-14 text-center max-w-3xl relative w-full">
          <h2 className="text-3xl md:text-6xl text-start font-bold mb-4 md:mb-6 text-[#04071D]">
            Faça parte da comunidade{" "}
            <span className="text-[#E559F9]">WeDoAI.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-700 mb-10 md:mb-16">
            A maior <strong>comunidade global</strong> de especialistas em
            Digital Workers.
          </p>

          {/* Botão – ajustado no mobile para ficar dentro do card */}
          <div className="md:absolute md:left-1/2 md:-bottom-10 md:-translate-x-1/2">
            <Button
              onClick={() =>
                window.open("https://api.whatsapp.com/send/?phone=5511974467018&text=Quero%20fazer%20parte%20da%20comunidade%21&type=phone_number&app_absent=0", "_blank")
              }
              className="bg-black text-white text-base md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-xl hover:bg-gray-800 flex items-center gap-2 w-full md:w-auto justify-center"
            >
              Faça parte <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* animação float custom */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default CommunitySection;
