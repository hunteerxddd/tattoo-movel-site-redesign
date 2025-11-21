import { Instagram, MessageCircle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialButtonsProps {
  buttons: ("instagram" | "whatsapp" | "youtube")[];
  className?: string;
}

const SocialButtons = ({ buttons, className = "" }: SocialButtonsProps) => {
  const socialLinks = {
    instagram: "https://www.instagram.com/tattoomovel/",
    whatsapp: "https://wa.me/5521964478726",
    youtube: "https://www.youtube.com/@Tattoomovel"
  };

  const socialIcons = {
    instagram: <Instagram className="w-5 h-5" />,
    whatsapp: <MessageCircle className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />
  };

  const socialLabels = {
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    youtube: "YouTube"
  };

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {buttons.map((button) => (
        <Button
          key={button}
          variant="outline"
          size="lg"
          className="border-tattoo-red text-foreground hover:bg-tattoo-red hover:text-white transition-all duration-300 hover-glow"
          onClick={() => window.open(socialLinks[button], '_blank')}
        >
          {socialIcons[button]}
          <span className="ml-2">{socialLabels[button]}</span>
        </Button>
      ))}
    </div>
  );
};

export default SocialButtons;
