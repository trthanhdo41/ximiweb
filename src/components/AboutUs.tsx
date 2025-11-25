import { Award, Clock, Shield, Sparkles, Trophy, Star, Gem } from "lucide-react";

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
    title: "Đạt 50+ dự án",
    desc: "Hoàn thành hơn 50 dự án thành công, xây dựng uy tín trong ngành"
  }
];

const advantages = [
  {
    icon: Award,
    title: "Kỹ sư chuyên nghiệp",
    desc: "3+ năm kinh nghiệm, chuyên môn sâu về web và mobile app"
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
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Về chúng tôi
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            XimiTech - Giải pháp công nghệ toàn diện với hơn 3 năm kinh nghiệm
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Câu chuyện của tôi
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                XimiTech được thành lập năm 2022 bởi một kỹ sư phần mềm có đam mê với công nghệ. 
                Với kinh nghiệm 3+ năm trong lĩnh vực phát triển web, mobile app và AI, chúng tôi cam kết 
                mang đến những giải pháp công nghệ hiện đại và hiệu quả cho doanh nghiệp.
              </p>
              <p>
                Với hơn 50 dự án thành công và khách hàng tin tưởng, tôi cam kết mang đến chất 
                lượng tốt nhất với giá cả cạnh tranh. Phương châm của tôi:{" "}
                <span className="text-primary font-semibold">
                  "Chất lượng hơn số lượng, khách hàng là trung tâm"
                </span>.
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

