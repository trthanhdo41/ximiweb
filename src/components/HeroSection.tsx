import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";
import { Smartphone, Users, Package, Headphones, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const stats = [
    { icon: Users, value: "50K+", label: "Người dùng tin tưởng" },
    { icon: Package, value: "15K+", label: "Thiết bị cho thuê" },
    { icon: Smartphone, value: "1K+", label: "Thiết bị mỗi ngày" },
    { icon: Headphones, value: "24/7", label: "Hỗ trợ khách hàng" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div ref={ref} className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Package className="h-4 w-4" />
              Nền tảng cho thuê thiết bị #1 Việt Nam
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Cho thuê thiết bị công nghệ -{" "}
              <span className="text-primary">Tín thang, Phù hợp, Tiện lợi</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
              Rentino sử dụng AI để định giá chính xác đồ cũ. Trao đổi, nâng cấp và kiếm tiền từ những món đồ không còn sử dụng.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-base font-semibold h-14 px-8 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                Tải app ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-8 hover:bg-primary/10 transition-colors">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-orange-500/30 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all"></div>
              <img
                src={appMockup}
                alt="Rentino App Mockup"
                className="relative h-[600px] w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
