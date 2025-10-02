import imgPhones from "@/assets/img-phones.png";

const AreasAtuacaoSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Atuando em{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              diferentes áreas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa plataforma de Agentic AI atende diversos setores com soluções 
            personalizadas para cada tipo de negócio.
          </p>
        </div>

        {/* Phones Image */}
        <div className="flex justify-center">
          <img 
            src={imgPhones} 
            alt="Pessoas Digitais em ação" 
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacaoSection;
