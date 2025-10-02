import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import CommunityPopup from "@/components/CommunityPopup";
import HeroSection from "@/components/sections/HeroSection";
import SobreSection from "@/components/sections/SobreSection";
import ResolverSection from "@/components/sections/ResolverSection";
import ComoSection from "@/components/sections/ComoSection";
import EntregamosSection from "@/components/sections/EntregamosSection";
import AreasSection from "@/components/sections/AreasSection";
import BeneficiosSection from "@/components/sections/BeneficiosSection";
import ClientesSection from "@/components/sections/ClientesSection";
import FeedbacksSection from "@/components/sections/FeedbacksSection";
import PlataformaSection from "@/components/sections/PlataformaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SobreSection />
        <ResolverSection />
        <ComoSection />
        <EntregamosSection />
        <AreasSection />
        <BeneficiosSection />
        <ClientesSection />
        <FeedbacksSection />
        <PlataformaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CommunityPopup />
    </div>
  );
};

export default Index;
