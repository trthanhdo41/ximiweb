import React from 'react';
import { HiPlay, HiGlobeAlt, HiDevicePhoneMobile, HiCpuChip, HiShoppingBag } from 'react-icons/hi2';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: HiGlobeAlt,
      title: 'Thiết kế Website Chuyên Nghiệp',
      description: 'Website doanh nghiệp, bán hàng, tin tức với thiết kế hiện đại, responsive và tối ưu SEO',
      features: ['Thiết kế responsive', 'Tối ưu SEO', 'Giao diện admin dễ sử dụng']
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Web App & Mobile App',
      description: 'Ứng dụng web và mobile với tính năng hiện đại, cross-platform và hiệu suất cao',
      features: ['Cross-platform', 'Push notification', 'Tích hợp thanh toán']
    },
    {
      icon: HiCpuChip,
      title: 'Giải pháp AI Thông minh',
      description: 'Chatbot AI, RAG system, automation với công nghệ AI tiên tiến cho doanh nghiệp',
      features: ['AI Chatbot đa nền tảng', 'RAG System thông minh', 'Process Automation']
    },
    {
      icon: HiShoppingBag,
      title: 'Website Bán Hàng & E-commerce',
      description: 'Website thương mại điện tử với tính năng thanh toán, quản lý đơn hàng và khách hàng',
      features: ['Tích hợp thanh toán online', 'Quản lý đơn hàng tự động', 'Hệ thống khuyến mãi']
    }
  ];

  return (
    <section id="solutions" className="solutions section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Dịch vụ thiết kế website chuyên nghiệp
          </h2>
          <p className="section-subtitle">
            XimiWeb mang đến giải pháp thiết kế website toàn diện, giúp doanh nghiệp có website chuyên nghiệp và hiện đại
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="solution-card" data-aos="flip-left" data-aos-delay={200 + index * 150}>
                <div className="solution-header">
                  <div className="solution-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{solution.title}</h3>
                </div>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

        <div className="video-demo" data-aos="zoom-in" data-aos-delay="800">
          <h3>Xem các dự án website của chúng tôi</h3>
          <div className="video-placeholder">
            <div className="play-button">
              <HiPlay size={80} className="play-icon" />
            </div>
            <p>Video Demo: Các dự án website đã hoàn thành</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;