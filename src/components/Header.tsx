import { Button } from "@/components/ui/button";
import logo from "@/assets/ximitech.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Công nghệ", href: "#tech" },
    { label: "Dự án", href: "#projects" },
    { label: "Đánh giá", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center cursor-pointer group">
            <img 
              src={logo} 
              alt="XimiTech Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto transition-transform group-hover:scale-110" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-white hover:text-primary hover:bg-primary/10"
              onClick={() => window.open('tel:+84888889805', '_self')}
            >
              088 888 9805
            </Button>
            <Button 
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all hover:scale-105"
              onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
            >
              Liên hệ ngay
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-white/70 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button 
                variant="ghost" 
                className="w-full text-white hover:text-primary hover:bg-primary/10"
                onClick={() => window.open('tel:+84888889805', '_self')}
              >
                088 888 9805
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
              >
                Liên hệ ngay
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
