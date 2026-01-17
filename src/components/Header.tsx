import { Button } from "@/components/ui/button";
import logo from "@/assets/ximitech.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Công nghệ", href: "#tech" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Dự án", href: "#projects" },
    { label: "Đánh giá", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`container mx-auto px-4 transition-all duration-500 ${isScrolled ? 'max-w-6xl' : 'max-w-full'}`}>
        <div className={`relative flex items-center justify-between px-6 transition-all duration-500 overflow-hidden
          ${isScrolled 
            ? 'h-16 rounded-full border border-white/20 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' 
            : 'h-20 rounded-2xl border border-transparent bg-transparent'
          }`}
        >
          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary origin-left z-50"
            style={{ scaleX }}
          />

          <a href="#home" className="flex items-center cursor-pointer group z-10">
            <img 
              src={logo} 
              alt="XimiTech Logo" 
              className={`transition-all duration-500 group-hover:scale-110 ${isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20 lg:h-24'}`} 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 z-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/80 transition-all hover:text-primary hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-4 z-10">
            <Button 
              variant="ghost" 
              className={`hidden md:inline-flex text-white hover:text-primary hover:bg-primary/10 transition-all ${isScrolled ? 'h-9 text-xs' : 'h-10 text-sm'}`}
              onClick={() => window.open('tel:+84888889805', '_self')}
            >
              088 888 9805
            </Button>
            <Button 
              className={`hidden md:inline-flex bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all hover:scale-105 font-bold ${isScrolled ? 'h-9 px-4 text-xs' : 'h-10 px-6 text-sm'}`}
              onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
            >
              Liên hệ ngay
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-2 p-6 space-y-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-white/70 transition-colors hover:text-primary py-2 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button 
                variant="outline" 
                className="w-full text-white border-white/20 hover:bg-white/10"
                onClick={() => window.open('tel:+84888889805', '_self')}
              >
                088 888 9805
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 font-bold"
                onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
              >
                Liên hệ ngay
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};
