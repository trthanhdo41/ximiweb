import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  return [count, countRef];
};

// CountingNumber component
const CountingNumber = ({ value, suffix = '', prefix = '' }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [count, ref] = useCountUp(numericValue, 2000);
  
  return (
    <span ref={ref} className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
};

const Projects = () => {
  const statsData = [
    { value: '50', suffix: '+', label: 'Dự án hoàn thành' },
    { value: '15', suffix: '+', label: 'Ngành nghề khác nhau' },
    { value: '100', suffix: '%', label: 'Khách hàng hài lòng' },
    { value: '24', suffix: '/7', label: 'Hỗ trợ sau triển khai' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hệ thống AI CSKH cho chuỗi cửa hàng thời trang',
      category: 'Thời trang & Retail',
      description: 'Tự động hóa chăm sóc khách hàng trên 15 cửa hàng, xử lý 5000+ tin nhắn/ngày',
      area: 'Hồ Chí Minh',
      results: [
        'Tăng 200% hiệu quả CSKH',
        'Giảm 60% chi phí nhân sự',
        'Tăng 150% tỷ lệ chuyển đổi'
      ],
      technologies: ['Zalo OA', 'Facebook Messenger', 'Website Chat'],
      client: 'Fashion Chain ABC',
      challenge: 'Chuỗi 15 cửa hàng thời trang gặp khó khăn khi phải xử lý 5000+ tin nhắn/ngày từ khách hàng về sản phẩm, giá cả, khuyến mãi và đặt hàng.',
      solution: 'Thiết kế website bán hàng thời trang với giao diện hiện đại, responsive và tối ưu SEO. Tích hợp hệ thống quản lý sản phẩm và đơn hàng.',
      implementation: 'Thời gian: 8 ngày. Tích hợp với hệ thống quản lý kho, POS và website bán hàng.',
      metrics: {
        before: {
          responseTime: '15-30 phút',
          staffCost: '25 triệu/tháng',
          conversionRate: '2.5%',
          customerSatisfaction: '3.2/5'
        },
        after: {
          responseTime: '< 3 giây',
          staffCost: '10 triệu/tháng',
          conversionRate: '6.3%',
          customerSatisfaction: '4.7/5'
        }
      }
    },
    {
      id: 2,
      title: 'AI Chatbot cho ngành mỹ phẩm và làm đẹp',
      category: 'Beauty & Cosmetics',
      description: 'Tư vấn sản phẩm làm đẹp thông minh, phân tích da và gợi ý sản phẩm phù hợp',
      area: 'Hà Nội',
      results: [
        'Xử lý 3000+ tư vấn/ngày',
        'Độ chính xác 95%',
        'Tăng 180% doanh thu online'
      ],
      technologies: ['Instagram DM', 'Zalo', 'TikTok Shop'],
      client: 'BeautyWorld Vietnam',
      challenge: 'Công ty mỹ phẩm cần tư vấn 3000+ khách hàng/ngày về sản phẩm phù hợp với loại da, tình trạng da và mục tiêu làm đẹp.',
      solution: 'Thiết kế website mỹ phẩm với giao diện đẹp, tối ưu cho mobile và tích hợp hệ thống tư vấn sản phẩm thông minh.',
      implementation: 'Thời gian: 12 ngày. Tích hợp với hệ thống quản lý sản phẩm và CRM.',
      metrics: {
        before: {
          responseTime: '2-4 giờ',
          staffCost: '18 triệu/tháng',
          dailyConsultations: '800',
          onlineRevenue: '120 triệu/tháng'
        },
        after: {
          responseTime: '< 1 phút',
          staffCost: '8 triệu/tháng',
          dailyConsultations: '3200',
          onlineRevenue: '336 triệu/tháng'
        }
      }
    },
    {
      id: 3,
      title: 'Hệ thống auto reply YouTube cho KOL',
      category: 'Content & Entertainment',
      description: 'Tự động trả lời bình luận YouTube, tăng tương tác và quản lý cộng đồng',
      area: 'Đà Nẵng',
      results: [
        'Xử lý 10000+ comment/ngày',
        'Tăng 300% tương tác',
        'Tiết kiệm 8h/ngày cho creator'
      ],
      technologies: ['YouTube API', 'Auto Comment', 'Sentiment Analysis'],
      client: 'TechReview Channel',
      challenge: 'Kênh YouTube công nghệ với 500K+ subscribers nhận 10,000+ comment/ngày. Creator mất 8-10 giờ/ngày để trả lời comment.',
      solution: 'AI tự động phân tích sentiment và nội dung comment, trả lời thông minh dựa trên context video và lịch sử tương tác.',
      implementation: 'Thời gian: 5 ngày. Tích hợp với YouTube API và hệ thống quản lý nội dung.',
      metrics: {
        before: {
          dailyComments: '10,000',
          responseTime: '8-10 giờ',
          engagementRate: '2.1%',
          creatorProductivity: '40%'
        },
        after: {
          dailyComments: '12,500',
          responseTime: '< 1 phút',
          engagementRate: '6.8%',
          creatorProductivity: '90%'
        }
      }
    },
    {
      id: 4,
      title: 'AI CSKH đa nền tảng cho ngành F&B',
      category: 'Food & Beverage',
      description: 'Tích hợp đặt món, tư vấn menu và xử lý khiếu nại thông minh',
      area: 'Cần Thơ',
      results: [
        'Tăng 250% đơn đặt online',
        'Giảm 40% thời gian xử lý',
        'Tăng 90% satisfaction score'
      ],
      technologies: ['Zalo', 'Facebook', 'Telegram', 'App Integration'],
      client: 'Fast Food Chain XYZ',
      challenge: 'Chuỗi nhà hàng fast food cần xử lý 2000+ đơn đặt online/ngày, tư vấn menu và xử lý khiếu nại khách hàng.',
      solution: 'Thiết kế website đặt món online với giao diện thân thiện, tích hợp hệ thống thanh toán và quản lý đơn hàng tự động.',
      implementation: 'Thời gian: 10 ngày. Tích hợp với hệ thống POS, quản lý kho và website.',
      metrics: {
        before: {
          dailyOrders: '800',
          orderProcessingTime: '15 phút',
          customerSatisfaction: '3.8/5',
          onlineRevenue: '45 triệu/tháng'
        },
        after: {
          dailyOrders: '2800',
          orderProcessingTime: '9 phút',
          customerSatisfaction: '4.6/5',
          onlineRevenue: '157 triệu/tháng'
        }
      }
    }
  ];

  return (
    <section className="projects section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Các dự án chúng tôi đã thực hiện
          </h2>
          <p className="section-subtitle">
            Những câu chuyện thành công thực tế với các doanh nghiệp đa ngành nghề
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={200 + index * 150}
            >
              <div className="project-header">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="area-label">Khu vực</span>
                    <span className="area-name">{project.area}</span>
                  </div>
                  <div className="project-overlay">
                    <span className="view-details">Xem chi tiết</span>
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-client">
                  <span className="client-label">Khách hàng:</span>
                  <span className="client-name">{project.client}</span>
                </div>

                <div className="project-technologies">
                  <span className="tech-label">Công nghệ:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-results">
                  <span className="results-label">Kết quả đạt được:</span>
                  <ul className="results-list">
                    {project.results.map((result, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats" data-aos="fade-up" data-aos-delay="800">
          <div className="stats-container">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <CountingNumber 
                  value={stat.value} 
                  suffix={stat.suffix}
                />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-cta" data-aos="fade-up" data-aos-delay="1000">
          <h3>Dự án tiếp theo sẽ là của bạn?</h3>
          <p>
            Hãy để XimiWeb giúp doanh nghiệp của bạn có một câu chuyện thành công tương tự
          </p>
          <a href="tel:0888889805" className="btn btn-primary">
            Bắt đầu dự án của bạn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;