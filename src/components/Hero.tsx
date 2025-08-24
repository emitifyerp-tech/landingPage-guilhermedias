import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import guilhermeImage from "@/assets/guilherme-dias-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Especialista em Tratamento de Joelho
            </h2>
            
            <p className="text-large text-muted-foreground mb-8 leading-relaxed">
              Fisioterapeuta Guilherme Dias com mais de 10 anos de experiência no tratamento 
              especializado de problemas no joelho. Recupere sua mobilidade e qualidade de vida.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Atendimento personalizado e humanizado",
                "Técnicas modernas e comprovadas",
                "Resultados eficazes e duradouros"
              ].map((item, index) => (
                <div key={index} className="flex items-center text-left">
                  <CheckCircle className="w-6 h-6 text-success mr-3 flex-shrink-0" />
                  <span className="text-large text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              className="btn-large cta-button text-white font-bold hover:opacity-90 transition-all duration-300 w-full sm:w-auto text-xl py-6"
            >
              Agende Sua Consulta Agora
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={guilhermeImage} 
                alt="Fisioterapeuta Guilherme Dias"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;