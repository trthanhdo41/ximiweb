import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  HiCodeBracket, 
  HiDevicePhoneMobile, 
  HiCpuChip,
  HiSparkles,
  HiRocketLaunch,
  HiShieldCheck,
  HiGlobeAlt,
  HiCog6Tooth,
  HiCommandLine,
  HiCloud,
  HiSquare3Stack3D,
  HiCube
} from 'react-icons/hi2';

const TechStackSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: linear-gradient(180deg, 
    ${props => props.theme.colors.background} 0%, 
    ${props => props.theme.colors.backgroundSecondary} 100%);
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
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.accent};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
`;

const TechTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing['4xl']};

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
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
    border-color: ${props => props.theme.colors.accent};
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.accent};
  font-size: 28px;
`;

const FeatureTitle = styled.h4`
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const FeatureDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

const TechStack = () => {
  const techCategories = [
    {
      icon: HiCodeBracket,
      title: 'Frontend Development',
      technologies: [
        'React.js', 'Next.js', 'Vue.js', 'Angular',
        'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3',
        'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Styled Components',
        'Redux', 'Zustand', 'React Query', 'Framer Motion'
      ]
    },
    {
      icon: HiCog6Tooth,
      title: 'Backend Development',
      technologies: [
        'Node.js', 'Express.js', 'NestJS', 'Python',
        'Django', 'FastAPI', 'PHP', 'Laravel',
        'RESTful API', 'GraphQL', 'WebSocket', 'Socket.io',
        'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'
      ]
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile Development',
      technologies: [
        'React Native', 'Expo', 'Flutter', 'PWA',
        'iOS Development', 'Android Development',
        'Cross-platform Apps', 'Mobile-First Design',
        'Responsive Design', 'Touch Optimization'
      ]
    },
    {
      icon: HiCpuChip,
      title: 'AI & Machine Learning',
      technologies: [
        'AI Integration', 'Chatbot Development', 'OpenAI API',
        'Natural Language Processing', 'AI-Powered Features',
        'Intelligent Search', 'Recommendation Systems', 'LangChain',
        'Machine Learning Models', 'Computer Vision'
      ]
    },
    {
      icon: HiCloud,
      title: 'Cloud & DevOps',
      technologies: [
        'AWS', 'Google Cloud', 'Azure', 'Vercel',
        'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions',
        'Firebase', 'Supabase', 'Serverless', 'Edge Functions'
      ]
    },
    {
      icon: HiSquare3Stack3D,
      title: 'E-commerce & CMS',
      technologies: [
        'Shopify', 'WooCommerce', 'Magento', 'Strapi',
        'WordPress', 'Contentful', 'Sanity', 'Prismic',
        'Payment Integration', 'Stripe', 'PayPal', 'VNPay'
      ]
    }
  ];

  const features = [
    {
      icon: HiSparkles,
      title: 'Clean Code',
      description: 'Code chất lượng cao, dễ đọc, dễ maintain theo chuẩn industry'
    },
    {
      icon: HiRocketLaunch,
      title: 'Performance',
      description: 'Tối ưu tốc độ tải trang, SEO score cao, Core Web Vitals'
    },
    {
      icon: HiShieldCheck,
      title: 'Security',
      description: 'Bảo mật tối đa, authentication, authorization, data encryption'
    },
    {
      icon: HiGlobeAlt,
      title: 'SEO Optimized',
      description: 'Tối ưu SEO on-page, meta tags, structured data, sitemap'
    },
    {
      icon: HiCommandLine,
      title: 'Best Practices',
      description: 'Áp dụng design patterns, SOLID principles, clean architecture'
    },
    {
      icon: HiCube,
      title: 'Scalable',
      description: 'Kiến trúc có khả năng mở rộng, microservices ready'
    }
  ];

  return (
    <TechStackSection id="tech-stack">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>
            Công nghệ & Kỹ năng chuyên nghiệp
          </SectionTitle>
          <SectionSubtitle>
            Sử dụng các công nghệ và framework hiện đại nhất để xây dựng 
            website chất lượng cao, đáp ứng mọi nhu cầu của bạn
          </SectionSubtitle>
        </SectionHeader>

        <CategoryGrid>
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <CategoryCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CategoryHeader>
                  <CategoryIcon>
                    <IconComponent />
                  </CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>
                <TechList>
                  {category.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechList>
              </CategoryCard>
            );
          })}
        </CategoryGrid>

        <FeaturesGrid>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <IconComponent />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </Container>
    </TechStackSection>
  );
};

export default TechStack;

