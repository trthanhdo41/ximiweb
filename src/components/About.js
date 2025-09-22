import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiUsers, HiClock, HiShieldCheck, HiLightningBolt, HiCodeBracket, HiGlobeAlt } from 'react-icons/hi2';

const AboutSection = styled(motion.section)`
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

const AboutContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const AboutTitle = styled(motion.h3)`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const AboutDescription = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Timeline = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
`;

const TimelineYear = styled.div`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  min-width: 80px;
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineTitle = styled.h4`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const TimelineDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: white;
`;

const FeatureTitle = styled.h4`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const About = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Thành lập XimiWeb',
      description: 'Bắt đầu với đam mê công nghệ, chuyên thiết kế website cho doanh nghiệp nhỏ'
    },
    {
      year: '2023',
      title: 'Mở rộng dịch vụ',
      description: 'Phát triển thêm mobile app và AI solutions, nâng cao kỹ năng chuyên môn'
    },
    {
      year: '2025',
      title: 'Đạt 50+ dự án',
      description: 'Hoàn thành hơn 50 dự án thành công, xây dựng uy tín trong ngành'
    }
  ];

  const features = [
    {
      icon: HiUsers,
      title: 'Kỹ sư chuyên nghiệp',
      description: '3+ năm kinh nghiệm, chuyên môn sâu về web và mobile app'
    },
    {
      icon: HiClock,
      title: 'Bàn giao nhanh',
      description: 'Website 3-7 ngày, App 2-4 tuần, cam kết đúng hẹn'
    },
    {
      icon: HiShieldCheck,
      title: 'Bảo hành 12 tháng',
      description: 'Hỗ trợ kỹ thuật miễn phí, sửa lỗi không giới hạn'
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Về chúng tôi
          </SectionTitle>
          <SectionSubtitle>
            XimiWeb - Kỹ sư phần mềm đáng tin cậy với hơn 3 năm kinh nghiệm
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AboutText>
            <AboutTitle>
              Câu chuyện của tôi
            </AboutTitle>
            <AboutDescription>
              XimiWeb được thành lập năm 2022 bởi một kỹ sư phần mềm có đam mê với công nghệ. 
              Với kinh nghiệm 3+ năm trong lĩnh vực phát triển web và mobile app, tôi cam kết 
              mang đến những giải pháp công nghệ hiện đại và hiệu quả cho doanh nghiệp.
            </AboutDescription>
            <AboutDescription>
              Với hơn 50 dự án thành công và khách hàng tin tưởng, tôi cam kết mang đến 
              chất lượng tốt nhất với giá cả cạnh tranh. Phương châm của tôi: "Chất lượng 
              hơn số lượng, khách hàng là trung tâm".
            </AboutDescription>
          </AboutText>

          <Timeline>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </AboutContent>

        <FeaturesGrid
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
                return (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <FeatureIcon>
                      <IconComponent size={24} />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
                );
              })}
        </FeaturesGrid>
      </Container>
    </AboutSection>
  );
};

export default About;