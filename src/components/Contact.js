import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiPhone, HiEnvelope, HiMapPin, HiClock } from 'react-icons/hi2';
import Button from './ui/Button';

const ContactSection = styled(motion.section)`
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

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled(motion.div)`
  position: relative;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.backgroundSecondary} 0%, 
    ${props => props.theme.colors.background} 100%);
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%, 
      rgba(139, 92, 246, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.primary};
    
    &::before {
      opacity: 1;
    }
  }
`;

const ContactIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }

  ${ContactItem}:hover & {
    &::before {
      left: 100%;
    }
  }
`;

const ContactDetails = styled.div`
  position: relative;
  z-index: 1;
`;

const ContactLabel = styled.h4`
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactValue = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textPrimary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  margin: 0;
  line-height: 1.5;
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    color: ${props => props.theme.colors.textPrimary};
    transform: translateX(4px);
  }
`;

const CtaSection = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius['2xl']};
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

const ContactButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: HiPhone,
      label: 'Điện thoại / Zalo',
      value: '0888889805',
      action: 'tel:0888889805'
    },
    {
      icon: HiEnvelope,
      label: 'Email',
      value: 'trdo1309@gmail.com',
      action: 'mailto:trdo1309@gmail.com'
    },
    {
      icon: HiMapPin,
      label: 'Địa chỉ',
      value: 'Tòa BE1 - The Beverly - Vinhomes Grand Park',
      action: null
    },
    {
      icon: HiClock,
      label: 'Giờ làm việc',
      value: 'Thứ 2 - Thứ 6: 9:00 - 18:00',
      action: null
    }
  ];

  const handleContact = (action) => {
    if (action) {
      window.open(action, '_self');
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Liên hệ với chúng tôi</SectionTitle>
          <SectionSubtitle>
            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ ngay để nhận tư vấn miễn phí
          </SectionSubtitle>
        </SectionHeader>

        <ContactGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactInfo>
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleContact(item.action)}
                  style={{ cursor: item.action ? 'pointer' : 'default' }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <ContactIcon
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: 0,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent />
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>{item.label}</ContactLabel>
                    <ContactValue>{item.value}</ContactValue>
                  </ContactDetails>
                </ContactItem>
              );
            })}
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              background: 'transparent',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'transparent',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
                <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5642200984985!2d106.84488647529965!3d10.844623157931558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521004e66e6e7%3A0x24105ac0e0c61666!2sT%C3%B2a%20BE1%20-%20The%20Beverly%20-%20Vinhomes%20Grand%20Park!5e0!3m2!1svi!2s!4v1758478448710!5m2!1svi!2s" 
                  width="100%" 
              height="450" 
              style={{ 
                border: 'none',
                outline: 'none',
                margin: 0,
                padding: 0,
                display: 'block',
                background: 'transparent',
                position: 'relative',
                zIndex: 0
              }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí XimiWeb - Tòa BE1 The Beverly Vinhomes Grand Park"
            />
          </motion.div>
        </ContactGrid>

        <CtaSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CtaTitle>
            Bắt đầu dự án ngay hôm nay
          </CtaTitle>
          <CtaDescription>
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tạo ra những sản phẩm công nghệ tuyệt vời
          </CtaDescription>
          <ContactButtons>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleContact('tel:0888889805')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Gọi ngay
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleContact('mailto:trdo1309@gmail.com')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Gửi email
            </Button>
          </ContactButtons>
        </CtaSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;
