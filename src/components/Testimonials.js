import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';

const TestimonialsSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;

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
      text: "App mobile của shop mình được làm cực kỳ chuyên nghiệp! React Native, tích hợp thanh toán, push notification đầy đủ. Lên cả App Store và CH Play. Khách hàng tăng vọt!",
      name: "Nguyễn Thị Mai",
      title: "Owner - Fashion Store",
      avatar: "NM"
    },
    {
      rating: 5,
      text: "Chatbot AI của XimiWeb tích hợp vào website giúp mình tư vấn khách 24/7. Tự động trả lời, nhận diện ý định, chuyển admin khi cần. Tiết kiệm thời gian cực kỳ!",
      name: "Trần Văn Đức",
      title: "CEO - TechStart Co.",
      avatar: "TĐ"
    },
    {
      rating: 5,
      text: "Làm đồ án tốt nghiệp cho em rất oke! Code sạch, document đầy đủ, hướng dẫn demo tận tình. Em bảo vệ đạt điểm cao. Cảm ơn anh nhiều!",
      name: "Lê Minh Tuấn",
      title: "Sinh viên CNTT - ĐH SPKT",
      avatar: "LT"
    },
    {
      rating: 5,
      text: "Website + AI chatbot giúp công ty mình tự động hóa được 70% công việc tư vấn. Tích hợp OpenAI, train custom data. Khách hàng rất hài lòng!",
      name: "Phạm Thị Hương",
      title: "Marketing Manager",
      avatar: "PH"
    },
    {
      rating: 5,
      text: "E-commerce website với tích hợp AI search và recommendation engine. Tỷ lệ chuyển đổi tăng 40%, khách hàng tìm được sản phẩm nhanh hơn. Rất recommend!",
      name: "Hoàng Văn Nam",
      title: "CTO - E-commerce Platform",
      avatar: "HN"
    },
    {
      rating: 5,
      text: "Làm luận văn thạc sĩ về AI/ML với XimiWeb. Code Python, Jupyter notebook, visualization đẹp. Thầy cô đánh giá rất cao về technical implementation!",
      name: "Võ Thị Linh",
      title: "Thạc sĩ AI - ĐH Bách Khoa",
      avatar: "VL"
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
