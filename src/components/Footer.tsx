import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoWhite from "@/assets/logo-white.png";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    company: {
      title: "Công ty",
      links: ["Về chúng tôi", "Tuyển dụng", "Liên hệ"],
    },
    product: {
      title: "Sản phẩm",
      links: ["Tính năng", "Bảo hành", "Hỗ trợ"],
    },
    category: {
      title: "Danh mục",
      links: ["Điện thoại", "Máy tính bảng", "Laptop"],
    },
    policies: {
      title: "Chính sách",
      links: ["Điều khoản sử dụng", "Chính sách bảo mật"],
    },
  };

  return (
    <footer id="contact" className="bg-[hsl(220_40%_10%)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <img src={logoWhite} alt="Rentino" className="h-12 w-auto" />
            <p className="text-white/70 max-w-sm">
              Nền tảng cho thuê thiết bị công nghệ hàng đầu Việt Nam. Tín thang, Phù hợp, Tiện lợi.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="space-y-2 md:space-y-0 md:flex md:gap-4 text-center md:text-left">
              <p className="text-white/70 text-sm">
                © 2025 Rentino. All rights reserved.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto max-w-md">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="secondary" className="font-semibold">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
