import React from 'react';
import { HiCog6Tooth, HiBolt, HiAcademicCap, HiRocketLaunch, HiMagnifyingGlass } from 'react-icons/hi2';
import Counter from './Counter';
import './Process.css';

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Tư vấn & Phân tích',
      description: 'Chúng tôi tìm hiểu nhu cầu, phân tích quy trình CSKH hiện tại của bạn',
      icon: HiMagnifyingGlass,
      duration: '1-2 ngày'
    },
    {
      step: '02', 
      title: 'Thiết kế giải pháp',
      description: 'Xây dựng kịch bản chatbot phù hợp với ngành nghề và đặc thù doanh nghiệp',
      icon: HiCog6Tooth,
      duration: '3-5 ngày'
    },
    {
      step: '03',
      title: 'Triển khai & Tích hợp',
      description: 'Cài đặt và tích hợp XimiWeb vào các kênh truyền thông của bạn',
      icon: HiBolt,
      duration: '2-3 ngày'
    },
    {
      step: '04',
      title: 'Đào tạo & Bàn giao',
      description: 'Hướng dẫn sử dụng, đào tạo team và bàn giao hệ thống hoàn chỉnh',
      icon: HiAcademicCap,
      duration: '1 ngày'
    },
    {
      step: '05',
      title: 'Hỗ trợ & Tối ưu',
      description: 'Theo dõi, hỗ trợ 24/7 và liên tục tối ưu hóa hiệu suất AI',
      icon: HiRocketLaunch,
      duration: 'Liên tục'
    }
  ];

  return (
    <section className="process section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Quy Trình Hợp Tác Cùng Doanh Nghiệp
          </h2>
          <p className="section-subtitle">
            Chỉ cần 5 bước đơn giản để có một hệ thống AI CSKH hoàn chỉnh
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="process-step" 
                data-aos="fade-up" 
                data-aos-delay={200 + index * 150}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="step-duration">{step.duration}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="process-summary" data-aos="fade-up" data-aos-delay="900">
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-number">
                <Counter end={7} duration={2000} suffix="-" />
                <Counter end={10} duration={2200} />
              </span>
              <span className="summary-label">Ngày triển khai</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">
                <Counter end={24} duration={1800} suffix="/7" />
              </span>
              <span className="summary-label">Hỗ trợ kỹ thuật</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">
                <Counter end={99} duration={2500} suffix="%" />
              </span>
              <span className="summary-label">Khách hàng hài lòng</span>
            </div>
          </div>
          
          <div className="process-cta">
            <h3>Sẵn sàng bắt đầu?</h3>
            <p>Liên hệ ngay để được tư vấn miễn phí và lập kế hoạch triển khai</p>
            <a href="tel:0888889805" className="btn btn-primary">
              Bắt đầu ngay hôm nay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;