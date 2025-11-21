import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "inicio", label: "Início" },
    { id: "nossa-estrutura", label: "Nossa estrutura" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "tatto-flash", label: "Tatto Flash" },
    { id: "nosso-busao", label: "Nosso busão" },
    { id: "nos-eventos", label: "Nos eventos" },
    { id: "instagram", label: "Instagram" },
    { id: "fale-conosco", label: "Fale conosco" },
    { id: "nossa-van", label: "Nossa van" }
  ];

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-tattoo-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-wrap justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="px-3 py-2 text-sm transition-all duration-300 whitespace-nowrap text-foreground hover:text-tattoo-red"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-tattoo-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-tattoo-red/20 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className="px-4 py-3 text-left transition-all duration-300 text-foreground hover:text-tattoo-red hover:bg-tattoo-red/5"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
