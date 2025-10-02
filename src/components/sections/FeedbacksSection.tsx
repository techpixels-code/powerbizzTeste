import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const FeedbacksSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      position: "CEO da TechCorp",
      text: "A Powerbizz.ai transformou completamente nosso atendimento. Aumentamos as conversões em 250% e reduzimos custos operacionais drasticamente."
    },
    {
      name: "João Santos",
      position: "Diretor Comercial - InnovaTech",
      text: "Nunca imaginei que uma IA pudesse ser tão humanizada. Nossos clientes nem percebem que não estão falando com uma pessoa real."
    },
    {
      name: "Ana Carvalho",
      position: "Fundadora da DigitalFlow",
      text: "A qualidade do atendimento melhorou exponencialmente. A IA consegue identificar perfeitamente as necessidades dos clientes."
    }
  ];

  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E040FB] to-[#8A2BE2] bg-clip-text">
              nossos clientes
            </span>{" "}
            dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-card-border p-6">
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-[#E040FB]" />
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;