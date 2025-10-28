import { Button } from "@/components/ui/button";
import logoOrange from "@/assets/logo-orange.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Tính năng", href: "#features" },
    { label: "Quy trình", href: "#process" },
    { label: "Đánh giá", href: "#testimonials" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoOrange} alt="Rentino" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">Rentino</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Đăng nhập
            </Button>
            <Button className="hidden md:inline-flex">Tải app</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full">
                Đăng nhập
              </Button>
              <Button className="w-full">Tải app</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
