import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const StatisticsSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['4xl']} 0;
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

const StatisticsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.colors.primary};
    
    &::before {
      opacity: 1;
    }
  }
`;

const StatNumber = styled(motion.div)`
  font-size: 3rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled(motion.h3)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize.base};
  }
`;

const StatDescription = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0.5rem 0 0 0;
  position: relative;
  z-index: 1;
`;

// Component Counter để tạo hiệu ứng đếm số
const Counter = ({ target, suffix = '', duration = 2000 }) => {
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

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  const stats = [
    {
      number: 50,
      suffix: '+',
      label: 'Dự án hoàn thành',
      description: 'Đã hoàn thành và bàn giao'
    },
    {
      number: 45,
      suffix: '+',
      label: 'Khách hàng hài lòng',
      description: 'Doanh nghiệp và cá nhân'
    },
    {
      number: 100,
      suffix: '%',
      label: 'Tỷ lệ thành công',
      description: 'Cam kết chất lượng'
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Hỗ trợ khách hàng',
      description: 'Luôn sẵn sàng phục vụ'
    }
  ];

  return (
    <StatisticsSection>
      <Container>
        <StatisticsGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <StatNumber
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.3,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
              >
                <Counter 
                  target={stat.number} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              </StatNumber>
              
              <StatLabel
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + 0.5
                }}
                viewport={{ once: true }}
              >
                {stat.label}
              </StatLabel>
              
              <StatDescription
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + 0.6
                }}
                viewport={{ once: true }}
              >
                {stat.description}
              </StatDescription>
            </StatItem>
          ))}
        </StatisticsGrid>
      </Container>
    </StatisticsSection>
  );
};

export default Statistics;
