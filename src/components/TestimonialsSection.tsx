import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Nguyễn Minh Tuấn",
      role: "CEO Startup - TP.HCM",
      avatar: "NT",
      content: "Cần website cho startup, XimiTech bàn giao trong 5 ngày với chất lượng vượt mong đợi. Thiết kế hiện đại, responsive tốt, SEO chuẩn. Giá cả hợp lý, support nhiệt tình!",
      rating: 5,
      bgColor: "from-blue-500 to-cyan-500",
    },
    {
      name: "Trần Văn Khánh",
      role: "Sinh viên CNTT - Đà Nẵng",
      avatar: "TK",
      content: "Nhờ XimiTech làm đồ án tốt nghiệp app mobile với React Native. Code clean, document đầy đủ, hướng dẫn tận tình. Em bảo vệ được 9.5 điểm. Cảm ơn anh rất nhiều!",
      rating: 5,
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      name: "Lê Thị Hương",
      role: "Marketing Manager - Hà Nội",
      avatar: "LH",
      content: "Chatbot AI tích hợp Zalo OA giúp công ty tôi tự động chăm sóc khách 24/7. Giảm 70% thời gian phản hồi, tăng conversion. Đầu tư siêu đáng!",
      rating: 5,
      bgColor: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Khách hàng nói gì về <span className="text-primary">XimiTech</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-card p-5 md:p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-3 md:mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-5 md:mb-6 text-xs md:text-sm text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 md:h-12 md:w-12">
                  <AvatarFallback className={`bg-gradient-to-br ${testimonial.bgColor} text-white font-bold text-base md:text-lg`}>
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
