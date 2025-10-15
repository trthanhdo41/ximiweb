import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Đăng ký các components của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ChartsSection = styled.section`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: ${props => props.theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['5xl']};
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
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
  margin: 0 auto;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const WideChartCard = styled(motion.div)`
  grid-column: 1 / -1;
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const ChartCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const ChartTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const ChartContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const StatCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Charts = () => {
  // Dữ liệu cho biểu đồ cột - Dự án theo tháng
  const projectsData = {
    labels: ['Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9'],
    datasets: [
      {
        label: 'Dự án hoàn thành',
        data: [3, 5, 4, 7, 6, 8],
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderColor: 'rgba(15, 23, 42, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  // Dữ liệu cho biểu đồ tròn - Loại dự án
  const projectTypesData = {
    labels: ['Website Doanh nghiệp', 'Website Bán hàng', 'Mobile App', 'AI Solutions'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Dữ liệu cho biểu đồ đường - Khách hàng theo tháng
  const customersData = {
    labels: ['Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9'],
    datasets: [
      {
        label: 'Khách hàng mới',
        data: [8, 12, 15, 18, 22, 25],
        borderColor: 'rgba(15, 23, 42, 1)',
        backgroundColor: 'rgba(15, 23, 42, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(15, 23, 42, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const getChartOptions = (isDark = false) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDark ? '#cbd5e1' : '#4b5563',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(15, 23, 42, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDark ? '#94a3b8' : '#6b7280',
        },
      },
      y: {
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDark ? '#94a3b8' : '#6b7280',
        },
      },
    },
  });

  const getDoughnutOptions = (isDark = false) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDark ? '#cbd5e1' : '#4b5563',
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(15, 23, 42, 1)',
        borderWidth: 1,
      },
    },
  });

  const stats = [
    { number: '50+', label: 'Dự án hoàn thành' },
    { number: '45+', label: 'Khách hàng hài lòng' },
    { number: '100%', label: 'Tỷ lệ thành công' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' },
  ];

  return (
    <ChartsSection id="charts">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Thống kê & Báo cáo
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Dữ liệu thực tế về hiệu suất và thành tựu của XimiWeb
          </SectionSubtitle>
        </SectionHeader>

        <ChartsGrid>
          <ChartCard
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <ChartTitle>Dự án hoàn thành theo tháng</ChartTitle>
            <ChartContainer>
              <Bar data={projectsData} options={getChartOptions()} />
            </ChartContainer>
          </ChartCard>

          <ChartCard
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <ChartTitle>Phân bố loại dự án</ChartTitle>
            <ChartContainer>
              <Doughnut data={projectTypesData} options={getDoughnutOptions()} />
            </ChartContainer>
          </ChartCard>

        </ChartsGrid>

        <WideChartCard
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          <ChartTitle>Khách hàng mới theo tháng</ChartTitle>
          <ChartContainer>
            <Line data={customersData} options={getChartOptions()} />
          </ChartContainer>
        </WideChartCard>

        <div style={{ marginBottom: '5rem' }}></div>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </ChartsSection>
  );
};

export default Charts;
