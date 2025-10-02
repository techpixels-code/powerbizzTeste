import logoEmpresasQueConfiam from "@/assets/logo-empresasqueconfiam.png";

const ClientesSection = () => {

  return (
    <section className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-2xl text-muted-foreground mb-12">
            O que nossos clientes dizem:
          </h2>
          
          {/* Logo das empresas que confiam */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoEmpresasQueConfiam} 
              alt="Empresas que confiam na Powerbizz.ai" 
              className="w-full max-w-4xl h-auto opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
