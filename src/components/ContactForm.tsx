import { useState } from "react";
import { Phone, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Criar mensagem do WhatsApp com os dados do formulário
    const phoneNumber = "5551980485249"; // Número do WhatsApp
    const message = `Olá! Gostaria de agendar uma consulta com o Dr. Guilherme Dias.

📋 *Dados para agendamento:*
👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
📅 *Data preferida:* ${new Date(formData.date).toLocaleDateString('pt-BR')}

Aguardo confirmação. Obrigado!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Mostrar toast de confirmação
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Seus dados foram preenchidos automaticamente na mensagem.",
    });
    
    // Reset form
    setFormData({ name: "", phone: "", date: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="gradient-card border-border">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-foreground">
          Agende Sua Consulta
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Nome Completo
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 h-12 text-large bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Telefone / WhatsApp
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                required
                className="pl-10 h-12 text-large bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-foreground font-medium">
              Data Preferida
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="pl-10 h-12 text-large bg-background border-border focus:border-primary"
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full btn-large cta-button text-white font-bold hover:opacity-90 transition-all duration-300 text-xl py-6"
          >
            Enviar via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;