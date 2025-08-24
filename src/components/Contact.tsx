import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(51) 9 8611-7054",
      action: "tel:+5551986117054"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(51) 98611-7054",
      action: "https://wa.me/5551986117054"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123 - Centro, São Paulo - SP",
      action: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
      action: "#"
    }
  ];

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h3>
          <p className="text-large text-muted-foreground">
            Agende sua consulta e inicie sua recuperação hoje mesmo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h4>
            
            {contactInfo.map((item, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h5>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.info}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8">
              <h5 className="font-semibold text-foreground mb-4">Localização</h5>
              <div className="aspect-video bg-muted rounded-lg border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974950818997!2d-46.63426778502207!3d-23.561681984696654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sR.%20das%20Flores%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1647875234567!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do consultório"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;