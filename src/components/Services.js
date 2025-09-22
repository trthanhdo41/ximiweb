import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  HiGlobeAlt, 
  HiDevicePhoneMobile, 
  HiCpuChip,
  HiShoppingBag
} from 'react-icons/hi2';
import Button from './ui/Button';

const ServicesSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
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

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const ServiceItem = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ServiceIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: white;
  font-size: 32px;
`;

const ServiceTitle = styled(motion.h3)`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;




const CtaSection = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.background};
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

const Services = () => {
  const services = [
    {
      icon: HiGlobeAlt,
      title: 'Thiết kế Website Chuyên Nghiệp',
      description: 'Website doanh nghiệp, bán hàng, tin tức với thiết kế hiện đại, responsive và tối ưu SEO',
      features: [
        'Thiết kế responsive cho mọi thiết bị',
        'Tối ưu SEO cho Google',
        'Giao diện admin dễ sử dụng',
        'Bảo hành 12 tháng',
        'Tốc độ tải nhanh dưới 3 giây'
      ],
      price: 'Từ 899.000đ',
      originalPrice: '1.200.000đ'
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Web App & Mobile App',
      description: 'Ứng dụng web và mobile với tính năng hiện đại, cross-platform và hiệu suất cao',
      features: [
        'Cross-platform (Web + Mobile)',
        'Push notification',
        'Tích hợp thanh toán',
        'Real-time features',
        'App Store & Google Play'
      ],
      price: 'Từ 1.499.000đ',
      originalPrice: '2.000.000đ'
    },
    {
      icon: HiCpuChip,
      title: 'Giải pháp AI Thông minh',
      description: 'Chatbot AI, RAG system, automation với công nghệ AI tiên tiến cho doanh nghiệp',
      features: [
        'AI Chatbot đa nền tảng',
        'RAG System thông minh',
        'Process Automation',
        'AI Analytics & Insights',
        'Machine Learning Models'
      ],
      price: 'Từ 2.999.000đ',
      originalPrice: '4.000.000đ'
    },
    {
      icon: HiShoppingBag,
      title: 'Website Bán Hàng & E-commerce',
      description: 'Website thương mại điện tử với tính năng thanh toán, quản lý đơn hàng và khách hàng',
      features: [
        'Tích hợp thanh toán online',
        'Quản lý đơn hàng tự động',
        'Hệ thống khuyến mãi',
        'Báo cáo doanh thu',
        'Tích hợp mạng xã hội'
      ],
      price: 'Từ 3.999.000đ',
      originalPrice: '5.500.000đ'
    }
  ];

  const openZalo = () => {
    window.open('https://zalo.me/0888889805', '_blank');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Dịch vụ của chúng tôi
          </SectionTitle>
          <SectionSubtitle>
            Thiết kế website chuyên nghiệp cho mọi nhu cầu
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ServiceItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent />
                </ServiceIcon>
                
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceItem>
            );
          })}
        </ServicesGrid>


        <CtaSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CtaTitle>
            Sẵn sàng bắt đầu dự án của bạn?
          </CtaTitle>
          <CtaDescription>
            Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
          </CtaDescription>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={openZalo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nhận tư vấn miễn phí
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Xem bảng giá chi tiết
            </Button>
          </div>
        </CtaSection>
      </Container>
    </ServicesSection>
  );
};

export default Services;
