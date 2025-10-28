import { Brain, TrendingUp, CheckCircle2 } from "lucide-react";

export const AIPricingSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Chính xác tuyệt đối",
      description: "Chỉ với một vài thông tin cơ bản đã có định giá ngay",
    },
    {
      icon: Brain,
      title: "AI phân tích đa chiều",
      description: "Xét đến tình trạng máy, thời gian ra mắt, biến động giá thị trường và khả năng tái bán cao",
    },
    {
      icon: TrendingUp,
      title: "Đánh giá tận nơi chi tiết",
      description: "Kiểm định chuyên sâu pin, RAM, bộ nhớ để đảm bảo giá trị thật",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Brain className="h-4 w-4" />
            Công nghệ AI tiên tiến
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Định giá thông minh với AI{" "}
            <span className="text-primary">luôn nhận tạo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hệ thống AI của chúng tôi phân tích hàng triệu dữ liệu giao dịch, diễn biến thị trường và nhu cầu thực tế để đưa ra mức giá công bằng cho mọi thiết bị
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
