import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

export const PricingTableNew = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const pricingPlans = [
    {
      badge: "Cơ Bản",
      badgeColor: "bg-cyan-500",
      name: "Landing Page",
      originalPrice: "5.000.000",
      price: "3.000.000",
      baseFeatures: [
        "Responsive design trên mọi thiết bị",
        "SEO cơ bản, tối ưu Google",
        "Form liên hệ, đăng ký",
        "Thời gian bàn giao: 3-5 ngày",
      ],
      extraFeatures: [
        "Tặng hosting 1 năm",
        "Tên miền .com miễn phí",
        "SSL certificate bảo mật",
        "Hỗ trợ kỹ thuật 24/7",
        "Bảo hành 12 tháng",
      ],
    },
    {
      badge: "Phổ biến",
      badgeColor: "bg-blue-600",
      name: "Website Doanh Nghiệp",
      originalPrice: "15.000.000",
      price: "10.000.000",
      popular: true,
      baseFeatures: [
        "UI/UX chuyên nghiệp, hiện đại",
        "SEO nâng cao, chuẩn Google",
        "CMS quản trị dễ dàng",
        "Thời gian bàn giao: 1-2 tuần",
      ],
      extraFeatures: [
        "Tích hợp Google Analytics",
        "Tối ưu tốc độ tải trang",
        "Responsive hoàn hảo",
        "Tặng 5 bài viết SEO",
        "Bảo trì 1 năm miễn phí",
        "Đào tạo sử dụng CMS",
        "Backup tự động hàng ngày",
      ],
    },
    {
      badge: "Cao Cấp",
      badgeColor: "bg-purple-600",
      name: "Website TMĐT",
      originalPrice: "30.000.000",
      price: "25.000.000",
      baseFeatures: [
        "Giao diện độc quyền, chuyên nghiệp",
        "Giỏ hàng, thanh toán online",
        "Quản lý sản phẩm, đơn hàng",
        "Thời gian bàn giao: 3-4 tuần",
      ],
      extraFeatures: [
        "Tích hợp VNPay, Momo, Stripe",
        "Schema marketing, Rich Snippets",
        "Đa ngôn ngữ, đa tiền tệ",
        "Email marketing automation",
        "Tặng 10 bài viết SEO chuyên sâu",
        "Tích hợp vận chuyển (GHN, GHTK)",
        "Dashboard thống kê chi tiết",
        "Bảo hành 12 tháng + support",
      ],
    },
    {
      badge: "Cơ Bản",
      badgeColor: "bg-green-500",
      name: "Mobile App",
      originalPrice: "25.000.000",
      price: "15.000.000",
      baseFeatures: [
        "React Native hoặc Flutter",
        "iOS & Android cross-platform",
        "UI/UX hiện đại, mượt mà",
        "Thời gian bàn giao: 1-2 tháng",
      ],
      extraFeatures: [
        "Backend API đầy đủ",
        "Push notification",
        "Tích hợp Firebase",
        "In-app purchase (nếu cần)",
        "Upload lên App Store & Play Store",
        "Bảo hành 12 tháng",
        "Source code đầy đủ",
      ],
    },
    {
      badge: "Phổ biến",
      badgeColor: "bg-emerald-600",
      name: "Chatbot AI",
      originalPrice: "5.000.000",
      price: "3.000.000",
      baseFeatures: [
        "Tích hợp OpenAI/Claude/Gemini",
        "Tự động trả lời 24/7",
        "Training với dữ liệu riêng",
        "Thời gian bàn giao: 3-7 ngày",
      ],
      extraFeatures: [
        "Tích hợp vào Website/Zalo/Facebook",
        "Dashboard quản lý hội thoại",
        "Phân tích sentiment khách hàng",
        "Multi-language support",
        "Webhook integration",
        "Bảo hành 12 tháng",
      ],
    },
    {
      badge: "Cơ Bản",
      badgeColor: "bg-orange-500",
      name: "Đồ Án CNTT",
      priceRange: "2 - 5",
      baseFeatures: [
        "Tư vấn đề tài phù hợp",
        "Code chất lượng, có comment",
        "Báo cáo đầy đủ, chuyên nghiệp",
        "Thời gian: 1-3 tuần",
      ],
      extraFeatures: [
        "Slide thuyết trình PowerPoint",
        "Video demo sản phẩm",
        "Hướng dẫn cài đặt chi tiết",
        "Source code đầy đủ",
        "Hỗ trợ đến khi bảo vệ xong",
        "Sửa đổi theo góp ý giáo viên",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center space-y-4 mb-12 md:mb-16">
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Bảng Giá" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            />
            <WavyText 
              text="Dịch Vụ" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
            />
          </div>
          
          <div className="flex justify-center">
            <TextReveal 
              text="Giá cả minh bạch, phù hợp với mọi nhu cầu và ngân sách"
              className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className="relative">
                <div className={`${plan.badgeColor} text-white px-6 py-3 rounded-br-3xl inline-block font-bold text-lg`}>
                  {plan.badge}
                </div>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold">
                    Phổ biến nhất
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col h-full">
                {/* Service Name */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.priceRange ? (
                    // Price range format (e.g., "2 - 5 triệu")
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.priceRange}</span>
                      <span className="text-xl text-gray-600 ml-2">triệu</span>
                    </div>
                  ) : (
                    // Original price with strikethrough
                    <>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-gray-400 line-through text-lg">{plan.originalPrice}đ</span>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-xl text-gray-600 ml-1">đ</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Description */}
                {index > 0 && (
                  <div className="mb-6 text-center">
                    <p className="text-sm text-gray-600">
                      Bao gồm gói <span className="font-semibold text-gray-900">{pricingPlans[index - 1].badge}</span> và cộng thêm:
                    </p>
                  </div>
                )}

                {/* Base Features */}
                <ul className="space-y-3 mb-4">
                  {plan.baseFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Extra Features (Expandable) */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards.includes(index) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-3 mb-4">
                    {plan.extraFeatures.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-700 transform transition-all duration-300"
                        style={{ 
                          transitionDelay: expandedCards.includes(index) ? `${idx * 50}ms` : '0ms',
                          transform: expandedCards.includes(index) ? 'translateY(0)' : 'translateY(-10px)'
                        }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium mb-4 flex items-center justify-center gap-1 transition-all hover:gap-2"
                >
                  {expandedCards.includes(index) ? 'Thu gọn' : 'Xem thêm'}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedCards.includes(index) ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button 
                    className={`w-full h-12 text-base font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-purple-500 hover:opacity-90' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
                  >
                    Xem chi tiết
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4 text-lg">
            Cần tư vấn chi tiết hoặc báo giá dự án riêng?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 h-14 px-8 text-base"
            onClick={() => window.open('https://zalo.me/0888889805', '_blank')}
          >
            Liên hệ tư vấn miễn phí - Zalo: 0888889805
          </Button>
        </div>
      </div>
    </section>
  );
};
