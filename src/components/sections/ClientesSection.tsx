const ClientesSection = () => {
  const clientes = [
    "DAY",
    "BMC", 
    "HYUNDAI",
    "Vanon",
    "VEDACIT",
    "CAPINAC",
    "APTK",
    "hsm"
  ];

  return (
    <section className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-2xl text-muted-foreground mb-12">
            Empresas que confiam na Powerbizz.ai
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientes.map((cliente, index) => (
              <div key={index} className="text-white/60 text-lg font-medium text-center">
                {cliente}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
