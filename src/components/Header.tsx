import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              Guilherme Dias
            </h1>
            <span className="text-muted-foreground text-sm md:text-base">
              Fisioterapeuta
            </span>
          </div>
          
          {/* Botão removido conforme solicitado */}
        </div>
      </div>
    </header>
  );
};

export default Header;