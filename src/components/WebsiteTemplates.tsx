import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  LayoutGrid, 
  ShoppingBag, 
  Building2, 
  Home, 
  Sofa, 
  Hotel, 
  UtensilsCrossed, 
  Plane, 
  Car, 
  GraduationCap, 
  Newspaper,
  FileText,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

export const WebsiteTemplates = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [countdown, setCountdown] = useState(3);

  const categories = [
    { name: "Tất cả", icon: LayoutGrid, color: "from-gray-500 to-gray-600", link: "https://ximitech.vn" },
    { name: "Bán hàng", icon: ShoppingBag, color: "from-orange-500 to-red-500", link: "https://www.allbirds.com/" },
    { name: "Công ty", icon: Building2, color: "from-blue-500 to-cyan-500", link: "https://www.stripe.com/" },
    { name: "Bất động sản", icon: Home, color: "from-green-500 to-emerald-500", link: "https://www.redfin.com/" },
    { name: "Nội thất", icon: Sofa, color: "from-amber-500 to-orange-500", link: "https://www.westelm.com/" },
    { name: "Khách sạn", icon: Hotel, color: "from-purple-500 to-pink-500", link: "https://www.acehotel.com/" },
    { name: "Nhà hàng", icon: UtensilsCrossed, color: "from-red-500 to-rose-500", link: "https://www.sweetgreen.com/" },
    { name: "Du lịch", icon: Plane, color: "from-sky-500 to-blue-500", link: "https://www.expedia.com/" },
    { name: "Ôtô - Xe máy", icon: Car, color: "from-slate-500 to-gray-600", link: "https://www.rivian.com/" },
    { name: "Giáo dục", icon: GraduationCap, color: "from-indigo-500 to-purple-500", link: "https://www.udemy.com/" },
    { name: "Tin tức", icon: Newspaper, color: "from-cyan-500 to-teal-500", link: "https://www.theverge.com/" },
    { name: "Landing Page", icon: FileText, color: "from-rose-500 to-pink-500", link: "https://www.notion.so/" },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center space-y-4 mb-12 md:mb-16">
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Kho giao diện" 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
            />
            <WavyText 
              text="Website" 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary"
            />
          </div>
          
          <div className="flex justify-center">
            <TextReveal 
              text="Các mẫu mới nhất theo xu hướng thiết kế hiện đại"
              className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category.name;
            const isAll = category.name === "Tất cả";
            
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category.name);
                  if (category.link) {
                    setIsRedirecting(true);
                    setRedirectUrl(category.link);
                    setCountdown(3);
                    
                    // Countdown timer
                    let count = 3;
                    const timer = setInterval(() => {
                      count--;
                      setCountdown(count);
                      if (count === 0) {
                        clearInterval(timer);
                        window.open(category.link, '_blank');
                        setIsRedirecting(false);
                      }
                    }, 1000);
                  }
                }}
                className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Card */}
                <div className={`relative rounded-2xl p-6 md:p-8 text-center transition-all duration-300 ${
                  isSelected 
                    ? `bg-gradient-to-br ${category.color} shadow-2xl scale-105` 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105'
                }`}>
                  {/* Icon */}
                  <div className={`inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl mb-3 md:mb-4 transition-all ${
                    isSelected 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-50'
                  }`}>
                    <category.icon className={`h-6 w-6 md:h-8 md:w-8 transition-colors ${
                      isSelected 
                        ? 'text-white' 
                        : 'text-gray-600 group-hover:text-gray-800'
                    }`} strokeWidth={2} />
                  </div>
                  
                  {/* Label */}
                  <p className={`font-semibold text-sm md:text-base transition-colors ${
                    isSelected 
                      ? 'text-white' 
                      : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {category.name}
                  </p>

                  {/* Selected indicator */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  )}

                  {/* Shine effect on hover */}
                  {!isSelected && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Redirect Popup */}
        {isRedirecting && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-4 shadow-2xl animate-in zoom-in duration-300">
              <div className="text-center">
                {/* Loading Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Loader2 className="h-10 w-10 text-primary animate-spin" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Đang chuyển hướng...
                </h3>
                
                {/* Countdown */}
                <div className="text-6xl font-bold text-primary mb-4">
                  {countdown}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Bạn sẽ được chuyển đến trang web mẫu
                </p>
                
                {/* URL Preview */}
                <div className="bg-gray-100 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-500 truncate">
                    {redirectUrl}
                  </p>
                </div>
                
                {/* Cancel Button */}
                <button
                  onClick={() => setIsRedirecting(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4">
            Không tìm thấy mẫu phù hợp? Chúng tôi có thể thiết kế riêng cho bạn!
          </p>
          <button
            onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Tư vấn thiết kế riêng
          </button>
        </div>
      </div>
    </section>
  );
};
