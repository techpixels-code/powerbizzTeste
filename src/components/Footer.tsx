import logoPowerbizz from "@/assets/logo-powerbizz.png";
import iconEmail from "@/assets/icon-email.png";
import iconLinkedIn from "@/assets/icon-linkedin.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconYouTube from "@/assets/icon-youtube.png";
import iconWhatsApp from "@/assets/icon-whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C0E1C] text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo + Descrição + Social */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logoPowerbizz} alt="Powerbizz.ai" className="h-7 w-auto" />
            </div>
            <p className="text-sm text-[#E4ECFF] max-w-xs mb-6">
              Seja um BizLover e nos siga nas redes sociais! 
              Venha fazer parte da revolução da AI com a gente!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/powerbizz.ai/" target="_blank" rel="noopener noreferrer">
                <img src={iconInstagram} alt="Instagram" className="w-6 h-6 opacity-80 hover:opacity-100 transition" />
              </a>
              <a href="https://www.linkedin.com/company/powerbizzai/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
                <img src={iconLinkedIn} alt="LinkedIn" className="w-6 h-6 opacity-80 hover:opacity-100 transition" />
              </a>
              <a href="https://www.youtube.com/@powerbizz-ai" target="_blank" rel="noopener noreferrer">
                <img src={iconYouTube} alt="YouTube" className="w-6 h-6 opacity-80 hover:opacity-100 transition" />
              </a>
            </div>
          </div>

          {/* Contatos */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-6">Contate-nos</h3>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-[#E4ECFF] text-sm">
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <img src={iconEmail} alt="Email" className="w-5 h-5" />
                <span>bella@powerbizz.ai</span>
              </div>

              {/* WhatsApp Bella */}
              <div className="flex items-center gap-3">
                <img src={iconWhatsApp} alt="WhatsApp Bella" className="w-5 h-5" />
                <span>
                  Fale com a Bella pelo WhatsApp <br />
                  +55 (11) 97446-7018
                </span>
              </div>

              {/* WhatsApp Atendimento */}
              <div className="flex items-center gap-3">
                <img src={iconWhatsApp} alt="WhatsApp Atendimento" className="w-5 h-5" />
                <span>
                  WhatsApp Atendimento humano <br />
                  +55 (11) 95412-8635
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de copyright */}
      <div className="bg-[#161A31] mt-12 py-6 text-center">
        <p className="text-[20px] text-[#A3A8C6]">
          © 2025 PowerBizz.ai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
