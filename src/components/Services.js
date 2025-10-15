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
  font-size: ${props => props.theme.typography.fontSize['6xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
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
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.backgroundSecondary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const ServiceIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.md};
  color: white;
  font-size: 24px;
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      description: 'Website doanh nghiệp, bán hàng, landing page với thiết kế hiện đại, responsive và tối ưu SEO'
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Phát triển App Mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
      description: 'Ứng dụng Android, iOS với React Native, Flutter. Cross-platform và hiệu suất cao'
    },
    {
      icon: HiCpuChip,
      title: 'Ứng dụng AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
      description: 'Chatbot AI, RAG system, tích hợp OpenAI, automation với công nghệ AI tiên tiến'
    },
    {
      icon: HiShoppingBag,
      title: 'Đồ án CNTT & IT Projects',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
      description: 'Hỗ trợ làm đồ án tốt nghiệp, đồ án môn học CNTT các cấp với chất lượng cao'
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
            Dịch vụ IT chuyên nghiệp
          </SectionTitle>
          <SectionSubtitle>
            Giải pháp công nghệ toàn diện từ Website, App Mobile, AI đến Đồ án CNTT
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
              >
                <ServiceImage>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                  />
                </ServiceImage>
                
                <ServiceIcon>
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
