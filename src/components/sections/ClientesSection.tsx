import logoOpenAI from "@/assets/logo-openai.png";
import logoMeta from "@/assets/logo-meta.png";
import logoGoogle from "@/assets/logo-google.png";
import logoAnthropic from "@/assets/logo-anthropc.png";
import logoAWS from "@/assets/logo-aws.png";
import logoA from "@/assets/logo-a.png";

// Novas logos de empresas que confiam
import iconTsa from "@/assets/icon-tsa.png";
import iconDayBrasil from "@/assets/icon-dayBrasil.png";
import iconNutty from "@/assets/icon-nutty.png";
import iconBmcHundai from "@/assets/icon-bmcHundai.png";
import iconYaman from "@/assets/icon-yaman.png";
import iconVedacit from "@/assets/icon-vedacit.png";
import iconCavenaghi from "@/assets/icon-cavenaghi.png";
import iconAptk from "@/assets/icon-aptk.png";
import iconAstra from "@/assets/icon-astra.png";
import iconHsm from "@/assets/icon-hsm.png";

const technologies = [
  { name: "OpenAI", logo: logoOpenAI },
  { name: "Meta", logo: logoMeta },
  { name: "Google", logo: logoGoogle },
  { name: "Anthropic", logo: logoAnthropic },
  { name: "AWS", logo: logoAWS },
  { name: "Azure", logo: logoA },
];

const clients = [
  { name: "TSA", logo: iconTsa },
  { name: "DayBrasil", logo: iconDayBrasil },
  { name: "Nutty", logo: iconNutty },
  { name: "BMC Hyundai", logo: iconBmcHundai },
  { name: "Yaman", logo: iconYaman },
  { name: "Vedacit", logo: iconVedacit },
  { name: "Cavenaghi", logo: iconCavenaghi },
  { name: "APTK", logo: iconAptk },
  { name: "Astra", logo: iconAstra },
  { name: "HSM", logo: iconHsm },
];

const ClientesSection = () => {
  return (
    <section className="bg-[#000319] py-[80px] overflow-hidden">
      <div className="container-custom space-y-20">
        
        {/* Tecnologias */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
            Tecnologias que utilizamos
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 md:h-8 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Empresas que confiam */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
            Empresas que confiam na Powerbizz.ai
          </h2>

          {/* Marquee Effect */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee space-x-16 w-max">
              {clients.concat(clients).map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animação do marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ClientesSection;
