import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  HiGlobeAlt, 
  HiDevicePhoneMobile, 
  HiUsers, 
  HiCpuChip,
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiArrowUp
} from 'react-icons/hi2';
import { FaFacebook } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const FooterSection = styled(motion.footer)`
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['4xl']} 0 ${props => props.theme.spacing.lg};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const FooterContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const CompanyInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  span {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textSecondary};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    margin-top: -4px;
  }
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  max-width: 300px;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const ColumnTitle = styled(motion.h4)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

const ColumnList = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ColumnItem = styled(motion.li)`
  a {
    color: ${props => props.theme.colors.textSecondary};
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: ${props => props.theme.typography.fontSize.sm};

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.sm};

  svg {
    color: ${props => props.theme.colors.primary};
    flex-shrink: 0;
  }
`;

const FooterBottom = styled(motion.div)`
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin: 0;
`;

const BackToTop = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Thiết kế Website Chuyên Nghiệp', icon: HiGlobeAlt },
    { name: 'Phát triển App Mobile', icon: HiDevicePhoneMobile },
    { name: 'Ứng dụng AI & Machine Learning', icon: HiCpuChip },
    { name: 'Đồ án CNTT & IT Projects', icon: HiUsers }
  ];

  const quickLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Công nghệ', href: '#tech-stack' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Thống kê', href: '#charts' },
    { name: 'Liên hệ', href: '#contact' }
  ];


  return (
    <FooterSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <FooterContent>
          <CompanyInfo
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo>
              <h3>XimiWeb</h3>
              <span>Giải pháp IT</span>
            </Logo>
            <Description>
              Chuyên cung cấp giải pháp IT toàn diện: Thiết kế website, phát triển app mobile (Android & iOS), 
              ứng dụng AI, làm đồ án CNTT và các dịch vụ công nghệ thông tin chuyên nghiệp.
            </Description>
            <SocialLinks>
              <SocialLink
                href="https://www.facebook.com/share/1A9BXJqMaj/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={18} />
              </SocialLink>
              <SocialLink
                href="https://zalo.me/0888889805"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiZalo size={18} />
              </SocialLink>
            </SocialLinks>
          </CompanyInfo>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ColumnTitle>Dịch vụ</ColumnTitle>
            <ColumnList>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ColumnItem
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a href="#services" onClick={() => scrollToSection('services')}>
                      <IconComponent size={16} style={{ marginRight: '8px', display: 'inline' }} />
                      {service.name}
                    </a>
                  </ColumnItem>
                );
              })}
            </ColumnList>
          </FooterColumn>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ColumnTitle>Liên kết nhanh</ColumnTitle>
            <ColumnList>
              {quickLinks.map((link, index) => (
                <ColumnItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} onClick={() => scrollToSection(link.href.substring(1))}>
                    {link.name}
                  </a>
                </ColumnItem>
              ))}
            </ColumnList>
          </FooterColumn>

          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ColumnTitle>Liên hệ</ColumnTitle>
            <ContactInfo>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <HiPhone size={16} />
                <span>0888 889 805</span>
              </ContactItem>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <HiEnvelope size={16} />
                <span>trdo1309@gmail.com</span>
              </ContactItem>
              <ContactItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <HiMapPin size={16} />
                <span>TP.HCM, Việt Nam</span>
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>

        <FooterBottom
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Copyright>
            © 2025 XimiWeb. Tất cả quyền được bảo lưu.
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowUp size={16} />
            Lên đầu trang
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;