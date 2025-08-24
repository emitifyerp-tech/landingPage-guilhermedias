import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-foreground mb-3">
              Guilherme Dias
            </h4>
            <p className="text-muted-foreground">
              Fisioterapeuta especializado no tratamento de joelho, 
              dedicado à sua recuperação e bem-estar.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-3">
              Serviços
            </h5>
            <ul className="space-y-2 text-muted-foreground">
              <li>Terapia Manual</li>
              <li>Reabilitação Pós-Cirúrgica</li>
              <li>Reabilitação Esportiva</li>
              <li>Tratamento da Dor no Joelho</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-3">
              Contato Rápido
            </h5>
            <ul className="space-y-2 text-muted-foreground">
              <li>Telefone: (11) 99999-9999</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © 2025 Guilherme Dias - Fisioterapeuta. Feito com 
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            para sua saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;