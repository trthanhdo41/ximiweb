import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/ximitech.png";
import { Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { label: "Thiết kế Website", href: "#services" },
    { label: "App Mobile", href: "#services" },
    { label: "Chatbot AI", href: "#services" },
    { label: "Đồ án CNTT", href: "#services" },
    { label: "Về chúng tôi", href: "#about" },
    { label: "Công nghệ", href: "#tech" },
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[hsl(220_40%_12%)] to-[hsl(220_45%_8%)] text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <img src={logoWhite} alt="XimiTech" className="h-12 w-auto mb-4" />
                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                  Giải pháp công nghệ chuyên nghiệp cho doanh nghiệp Việt Nam.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">205+</div>
                  <div className="text-xs text-white/60">Dự án hoàn thành</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-white/60">Năm kinh nghiệm</div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10"
                  onClick={() => window.open('https://facebook.com/ximitech', '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10"
                  onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.115.346.178.639.524.524l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.5 13.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z"/></svg>
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all border border-white/10"
                  onClick={() => window.open('https://youtube.com/@ximitech', '_blank')}
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Dịch vụ</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Liên hệ</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+84888889805" 
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Hotline</div>
                    <div className="text-sm font-medium">088 888 9805</div>
                  </div>
                </a>

                <a 
                  href="mailto:ximitech1309@gmail.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Email</div>
                    <div className="text-sm font-medium">ximitech1309@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-white/70">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 mb-1">Địa chỉ</div>
                    <div className="text-sm">The Origami S7.02, Vinhomes Grand Park, TP.HCM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/50">
              © 2025 XimiTech. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-white/50 hover:text-primary transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
