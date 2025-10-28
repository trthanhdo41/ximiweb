import { Recycle, ArrowUpCircle, Search, Shield, Truck, DollarSign } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Recycle,
      title: "Thay nên tiết dụng",
      description: "Mua bán thiết bị đã qua sử dụng an toàn",
    },
    {
      icon: ArrowUpCircle,
      title: "Nâng cấp chỉ bằng máy",
      description: "Lên đời dễ dàng với giá tốt nhất",
    },
    {
      icon: Search,
      title: "Tìm kiếm dễ dàng",
      description: "Tìm thiết bị bạn cần nhanh chóng",
    },
    {
      icon: Shield,
      title: "Bảo hành rõ ràng",
      description: "Cam kết chất lượng cho mọi giao dịch",
    },
    {
      icon: Truck,
      title: "Giao hàng tận nơi",
      description: "Vận chuyển nhanh, an toàn",
    },
    {
      icon: DollarSign,
      title: "Giá cả hợp lý",
      description: "Tiết kiệm chi phí tối đa",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Rentino cho phép bạn có đầy đủ{" "}
            <span className="text-primary">sản phẩm công nghệ tiêu dùng</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
