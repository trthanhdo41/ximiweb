import { Globe, Smartphone, Bot, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GL } from "@/components/gl";
import { useState } from "react";

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovering, setHovering] = useState(false);
  const services = [
    {
      icon: Globe,
      title: "Thiết kế Website",
      description: "Website doanh nghiệp, bán hàng, landing page với thiết kế hiện đại, responsive và tối ưu SEO. Bàn giao trong 3-7 ngày",
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Phát triển ứng dụng Android & iOS với React Native, Flutter. Cross-platform, hiệu suất cao, tích hợp đầy đủ tính năng",
    },
    {
      icon: Bot,
      title: "Chatbot AI",
      description: "Chatbot AI thông minh với OpenAI, Claude. Tích hợp vào website, Zalo, Facebook Messenger. Tự động hóa chăm sóc khách hàng",
    },
    {
      icon: Code,
      title: "Đồ án CNTT",
      description: "Hỗ trợ làm đồ án tốt nghiệp, đồ án môn học CNTT. Code chất lượng, document đầy đủ, bảo hành đến khi bảo vệ xong",
    },
  ];

  return (
    <section id="services" className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Particle Wave Background */}
      <div className="absolute inset-0 z-0">
        <GL hovering={hovering} />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div ref={ref} className={`text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Dịch vụ IT <span className="text-primary">chuyên nghiệp</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
            Giải pháp công nghệ toàn diện từ Website, App Mobile, AI đến Đồ án CNTT
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-lg transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
