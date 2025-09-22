import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';

const TestimonialsSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.03) 0%, 
      rgba(139, 92, 246, 0.03) 100%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 1;
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

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xl};
  align-items: stretch;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing.xl};
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: ${props => props.theme.colors.primary};
    opacity: 0.3;
    font-family: serif;
  }
`;

const Rating = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Star = styled(HiStar)`
  color: #fbbf24;
  width: 20px;
  height: 20px;
`;

const TestimonialText = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-style: italic;
  flex-grow: 1;
`;

const CustomerInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const CustomerAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.lg};
`;

const CustomerDetails = styled.div`
  flex: 1;
`;

const CustomerName = styled.h4`
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
`;

const CustomerTitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
`;

const WebsiteLink = styled.a`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Anh làm web rất chiều ý khách hàng, lắng nghe feedback và chỉnh sửa theo yêu cầu. Website moctaisinh.vn được thiết kế đẹp, tốc độ nhanh và dễ sử dụng. Cảm ơn anh rất nhiều!",
      name: "Nguyễn Văn Minh",
      title: "Website: moctaisinh.vn",
      avatar: "NM",
      website: "https://moctaisinh.vn"
    },
    {
      rating: 5,
      text: "Dự án mobile app của chúng tôi được XimiWeb thực hiện rất tốt. Code chất lượng cao, bàn giao đúng hẹn, và bảo hành tận tình. Sẽ hợp tác lâu dài!",
      name: "Trần Văn Đức",
      title: "Founder, TechStart",
      avatar: "TĐ"
    },
    {
      rating: 5,
      text: "Website doanh nghiệp được thiết kế rất chuyên nghiệp, responsive tốt trên mọi thiết bị. SEO cũng được tối ưu rất tốt, traffic tăng đáng kể. Cảm ơn XimiWeb!",
      name: "Lê Thị Hương",
      title: "Marketing Manager, TechViet Solutions",
      avatar: "LH"
    }
  ];

  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Khách hàng nói gì về chúng tôi
          </SectionTitle>
          <SectionSubtitle>
            Hơn 50 khách hàng đã tin tưởng và hài lòng với dịch vụ của XimiWeb
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </Rating>
              
              <TestimonialText>
                {testimonial.text}
              </TestimonialText>
              
              <CustomerInfo>
                <CustomerAvatar>
                  {testimonial.avatar}
                </CustomerAvatar>
                <CustomerDetails>
                  <CustomerName>{testimonial.name}</CustomerName>
                  {testimonial.website ? (
                    <WebsiteLink 
                      href={testimonial.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {testimonial.title}
                    </WebsiteLink>
                  ) : (
                    <CustomerTitle>{testimonial.title}</CustomerTitle>
                  )}
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
