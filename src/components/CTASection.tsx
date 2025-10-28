import { Button } from "@/components/ui/button";
import { Apple, Play, Sparkles } from "lucide-react";
import appLoginScreen from "@/assets/app-login-screen.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTQwIDQwaDQwdjQwSDQwVjQweiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div ref={ref} className={`space-y-6 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Ưu đãi đặc biệt
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Flash Sale & Ưu Đãi Deal hằng ngày
            </h2>
            <p className="text-lg text-white/90 max-w-xl">
              Đừng bỏ lỡ những ưu đãi hấp dẫn mỗi ngày chỉ trên ứng dụng Rentino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-6 text-base font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-6 text-base font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/30 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all"></div>
              <img
                src={appLoginScreen}
                alt="Rentino App"
                className="relative h-[500px] w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
