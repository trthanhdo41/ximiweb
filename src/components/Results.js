import React from 'react';
import { HiArrowTrendingUp, HiBolt, HiCurrencyDollar, HiFaceSmile } from 'react-icons/hi2';
import Counter from './Counter';
import './Results.css';

const Results = () => {




  const stats = [
    {
      icon: HiArrowTrendingUp,
      value: '250%',
      numberValue: 250,
      suffix: '%',
      label: 'Tăng trung bình doanh thu',
      color: '#4caf50'
    },
    {
      icon: HiBolt,
      value: '2.5s',
      numberValue: 2.5,
      decimals: 1,
      suffix: 's',
      label: 'Thời gian phản hồi trung bình',
      color: '#2196f3'
    },
    {
      icon: HiCurrencyDollar,
      value: '70%',
      numberValue: 70,
      suffix: '%',
      label: 'Tiết kiệm chi phí CSKH',
      color: '#ff9800'
    },
    {
      icon: HiFaceSmile,
      value: '97%',
      numberValue: 97,
      suffix: '%',
      label: 'Khách hàng hài lòng',
      color: '#e91e63'
    }
  ];

  return (
    <section className="results section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Kết quả thực tế từ khách hàng của chúng tôi
          </h2>
          <p className="section-subtitle">
            Những con số ấn tượng và câu chuyện thành công thực tế từ các doanh nghiệp đã tin tưởng XimiWeb
          </p>
        </div>

        <div className="results-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="stat-card" 
                  data-aos="zoom-in" 
                  data-aos-delay={300 + index * 100}
                  style={{'--stat-color': stat.color}}
                >
                  <div className="stat-icon">
                    <IconComponent size={48} />
                  </div>
                  <div className="stat-value">
                    <Counter 
                      end={stat.numberValue} 
                      duration={2500} 
                      suffix={stat.suffix || ''} 
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>



        <div className="success-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Bạn cũng muốn có kết quả tương tự?</h3>
          <p>Hãy để XimiWeb giúp doanh nghiệp của bạn đạt được những con số ấn tượng như vậy</p>
          <a href="tel:0888889805" className="btn btn-primary">
            Bắt đầu thành công của bạn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;