import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    "Início",
    "Nossa estrutura",
    "Depoimentos",
    "Tatto Flash",
    "Nosso busão",
    "Nos Eventos",
    "Instagram",
    "Fale conosco",
    "Nossa van"
  ];

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    setIsMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-tattoo-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-serif font-bold text-tattoo-red">
              Tattoo Móvel
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-3 py-2 text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-tattoo-red font-semibold"
                    : "text-foreground hover:text-tattoo-red"
                }`}
              >
                {tab}
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
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-3 text-left transition-all duration-300 ${
                    activeTab === tab
                      ? "text-tattoo-red font-semibold bg-tattoo-red/10"
                      : "text-foreground hover:text-tattoo-red hover:bg-tattoo-red/5"
                  }`}
                >
                  {tab}
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
