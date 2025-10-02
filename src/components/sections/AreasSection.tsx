import { CheckCircle } from "lucide-react";

const AreasSection = () => {
  const areas = [
    "Operações",
    "Finanças", 
    "RH",
    "Vendas",
    "Atendimento",
    "Marketing",
    "TI",
    "Jurídico"
  ];

  const mockupMessages = [
    "Olá! Como posso ajudar você hoje?",
    "Qual produto você gostaria de conhecer?",
    "Vou te passar as informações!",
    "Perfeito! Vamos fechar?",
    "Obrigado pela preferência!"
  ];

  return (
    <section className="section-padding bg-background-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left">
              Atuando em áreas como
            </h2>
            
            {/* Areas List */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E040FB] flex-shrink-0" />
                  <span className="text-lg text-white font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Smartphone Mockups */}
          <div className="relative">
            <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5].map((phone, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-gray-800 rounded-2xl p-4 flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="flex-1 space-y-3 mb-4">
                        {mockupMessages.slice(0, 3).map((message, msgIndex) => (
                          <div key={msgIndex} className="flex justify-end">
                            <div className="bg-green-500 text-white p-3 rounded-2xl rounded-br-sm max-w-xs">
                              <p className="text-sm">{message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Input Area */}
                      <div className="bg-gray-700 rounded-full p-3 flex items-center">
                        <div className="flex-1 bg-gray-600 rounded-full h-8 flex items-center px-3">
                          <span className="text-gray-400 text-sm">Digite uma mensagem...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
