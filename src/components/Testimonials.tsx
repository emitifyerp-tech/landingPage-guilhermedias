import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "68 anos",
      text: "Após a cirurgia no joelho, achei que não voltaria a caminhar normalmente. Com o Guilherme, em 3 meses já estava subindo escadas sem dor.",
      rating: 5
    },
    {
      name: "João Santos",
      age: "72 anos", 
      text: "Excelente profissional! Muito atencioso e explicava tudo com paciência. Minha dor no joelho diminuiu muito com o tratamento.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "65 anos",
      text: "Recomendo de olhos fechados. O Guilherme é muito competente e me ajudou a voltar a fazer minhas caminhadas diárias.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos dos Pacientes
          </h3>
          <p className="text-large text-muted-foreground">
            Veja o que nossos pacientes falam sobre o tratamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <div className="flex space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;