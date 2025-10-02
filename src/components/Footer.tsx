import logoPowerbizz from "@/assets/logo-powerbizz.png";
import iconEmail from "@/assets/icon-email.png";
import iconWhatsApp from "@/assets/icon-whatsapp.png";
import iconLinkedIn from "@/assets/icon-linkedin.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconYouTube from "@/assets/icon-youtube.png";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logoPowerbizz} alt="Powerbizz.ai" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A força de trabalho digital do futuro. Criamos pessoas digitais 
              que trabalham 24/7 para o seu negócio crescer.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contate-nos</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <img src={iconEmail} alt="Email" className="w-5 h-5" />
                <span>contato@powerbizz.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={iconWhatsApp} alt="WhatsApp" className="w-5 h-5" />
                <span>(14) 99766-5343</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={iconLinkedIn} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={iconInstagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={iconYouTube} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Powerbizz.ai. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;