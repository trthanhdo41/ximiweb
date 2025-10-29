import { useEffect, useRef } from "react";
import { BarChart3, Trophy, Star, Gem } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const StatsCharts = () => {
  // Projects completed per year
  const projectsData = {
    labels: ['2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Dự án hoàn thành',
        data: [20, 40, 65, 80],
        backgroundColor: 'rgba(0, 212, 255, 0.6)',
        borderColor: 'rgba(0, 212, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Customer satisfaction
  const satisfactionData = {
    labels: ['Rất hài lòng', 'Hài lòng', 'Trung bình'],
    datasets: [
      {
        label: 'Mức độ hài lòng',
        data: [92, 7, 1],
        backgroundColor: [
          'rgba(0, 212, 255, 0.8)',
          'rgba(6, 182, 212, 0.8)',
          'rgba(103, 232, 249, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  // Customers growth
  const customersData = {
    labels: ['2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Khách hàng tích lũy',
        data: [18, 50, 110, 180],
        borderColor: 'rgba(0, 212, 255, 1)',
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb',
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { 
          color: '#9ca3af',
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
          },
        },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
      },
      y: {
        ticks: { 
          color: '#9ca3af',
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
          },
        },
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#e5e7eb',
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
          },
          padding: window.innerWidth < 640 ? 10 : 15,
        },
      },
    },
  };

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary mb-3 md:mb-4">
            <BarChart3 className="h-3 w-3 md:h-4 md:w-4" />
            Statistics & Reports
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
            Thống kê &{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              Báo cáo
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Dữ liệu thực tế về hiệu suất và thành tựu của XimiTech
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/40 transition-all group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              205+
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Dự án hoàn thành</div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/40 transition-all group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              180+
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Khách hàng tin tưởng</div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/40 transition-all group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              99%
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Khách hài lòng</div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/40 transition-all group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              3+
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Năm kinh nghiệm</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          {/* Projects Chart */}
          <div className="bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all overflow-hidden">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Dự án theo năm
            </h3>
            <div className="h-[250px] md:h-[300px]">
              <Bar data={projectsData} options={chartOptions} />
            </div>
          </div>

          {/* Customers Chart */}
          <div className="bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all overflow-hidden">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Tăng trưởng khách hàng
            </h3>
            <div className="h-[250px] md:h-[300px]">
              <Line data={customersData} options={chartOptions} />
            </div>
          </div>

          {/* Satisfaction Chart */}
          <div className="bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all lg:col-span-2 overflow-hidden">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Mức độ hài lòng của khách hàng
            </h3>
            <div className="h-[300px] md:h-[350px] max-w-md mx-auto">
              <Doughnut data={satisfactionData} options={doughnutOptions} />
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-gray-400 text-xs md:text-sm px-4">
                <span className="text-primary font-bold text-lg md:text-2xl">99%</span> khách hàng đánh giá hài lòng và rất hài lòng với dịch vụ
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 border border-primary/20 rounded-xl p-5 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <Trophy className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">
              Thành tựu nổi bật
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 text-center">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">100%</div>
              <div className="text-gray-400 text-xs md:text-sm">Dự án bàn giao đúng hẹn</div>
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Star className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">4.9/5.0</div>
              <div className="text-gray-400 text-xs md:text-sm">Đánh giá trung bình</div>
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Gem className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">90%</div>
              <div className="text-gray-400 text-xs md:text-sm">Khách hàng quay lại</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

