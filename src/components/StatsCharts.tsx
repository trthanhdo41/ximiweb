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
              200+
            </div>
            <div className="text-gray-400 text-xs md:text-sm">Dự án hoàn thành</div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/40 transition-all group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              200+
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
              4+
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

        {/* Featured Projects */}
        <div className="mt-8 md:mt-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            Dự án tiêu biểu
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Rentino.vn", url: "https://rentino.vn" },
              { name: "Celebi.vn", url: "https://celebi.vn" },
              { name: "Refurbest.vn", url: "https://refurbest.vn" },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary font-bold text-lg">{project.name.charAt(0)}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                  </div>
                  <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* GitHub Open Source */}
          <a
            href="https://github.com/trthanhdo41"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 border-2 border-primary/30 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    50+ Dự án Open Source
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Đóng góp miễn phí cho cộng đồng tại <span className="text-primary font-semibold">github.com/trthanhdo41</span>
                  </p>
                </div>
              </div>
              <svg className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
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

