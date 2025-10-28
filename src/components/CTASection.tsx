import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-white">
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
                className="h-14 px-6 text-base font-semibold"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-6 text-base font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-[3rem] blur-3xl"></div>
              <img
                src={appMockup}
                alt="Rentino App"
                className="relative h-[500px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
