import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

interface Word {
  text: string;
  size: string;
  color: string;
  x: string;
  y: string;
  delay: number;
  vertical?: boolean;
  neon?: boolean;
}

export const WordCloudSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const words: Word[] = [
    // Center - Largest white words with glow
    { text: "WEBSITE", size: "text-4xl md:text-7xl lg:text-8xl", color: "text-white", x: "30%", y: "40%", delay: 0 },
    { text: "MOBILE APP", size: "text-3xl md:text-6xl lg:text-7xl", color: "text-white", x: "32%", y: "56%", delay: 100 },
    
    // Large cyan words with strong neon
    { text: "PHÁT TRIỂN", size: "text-2xl md:text-5xl lg:text-6xl", color: "text-cyan-400", x: "60%", y: "35%", delay: 200, neon: true },
    { text: "THIẾT KẾ", size: "text-2xl md:text-5xl lg:text-6xl", color: "text-cyan-400", x: "42%", y: "75%", delay: 250, neon: true },
    { text: "XIMITECH.VN", size: "text-xl md:text-4xl lg:text-5xl", color: "text-cyan-400", x: "18%", y: "22%", delay: 300, neon: true },
    { text: "GIẢI PHÁP", size: "text-xl md:text-4xl lg:text-5xl", color: "text-cyan-400", x: "18%", y: "32%", delay: 350, neon: true },
    
    // Medium cyan words
    { text: "WEB APP", size: "text-lg md:text-3xl lg:text-4xl", color: "text-cyan-400", x: "48%", y: "18%", delay: 400, neon: true },
    { text: "REACT", size: "text-lg md:text-3xl lg:text-4xl", color: "text-cyan-400", x: "70%", y: "55%", delay: 450, neon: true },
    { text: "NEXT.JS", size: "text-lg md:text-3xl lg:text-4xl", color: "text-cyan-400", x: "72%", y: "70%", delay: 500, neon: true },
    
    // White words - medium (hide some on mobile)
    { text: "TYPESCRIPT", size: "hidden md:block text-2xl lg:text-3xl", color: "text-white", x: "15%", y: "15%", delay: 550 },
    { text: "NODE.JS", size: "text-base md:text-2xl lg:text-3xl", color: "text-white", x: "18%", y: "50%", delay: 600 },
    { text: "TAILWIND", size: "hidden md:block text-2xl lg:text-3xl", color: "text-white", x: "65%", y: "12%", delay: 650 },
    { text: "UI/UX", size: "text-base md:text-2xl lg:text-3xl", color: "text-white", x: "78%", y: "22%", delay: 700 },
    { text: "DATABASE", size: "text-sm md:text-xl lg:text-2xl", color: "text-white", x: "12%", y: "38%", delay: 750 },
    { text: "BACKEND", size: "text-sm md:text-xl lg:text-2xl", color: "text-white", x: "10%", y: "62%", delay: 800 },
    { text: "FRONTEND", size: "text-sm md:text-xl lg:text-2xl", color: "text-white", x: "15%", y: "75%", delay: 850 },
    { text: "AUTOMATION", size: "hidden md:block text-xl lg:text-2xl", color: "text-white", x: "22%", y: "68%", delay: 900 },
    { text: "CLOUD", size: "text-sm md:text-xl lg:text-2xl", color: "text-white", x: "82%", y: "48%", delay: 950 },
    
    // Small white words (hide most on mobile)
    { text: "AI", size: "text-xs md:text-lg lg:text-xl", color: "text-white", x: "25%", y: "12%", delay: 1000 },
    { text: "HOSTING", size: "hidden md:block text-lg lg:text-xl", color: "text-white", x: "22%", y: "85%", delay: 1100 },
    { text: "API", size: "text-xs md:text-lg lg:text-xl", color: "text-white", x: "85%", y: "62%", delay: 1200 },
    { text: "HỖ TRỢ 24/7", size: "hidden md:block text-lg lg:text-xl", color: "text-white", x: "72%", y: "82%", delay: 1250 },
    
    // Small supporting words (hide on mobile)
    { text: "HIỆN ĐẠI", size: "hidden md:block text-base lg:text-lg", color: "text-white/80", x: "52%", y: "8%", delay: 1300 },
    { text: "DOCKER", size: "hidden md:block text-base lg:text-lg", color: "text-white/80", x: "88%", y: "32%", delay: 1400 },
    { text: "SEO", size: "hidden md:block text-base lg:text-lg", color: "text-white/80", x: "82%", y: "88%", delay: 1500 },
    
    // Vertical text on the right (hide on mobile)
    { text: "RESPONSIVE", size: "hidden md:block text-lg lg:text-xl", color: "text-white", x: "92%", y: "35%", delay: 1800, vertical: true },
    { text: "SECURITY", size: "hidden md:block text-lg lg:text-xl", color: "text-white", x: "95%", y: "45%", delay: 1850, vertical: true },
  ];

  const getTextShadow = (word: Word) => {
    if (word.neon) {
      // Strong cyan neon for cyan words
      return '0 0 15px rgba(34, 211, 238, 1), 0 0 30px rgba(34, 211, 238, 0.8), 0 0 45px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.4)';
    }
    // Bright white glow for white words - no black outline
    return '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)';
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#0a1628] overflow-hidden">
      {/* Dark Navy Background - matching the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b33] to-[#0a1628]"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f12_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -15px); }
          50% { transform: translate(-5px, -25px); }
          75% { transform: translate(-15px, -10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-12px, 18px); }
          50% { transform: translate(8px, 22px); }
          75% { transform: translate(15px, 8px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15px, 12px); }
          50% { transform: translate(-10px, 20px); }
          75% { transform: translate(8px, -15px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-8px, -20px); }
          50% { transform: translate(12px, -10px); }
          75% { transform: translate(-15px, 15px); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(18px, -8px); }
          50% { transform: translate(-12px, 15px); }
          75% { transform: translate(10px, 20px); }
        }
        @keyframes floatVertical {
          0%, 100% { transform: rotate(-90deg) translate(0, 0); }
          25% { transform: rotate(-90deg) translate(10px, -15px); }
          50% { transform: rotate(-90deg) translate(-5px, -25px); }
          75% { transform: rotate(-90deg) translate(-15px, -10px); }
        }
        .animate-float-1 { animation: float1 12s ease-in-out infinite; }
        .animate-float-2 { animation: float2 15s ease-in-out infinite; }
        .animate-float-3 { animation: float3 18s ease-in-out infinite; }
        .animate-float-4 { animation: float4 14s ease-in-out infinite; }
        .animate-float-5 { animation: float5 16s ease-in-out infinite; }
        .animate-float-vertical { animation: floatVertical 13s ease-in-out infinite; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        {/* Word Cloud Container */}
        <div ref={ref} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mx-auto max-w-7xl">
          {words.map((word, index) => {
            // Assign different animation classes to different words
            const animationClass = word.vertical 
              ? 'animate-float-vertical'
              : `animate-float-${(index % 5) + 1}`;
            
            return (
              <div
                key={index}
                className={`absolute cursor-pointer font-bold tracking-tight ${word.size} ${word.color} ${animationClass} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                } ${hoveredWord === word.text ? 'scale-110' : ''}`}
                style={{
                  left: word.x,
                  top: word.y,
                  transitionDelay: isVisible ? `${word.delay}ms` : '0ms',
                  transformOrigin: 'center center',
                  whiteSpace: 'nowrap',
                  textShadow: hoveredWord === word.text 
                    ? '0 0 20px rgba(34, 211, 238, 1), 0 0 40px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.6)'
                    : getTextShadow(word),
                  letterSpacing: word.size.includes('8xl') || word.size.includes('7xl') ? '-0.02em' : '0',
                }}
                onMouseEnter={() => setHoveredWord(word.text)}
                onMouseLeave={() => setHoveredWord(null)}
              >
                {word.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
