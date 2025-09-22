import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';

const PricingSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: ${props => props.theme.typography.lineHeight.tight};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const PricingGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: ${props => props.theme.spacing['4xl']};
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1400px) {
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PricingCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%, 
      rgba(139, 92, 246, 0.05) 50%, 
      rgba(6, 182, 212, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 24px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.primary};
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PlanName = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 0.75rem;
  line-height: 1.3;
  letter-spacing: -0.025em;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${PricingCard}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const PlanDescription = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1;
  position: relative;
  z-index: 1;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  position: relative;

  svg {
    color: #10b981;
    flex-shrink: 0;
    margin-top: 0.125rem;
    transition: all 0.3s ease;
  }

  ${PricingCard}:hover & {
    color: ${props => props.theme.colors.textPrimary};
    
    svg {
      color: #059669;
    }
  }
`;

const PricingContainer = styled(motion.div)`
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

`;

const OriginalPrice = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
  margin-bottom: 0.25rem;
  font-weight: 500;
  transition: all 0.3s ease;

  ${PricingCard}:hover & {
    opacity: 0.7;
  }
`;

const CurrentPrice = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  color: #059669;
  line-height: 1;
  letter-spacing: -0.025em;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #059669, #10b981);
    transition: width 0.3s ease;
  }

  ${PricingCard}:hover & {
    color: #047857;
    
    &::after {
      width: 100%;
    }
  }
`;

const CtaButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.875rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }

`;

const CtaSection = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  margin-top: ${props => props.theme.spacing['4xl']};
`;

const CtaTitle = styled(motion.h3)`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CtaDescription = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Component Counter để tạo hiệu ứng đếm số cho giá tiền
const PriceCounter = ({ target, prefix = '', suffix = 'đ', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const startValue = 0;
      const endValue = target;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function để tạo hiệu ứng mượt mà
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCount(Math.floor(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  // Format số với dấu chấm phân cách hàng nghìn
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const Pricing = () => {
  const services = [
    {
      name: 'Thiết kế Website Chuyên Nghiệp',
      originalPrice: 1200000,
      currentPrice: 899000,
      description: 'Website doanh nghiệp, bán hàng, tin tức với thiết kế hiện đại, responsive và tối ưu SEO',
        features: [
        'Thiết kế responsive cho mọi thiết bị',
        'Tối ưu SEO cho Google',
        'Giao diện admin dễ sử dụng',
        'Bảo hành 12 tháng',
        'Tốc độ tải nhanh dưới 3 giây'
      ]
    },
    {
      name: 'Web App & Mobile App',
      originalPrice: 2000000,
      currentPrice: 1499000,
      description: 'Ứng dụng web và mobile với tính năng hiện đại, cross-platform và hiệu suất cao',
        features: [
        'Cross-platform (Web + Mobile)',
        'Push notification',
        'Tích hợp thanh toán',
        'Real-time features',
        'App Store & Google Play'
      ]
    },
    {
      name: 'Giải pháp AI Thông minh',
      originalPrice: 4000000,
      currentPrice: 2999000,
      description: 'Chatbot AI, RAG system, automation với công nghệ AI tiên tiến cho doanh nghiệp',
        features: [
        'AI Chatbot đa nền tảng',
        'RAG System thông minh',
        'Process Automation',
        'AI Analytics & Insights',
        'Machine Learning Models'
      ]
    },
    {
      name: 'Website Bán Hàng & E-commerce',
      originalPrice: 5500000,
      currentPrice: 3999000,
      description: 'Website thương mại điện tử với tính năng thanh toán, quản lý đơn hàng và khách hàng',
        features: [
          'Tích hợp thanh toán online',
        'Quản lý đơn hàng tự động',
        'Hệ thống khuyến mãi',
        'Báo cáo doanh thu',
        'Tích hợp mạng xã hội'
      ]
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0888889805', '_blank');
  };

  return (
    <PricingSection id="pricing">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Bảng giá
          </SectionTitle>
          <SectionSubtitle>
            Giá cả minh bạch, chất lượng đảm bảo
          </SectionSubtitle>
        </SectionHeader>

        <PricingGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <PricingCard
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <PlanName>
                {service.name}
              </PlanName>
              
              <PlanDescription>
                {service.description}
              </PlanDescription>
              
              <FeaturesList>
                {service.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>
                    <HiCheck size={18} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
              
              <PricingContainer>
                <OriginalPrice>
                  <PriceCounter 
                    target={service.originalPrice} 
                    duration={1500}
                  />
                </OriginalPrice>
                <CurrentPrice>
                  Từ <PriceCounter 
                    target={service.currentPrice} 
                    duration={2000}
                  />
                </CurrentPrice>
              </PricingContainer>
              
              <CtaButton
                onClick={openZalo}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                Nhận báo giá
              </CtaButton>
            </PricingCard>
          ))}
        </PricingGrid>

        <CtaSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CtaTitle>
            Cần tư vấn chi tiết?
          </CtaTitle>
          <CtaDescription>
            Liên hệ ngay để nhận báo giá tùy chỉnh theo yêu cầu cụ thể của dự án
          </CtaDescription>
          <CtaButton
            onClick={openZalo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              maxWidth: '300px',
              margin: '0 auto',
              fontSize: '1rem',
              padding: '1rem 2rem'
            }}
          >
            Nhận tư vấn miễn phí
          </CtaButton>
        </CtaSection>
      </Container>
    </PricingSection>
  );
};

export default Pricing;