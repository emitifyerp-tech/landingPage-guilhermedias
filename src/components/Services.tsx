import { Heart, Activity, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Terapia Manual",
      description: "Técnicas manuais especializadas para alívio da dor e melhora da mobilidade do joelho."
    },
    {
      icon: Activity,
      title: "Reabilitação Pós-Cirúrgica",
      description: "Programa completo de recuperação após cirurgias de joelho, com acompanhamento personalizado."
    },
    {
      icon: Target,
      title: "Reabilitação Esportiva",
      description: "Retorno seguro ao esporte com fortalecimento específico e prevenção de lesões."
    },
    {
      icon: Shield,
      title: "Tratamento da Dor no Joelho",
      description: "Abordagem integral para diferentes tipos de dor no joelho, com foco na causa raiz."
    }
  ];

  return (
    <section id="servicos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h3>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Tratamentos especializados para sua completa recuperação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/20 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-success" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;