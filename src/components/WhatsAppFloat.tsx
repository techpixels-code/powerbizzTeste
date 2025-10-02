import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5514997665343", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Entre em contato via WhatsApp"
    >
      <MessageCircle size={28} color="white" />
    </button>
  );
};

export default WhatsAppFloat;