import { ShoppingBag, Users, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: ShoppingBag,
      title: "Mua, bán, trao đổi",
      description: "Thông tin chi tiết giao dịch mua bán, cho thuê hoàn toàn minh bạch",
    },
    {
      icon: Users,
      title: "Cộng đồng sôi động",
      description: "Kết nối với hàng ngàn người dùng khác",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Hỗ trợ nhanh chóng, nhiệt tình giải đáp mọi thắc mắc",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCAzNGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Trải nghiệm dịch vụ toàn diện
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-lg transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
