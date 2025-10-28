import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Khách hàng",
      content: "Rentino giúp tôi tìm được chiếc iPhone phù hợp với giá tốt nhất. Quy trình rất nhanh chóng và minh bạch!",
      rating: 5,
    },
    {
      name: "Trần Thị B",
      role: "Khách hàng",
      content: "Dịch vụ tuyệt vời! AI định giá rất chính xác, giúp tôi an tâm khi giao dịch thiết bị cũ.",
      rating: 5,
    },
    {
      name: "Lê Văn C",
      role: "Khách hàng",
      content: "Đội ngũ hỗ trợ 24/7 rất nhiệt tình. Tôi đã giới thiệu Rentino cho rất nhiều bạn bè.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Khách hàng nói gì về <span className="text-primary">Rentino</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
