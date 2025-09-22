import React from 'react';
import { HiBolt, HiCurrencyDollar, HiClock, HiArrowTrendingUp } from 'react-icons/hi2';
import Counter from './Counter';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: HiBolt,
      title: 'Tăng hiệu quả 300%',
      description: 'Xử lý hàng nghìn tin nhắn cùng lúc mà không cần nghỉ ngơi',
      metric: '300%',
      color: '#ff6b6b'
    },
    {
      icon: HiCurrencyDollar,
      title: 'Tiết kiệm chi phí 80%',
      description: 'Giảm đáng kể chi phí nhân sự và vận hành CSKH',
      metric: '80%',
      color: '#4ecdc4'
    },
    {
      icon: HiArrowTrendingUp,
      title: 'Tăng doanh thu 150%',
      description: 'Chăm sóc khách hàng tốt hơn, tỷ lệ chuyển đổi cao hơn',
      metric: '150%',
      color: '#45b7d1'
    },
    {
      icon: HiClock,
      title: 'Phản hồi tức thì',
      description: 'Trả lời khách hàng trong vòng 3 giây, 24/7 không nghỉ',
      metric: '<3s',
      color: '#f39c12'
    }
  ];

  return (
    <section className="benefits section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            AI giúp bạn tự động hóa & tăng doanh thu
          </h2>
          <p className="section-subtitle">
            Những lợi ích cụ thể mà XimiWeb mang lại cho doanh nghiệp của bạn
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="benefit-card" 
                data-aos="zoom-in" 
                data-aos-delay={200 + index * 150}
                style={{'--accent-color': benefit.color}}
              >
                <div className="benefit-icon">
                  <IconComponent size={48} />
                </div>
                <div className="benefit-metric">
                  {benefit.metric === '300%' && <Counter end={300} suffix="%" duration={2500} />}
                  {benefit.metric === '80%' && <Counter end={80} suffix="%" duration={2200} />}
                  {benefit.metric === '150%' && <Counter end={150} suffix="%" duration={2800} />}
                  {benefit.metric === '<3s' && (
                    <>
                      &lt;<Counter end={3} suffix="s" duration={1500} />
                    </>
                  )}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="benefit-glow"></div>
              </div>
            );
          })}
        </div>

        <div className="roi-calculator" data-aos="fade-up" data-aos-delay="800">
          <h3>Tính toán lợi ích của bạn</h3>
          <div className="calculator-grid">
            <div className="calc-item">
              <span className="calc-label">Số tin nhắn/ngày hiện tại</span>
              <span className="calc-value">
                <Counter end={200} duration={2000} />
              </span>
            </div>
            <div className="calc-item">
              <span className="calc-label">Thời gian xử lý trung bình</span>
              <span className="calc-value">
                <Counter end={5} duration={1500} suffix=" phút" />
              </span>
            </div>
            <div className="calc-item">
              <span className="calc-label">Chi phí nhân sự/tháng</span>
              <span className="calc-value">
                <Counter end={15} duration={2200} suffix=" triệu" />
              </span>
            </div>
            <div className="calc-result">
              <span className="calc-label">Tiết kiệm với XimiWeb</span>
              <span className="calc-value highlight">
                <Counter end={12} duration={2500} suffix=" triệu/tháng" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;