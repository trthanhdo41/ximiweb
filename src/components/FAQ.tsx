import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

const faqs = [
  {
    question: "Bạn có làm app mobile không? Công nghệ gì?",
    answer: "Có! Chúng tôi phát triển app Android & iOS với React Native và Flutter. Cross-platform, hiệu suất cao, tích hợp được các tính năng như AI, thanh toán, realtime... Deploy lên App Store & Google Play."
  },
  {
    question: "Có làm chatbot AI không? Tích hợp được những gì?",
    answer: "Có! Chúng tôi chuyên làm chatbot AI với OpenAI, Claude, custom training. Tích hợp vào website, Zalo, Facebook Messenger, Telegram. Có thể trả lời tự động, RAG system, phân tích dữ liệu khách hàng."
  },
  {
    question: "Làm đồ án CNTT có đảm bảo chất lượng không?",
    answer: "Đảm bảo 100%! Chúng tôi có kinh nghiệm làm đồ án tốt nghiệp, đồ án môn học các cấp. Code clean, có document đầy đủ, hướng dẫn demo, bảo vệ. Bảo hành đến khi bạn bảo vệ xong."
  },
  {
    question: "Thời gian hoàn thành dự án bao lâu?",
    answer: "Website: 3-10 ngày | App Mobile: 1-2 tuần | Chatbot AI: 1-2 ngày | Đồ án CNTT: 1-2 tuần. Tùy độ phức tạp. Chúng tôi cam kết bàn giao đúng hẹn."
  },
  {
    question: "Có hỗ trợ sau bàn giao không?",
    answer: "Có! Bảo hành 12 tháng cho tất cả dự án. Hỗ trợ sửa lỗi, cập nhật tính năng miễn phí. Hướng dẫn sử dụng, training cho team bạn. Hotline 24/7 qua Zalo."
  },
  {
    question: "Công nghệ sử dụng có hiện đại không?",
    answer: "Chúng tôi luôn dùng công nghệ mới nhất: React, Next.js, Node.js, Python, AI (OpenAI, Claude), Cloud (AWS, GCP), Docker, CI/CD... Đảm bảo code chất lượng, scalable, bảo mật cao."
  },
  {
    question: "Giá cả như thế nào? Có rẻ không?",
    answer: "Giá cạnh tranh: Website từ 2-10 triệu, App từ 10-50 triệu, Chatbot từ 3-15 triệu, Đồ án từ 2-10 triệu. Chúng tôi cam kết chất lượng tốt nhất trong tầm giá. Liên hệ để nhận báo giá chi tiết!"
  },
  {
    question: "Làm việc online hay offline?",
    answer: "Cả hai! Chúng tôi làm việc online qua Zalo/Meet để tiện lợi. Nếu bạn ở TP.HCM, có thể gặp trực tiếp tại 66 Đường 39, Hiệp Bình Phước, TP. Thủ Đức. Linh hoạt theo nhu cầu của bạn."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal width="100%">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
          </ScrollReveal>
          
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Câu hỏi" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            />
            <WavyText 
              text="thường gặp" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            />
          </div>

          <div className="flex justify-center">
            <TextReveal 
              text="Giải đáp những thắc mắc phổ biến của khách hàng"
              className="text-lg text-gray-400 max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-primary/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Còn câu hỏi khác?</p>
          <a
            href="https://zalo.me/0888889805"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Liên hệ qua Zalo
          </a>
        </div>
      </div>
    </section>
  );
};

