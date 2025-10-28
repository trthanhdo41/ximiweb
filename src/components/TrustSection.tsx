import { Award, TrendingUp, Shield, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { icon: TrendingUp, value: "1.000+", label: "Giao dịch mỗi ngày" },
    { icon: Award, value: "50+", label: "Thương hiệu uy tín" },
    { icon: Shield, value: "100%", label: "Bảo hành chính hãng" },
    { icon: Heart, value: "500K+", label: "Người dùng hài lòng" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Được tin tưởng bởi{" "}
            <span className="text-primary">các thương hiệu hàng đầu</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 grayscale opacity-60">
          <div className="text-4xl font-bold">Apple</div>
          <div className="text-4xl font-bold">Samsung</div>
          <div className="text-4xl font-bold">Google</div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center rounded-2xl border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="mb-2 text-4xl font-bold text-foreground">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
