import { Award, Clock, Shield, Sparkles, Trophy, Star, Gem } from "lucide-react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

const timeline = [
  {
    year: "2022",
    title: "Thành lập XimiTech",
    desc: "Bắt đầu với đam mê công nghệ, chuyên cung cấp giải pháp công nghệ toàn diện"
  },
  {
    year: "2023",
    title: "Mở rộng dịch vụ",
    desc: "Phát triển thêm mobile app và AI solutions, nâng cao kỹ năng chuyên môn"
  },
  {
    year: "2025",
    title: "Đạt 200+ dự án",
    desc: "Hoàn thành hơn 200 dự án thành công, xây dựng uy tín trong ngành"
  }
];

const advantages = [
  {
    icon: Award,
    title: "Kỹ sư chuyên nghiệp",
    desc: "4+ năm kinh nghiệm, chuyên môn sâu về web và mobile app"
  },
  {
    icon: Clock,
    title: "Bàn giao nhanh",
    desc: "Website 3-7 ngày, App 2-4 tuần, cam kết đúng hẹn"
  },
  {
    icon: Shield,
    title: "Bảo hành 12 tháng",
    desc: "Hỗ trợ kỹ thuật miễn phí, sửa lỗi không giới hạn"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal width="100%">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              About Us
            </div>
          </ScrollReveal>
          
          <div className="flex justify-center">
            <WavyText 
              text="Về chúng tôi" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 justify-center"
            />
          </div>

          <div className="flex justify-center">
            <TextReveal 
              text="XimiTech - Giải pháp công nghệ toàn diện với hơn 4 năm kinh nghiệm"
              className="text-lg text-gray-400 max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <ScrollReveal delay={0.5}>
            <div className="relative group w-full max-w-xs">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-4 group-hover:border-primary/60 transition-all">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                  <img
                    src="/profile.png"
                    alt="Trần Thanh Độ - Founder XimiTech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-bold text-white mb-1">Trần Thanh Độ</h4>
                  <p className="text-primary font-semibold mb-3">Founder & CEO</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span>4+ năm</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span>200+ dự án</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Câu chuyện của tôi
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Xin chào, tôi là <span className="text-primary font-semibold">Trần Thanh Độ</span> - 
                Founder & CEO của XimiTech. Tôi tốt nghiệp ngành Công nghệ Thông tin và có đam mê mãnh liệt 
                với lập trình và công nghệ từ những ngày còn ngồi trên ghế nhà trường.
              </p>
              <p>
                XimiTech được thành lập năm 2022 với sứ mệnh mang đến những giải pháp công nghệ 
                hiện đại, chất lượng cao cho doanh nghiệp Việt Nam. Với kinh nghiệm 4+ năm trong lĩnh vực 
                phát triển web, mobile app và AI, tôi đã hoàn thành hơn 200 dự án thành công cho khách hàng 
                từ cá nhân đến doanh nghiệp.
              </p>
              <p>
                Phương châm làm việc của tôi:{" "}
                <span className="text-primary font-semibold">
                  "Chất lượng hơn số lượng, khách hàng là trung tâm"
                </span>. 
                Tôi tin rằng mỗi dự án không chỉ là code, mà là giải pháp giúp khách hàng phát triển 
                và thành công trong kỷ nguyên số.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-transparent hover:border-primary transition-all group"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
                <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all">
                  <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-background to-secondary/50 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

