import { CheckCircle, Zap, Lock, Truck, Heart, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: CheckCircle,
      title: "Bàn giao nhanh",
      description: "Website 3-7 ngày, App 1-2 tuần, Chatbot 1-2 ngày. Cam kết đúng deadline, không kéo dài",
    },
    {
      icon: Zap,
      title: "Công nghệ hiện đại",
      description: "React, Next.js, React Native, Flutter, AI/ML. Luôn cập nhật công nghệ mới nhất",
    },
    {
      icon: Lock,
      title: "Bảo hành trọn đời",
      description: "Bảo hành 12 tháng, hỗ trợ sửa lỗi không giới hạn. Maintenance trọn đời với chi phí thấp",
    },
    {
      icon: Truck,
      title: "Giá cả hợp lý",
      description: "Báo giá minh bạch, không phí ẩn. Website từ 2tr, App từ 10tr, phù hợp mọi quy mô",
    },
    {
      icon: Heart,
      title: "Tận tâm với khách hàng",
      description: "Hỗ trợ 24/7, tư vấn nhiệt tình. Luôn lắng nghe và đáp ứng yêu cầu khách hàng",
    },
    {
      icon: Brain,
      title: "Tích hợp AI thông minh",
      description: "Chatbot AI, RAG system, automation. Tích hợp OpenAI, Claude vào sản phẩm của bạn",
    },
  ];

  return (
    <section id="features" className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-secondary/50 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,140,0,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,128,128,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Vì sao nên chọn{" "}
            <span className="text-primary">XimiTech?</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            6 lý do khiến khách hàng tin tưởng và lựa chọn XimiTech cho dự án của họ
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border bg-card p-5 md:p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="mb-3 md:mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="mb-2 text-base md:text-lg font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
