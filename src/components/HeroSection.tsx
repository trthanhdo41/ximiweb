import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";
import { Smartphone, Users, Package, Headphones } from "lucide-react";

export const HeroSection = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Người dùng tin tưởng" },
    { icon: Package, value: "15K+", label: "Thiết bị cho thuê" },
    { icon: Smartphone, value: "1K+", label: "Thiết bị mỗi ngày" },
    { icon: Headphones, value: "24/7", label: "Hỗ trợ khách hàng" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
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
              <Button size="lg" className="text-base font-semibold h-12 px-8">
                Tải app ngay
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold h-12 px-8">
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

          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl"></div>
              <img
                src={appMockup}
                alt="Rentino App Mockup"
                className="relative h-[600px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
