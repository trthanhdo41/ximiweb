import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import splashOrange from "@/assets/mockups/splash-orange.png";
import splashWhite from "@/assets/mockups/splash-white.png";
import loginWhite from "@/assets/mockups/login-white.png";
import loginOrange from "@/assets/mockups/login-orange.png";
import loginScreen from "@/assets/mockups/login-screen.png";
import homeScreen from "@/assets/mockups/home-screen.png";
import homeFront from "@/assets/mockups/home-front.png";
import homeAngle from "@/assets/mockups/home-angle.png";
import homeAngle2 from "@/assets/mockups/home-angle-2.png";
import homeAngle3 from "@/assets/mockups/home-angle-3.png";
import searchScreen from "@/assets/mockups/search-screen.png";
import pricingScreen from "@/assets/mockups/pricing-screen.png";
import pricingDetail from "@/assets/mockups/pricing-detail.png";
import pricingProcess from "@/assets/mockups/pricing-process.png";
import splashScreen from "@/assets/mockups/splash-screen.png";
import { Smartphone } from "lucide-react";

export const AppShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const screenshots = [
    {
      image: splashOrange,
      title: "Splash Screen",
      description: "Màn hình chào mừng",
    },
    {
      image: loginWhite,
      title: "Đăng nhập",
      description: "Bảo mật tối đa",
    },
    {
      image: homeScreen,
      title: "Trang chủ",
      description: "Giao diện thân thiện, dễ sử dụng",
    },
    {
      image: searchScreen,
      title: "Khám phá",
      description: "Tìm thiết bị nhanh chóng",
    },
    {
      image: pricingScreen,
      title: "Định giá AI",
      description: "Giá trị chính xác tức thì",
    },
    {
      image: pricingProcess,
      title: "Quy trình định giá",
      description: "4 bước đơn giản, minh bạch",
    },
    {
      image: pricingDetail,
      title: "Chi tiết định giá",
      description: "Thông tin chi tiết về thiết bị",
    },
    {
      image: homeFront,
      title: "Dashboard",
      description: "Quản lý thiết bị của bạn",
    },
    {
      image: homeAngle,
      title: "Giao diện góc nghiêng",
      description: "Thiết kế hiện đại",
    },
    {
      image: homeAngle2,
      title: "Màn hình chính",
      description: "Truy cập nhanh các tính năng",
    },
    {
      image: homeAngle3,
      title: "Thiết bị nổi bật",
      description: "Xem các thiết bị hot nhất",
    },
    {
      image: loginScreen,
      title: "Xác thực",
      description: "Đăng nhập an toàn",
    },
    {
      image: loginOrange,
      title: "Đăng ký",
      description: "Tạo tài khoản mới",
    },
    {
      image: splashWhite,
      title: "Loading",
      description: "Khởi động ứng dụng",
    },
    {
      image: splashScreen,
      title: "Welcome",
      description: "Chào mừng đến XimiTech",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center space-y-4 mb-12 md:mb-16">
          <ScrollReveal width="100%">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Smartphone className="h-4 w-4" />
              Khám phá ứng dụng
            </div>
          </ScrollReveal>
          
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Trải nghiệm" 
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
            />
            <WavyText 
              text="XimiTech App" 
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary"
            />
          </div>

          <div className="flex justify-center">
            <TextReveal 
              text="Giao diện hiện đại, thao tác đơn giản, mọi tính năng trong tầm tay"
              className="text-lg text-muted-foreground max-w-2xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative">
                    <div className="relative bg-card rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-500">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-[320px] md:h-[380px] lg:h-[400px] object-cover animate-float"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-center">{screenshot.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground text-center">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

