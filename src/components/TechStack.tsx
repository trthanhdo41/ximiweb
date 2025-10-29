import { Code2, Sparkles, Monitor, Server, Smartphone, Brain, Cloud, ShoppingCart, Zap, Lock, Target, Award, TrendingUp } from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      "React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript ES6+",
      "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material-UI", "Styled Components",
      "Redux", "Zustand", "React Query", "Framer Motion"
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "NestJS", "Python", "Django", "FastAPI",
      "PHP", "Laravel", "RESTful API", "GraphQL", "WebSocket", "Socket.io",
      "MongoDB", "PostgreSQL", "MySQL", "Redis"
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native", "Expo", "Flutter", "PWA", "iOS Development", "Android Development",
      "Cross-platform Apps", "Mobile-First Design", "Responsive Design", "Touch Optimization"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "AI Integration", "Chatbot Development", "OpenAI API", "Natural Language Processing",
      "AI-Powered Features", "Intelligent Search", "Recommendation Systems", "LangChain",
      "Machine Learning Models", "Computer Vision"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS", "Google Cloud", "Azure", "Vercel", "Docker", "Kubernetes",
      "CI/CD", "GitHub Actions", "Firebase", "Supabase", "Serverless", "Edge Functions"
    ]
  },
  {
    title: "E-commerce & CMS",
    icon: ShoppingCart,
    skills: [
      "Shopify", "WooCommerce", "Magento", "Strapi", "WordPress", "Contentful",
      "Sanity", "Prismic", "Payment Integration", "Stripe", "PayPal", "VNPay"
    ]
  }
];

const highlights = [
  {
    icon: Sparkles,
    title: "Clean Code",
    desc: "Code chất lượng cao, dễ đọc, dễ maintain theo chuẩn industry"
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Tối ưu tốc độ tải trang, SEO score cao, Core Web Vitals"
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Bảo mật tối đa, authentication, authorization, data encryption"
  },
  {
    icon: Target,
    title: "SEO Optimized",
    desc: "Tối ưu SEO on-page, meta tags, structured data, sitemap"
  },
  {
    icon: Award,
    title: "Best Practices",
    desc: "Áp dụng design patterns, SOLID principles, clean architecture"
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    desc: "Kiến trúc có khả năng mở rộng, microservices ready"
  }
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary mb-3 md:mb-4">
            <Code2 className="h-3 w-3 md:h-4 md:w-4" />
            Technology Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
            Công nghệ & Kỹ năng{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              chuyên nghiệp
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Sử dụng các công nghệ và framework hiện đại nhất để xây dựng website chất lượng cao, đáp ứng mọi nhu cầu của bạn
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 md:px-3 py-0.5 md:py-1 bg-background/80 text-gray-300 text-[10px] md:text-xs rounded-full border border-primary/20 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-primary/20 rounded-xl md:rounded-2xl p-5 md:p-8">
          <div className="flex items-center gap-2 mb-5 md:mb-6 justify-center">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Điểm mạnh vượt trội</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 md:gap-3 bg-background/50 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

