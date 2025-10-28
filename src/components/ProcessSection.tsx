import appSearchScreen from "@/assets/app-search-screen.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const steps = [
    {
      number: "01",
      title: "Tìm kiếm thiết bị",
      description: "Dễ dàng tìm kiếm và chọn thiết bị phù hợp",
    },
    {
      number: "02",
      title: "Đánh giá & Nhận báo giá",
      description: "AI đánh giá và đưa ra mức giá tức thì",
    },
    {
      number: "03",
      title: "Chụp ảnh thiết bị",
      description: "Chụp ảnh các góc của thiết bị để xác nhận",
    },
    {
      number: "04",
      title: "Nhận thiết bị hoặc Thanh toán",
      description: "Giao hàng nhanh hoặc thanh toán tức thì",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tại sao nên chọn <span className="text-primary">chúng tôi</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-xl hover:border-primary/50 hover:-translate-y-2">
                <div className="mb-4 text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className={`relative flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-2xl group-hover:blur-xl transition-all"></div>
            <img
              src={appSearchScreen}
              alt="Search Screen"
              className="relative h-[450px] w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
