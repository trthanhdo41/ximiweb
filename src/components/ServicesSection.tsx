import { ShoppingBag, Users, Headphones } from "lucide-react";

export const ServicesSection = () => {
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent via-accent/90 to-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Trải nghiệm dịch vụ toàn diện
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-lg transition-all hover:bg-white/20 hover:shadow-xl"
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
