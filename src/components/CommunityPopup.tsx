import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Users, Zap } from "lucide-react";

const CommunityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5514997665343", "_blank");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Faça parte da comunidade
          </h2>
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              WeDoAI.
            </span>
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Junte-se a milhares de empreendedores que estão transformando seus negócios com IA. 
            Acesso exclusivo a conteúdo, networking e oportunidades.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            Quero fazer parte!
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold backdrop-blur-sm">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
          <Users className="w-6 h-6" />
        </div>
        <div className="absolute -bottom-4 left-1/4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
          <Zap className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPopup;
