import { Star, Users, ThumbsUp, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

export const StatsHighlight = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const count1 = useCountUp(205, 2000, isVisible);
  const count2 = useCountUp(3, 2000, isVisible);
  const count3 = useCountUp(99, 2000, isVisible);
  
  const highlights = [
    {
      icon: Users,
      value: `${Math.round(count1)}+`,
      unit: "",
      label: "Dự án thành công",
      color: "from-primary to-cyan-600",
    },
    {
      icon: Clock,
      value: `${Math.round(count2)}+`,
      unit: " năm",
      label: "Kinh nghiệm",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: ThumbsUp,
      value: `${Math.round(count3)}%`,
      unit: "",
      label: "Khách hàng hài lòng",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Star,
      value: "24/7",
      unit: "",
      label: "Hỗ trợ tận tâm",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-cyan-500 to-primary overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Con số <span className="text-white/90">ấn tượng</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            XimiTech mang đến giải pháp công nghệ chuyên nghiệp, hiện đại và uy tín cho doanh nghiệp Việt Nam
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/20 transition-all"></div>
              
              {/* Card */}
              <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${highlight.color} mb-4 shadow-lg`}>
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    {highlight.value}
                  </span>
                  {highlight.unit && (
                    <span className="text-3xl text-white/80">{highlight.unit}</span>
                  )}
                </div>
                
                {/* Label */}
                <p className="text-white/90 font-medium">{highlight.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

