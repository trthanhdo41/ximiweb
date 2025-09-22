import React from 'react';
import { BiMessageError, BiTimeFive, BiMoneyWithdraw, BiMoon, BiErrorCircle, BiBarChart } from 'react-icons/bi';
import './Problems.css';

const Problems = () => {
  const problems = [
    {
      icon: BiMessageError,
      title: 'Quá tải tin nhắn',
      description: 'Hàng trăm tin nhắn khách hàng mỗi ngày nhưng không đủ nhân lực xử lý'
    },
    {
      icon: BiTimeFive,
      title: 'Phản hồi chậm',
      description: 'Khách hàng phải chờ đợi lâu, dẫn đến mất khách và giảm doanh thu'
    },
    {
      icon: BiMoneyWithdraw,
      title: 'Chi phí nhân sự cao',
      description: 'Tuyển dụng và đào tạo nhân viên CSKH tốn kém thời gian và chi phí'
    },
    {
      icon: BiMoon,
      title: 'Không hỗ trợ 24/7',
      description: 'Mất khách hàng khi họ cần hỗ trợ ngoài giờ hành chính'
    },
    {
      icon: BiErrorCircle,
      title: 'Sai sót thông tin',
      description: 'Nhân viên đôi khi cung cấp thông tin không chính xác hoặc thiếu sót'
    },
    {
      icon: BiBarChart,
      title: 'Khó quản lý dữ liệu',
      description: 'Không có hệ thống theo dõi và phân tích hiệu quả tương tác khách hàng'
    }
  ];

  return (
    <section className="problems section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Bạn có đang gặp những vấn đề này?
          </h2>
          <p className="section-subtitle">
            Nhiều doanh nghiệp đang đối mặt với những thách thức trong việc chăm sóc khách hàng hiện đại
          </p>
        </div>

        <div className="problems-grid" data-aos="fade-up" data-aos-delay="200">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="problem-card" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                <div className="problem-icon">
                  <IconComponent size={48} />
                </div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="problems-cta" data-aos="fade-up" data-aos-delay="800">
          <h3>Đừng để những vấn đề này làm chậm sự phát triển của doanh nghiệp bạn!</h3>
          <p>XimiWeb sẽ giúp bạn giải quyết tất cả</p>
        </div>
      </div>
    </section>
  );
};

export default Problems;