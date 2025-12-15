import { Users, Award, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

export const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const count1 = useCountUp(205, 2000, isVisible);
  const count2 = useCountUp(200, 2000, isVisible);
  const count3 = useCountUp(4, 2000, isVisible);
  const count4 = useCountUp(99, 2000, isVisible);
  
  const achievements = [
    {
      icon: Users,
      value: `${Math.round(count1)}+`,
      label: "Dự án hoàn thành",
    },
    {
      icon: Award,
      value: `${Math.round(count2)}+`,
      label: "Khách hàng tin tưởng",
    },
    {
      icon: Clock,
      value: `${Math.round(count3)}+`,
      label: "Năm kinh nghiệm",
    },
    {
      icon: Globe,
      value: `${Math.round(count4)}%`,
      label: "Khách hàng hài lòng",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            <span className="text-primary">Thành tựu</span> và niềm tự hào
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Chúng tôi tự hào đồng hành trên con đường thành công của các thương hiệu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card with gradient background */}
              <div className="relative rounded-2xl bg-gradient-to-br from-primary via-cyan-500 to-blue-600 p-8 md:p-10 text-center hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm mb-4 md:mb-6 group-hover:bg-white/30 transition-all">
                    <achievement.icon className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-3 md:mb-4">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white block">
                      {achievement.value}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <p className="text-white/95 font-medium text-sm md:text-base">
                    {achievement.label}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
