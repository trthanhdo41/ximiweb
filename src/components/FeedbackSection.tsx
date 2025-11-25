import { useState } from "react";
import { Star, Send, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const FeedbackSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && feedback) {
      // In a real app, you would send this to your backend
      console.log({ rating, name, email, feedback });
      setSubmitted(true);
      setTimeout(() => {
        setRating(0);
        setName("");
        setEmail("");
        setFeedback("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="feedback" className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Gửi đánh giá & <span className="text-primary">Góp ý</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto md:text-lg">
              Ý kiến của bạn giúp chúng tôi cải thiện dịch vụ tốt hơn mỗi ngày
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 mb-4">
                <ThumbsUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                Cảm ơn bạn!
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Đánh giá của bạn đã được gửi thành công. Chúng tôi sẽ xem xét và phản hồi sớm nhất!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border shadow-lg p-8 space-y-6">
              {/* Star Rating */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Đánh giá của bạn <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-125 focus:outline-none focus:scale-125"
                    >
                      <Star
                        className={`h-10 w-10 transition-colors ${
                          star <= (hoverRating || rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-center text-muted-foreground animate-in fade-in">
                    {rating === 1 && "Rất tệ"}
                    {rating === 2 && "Tệ"}
                    {rating === 3 && "Bình thường"}
                    {rating === 4 && "Tốt"}
                    {rating === 5 && "Xuất sắc"}
                  </p>
                )}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Họ và tên
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Feedback */}
              <div className="space-y-2">
                <label htmlFor="feedback" className="text-sm font-medium">
                  Nhận xét của bạn <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="feedback"
                  placeholder="Chia sẻ trải nghiệm của bạn về dịch vụ của XimiTech..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-32 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-semibold"
                disabled={!rating || !feedback}
              >
                <Send className="mr-2 h-5 w-5" />
                Gửi đánh giá
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Đánh giá của bạn sẽ giúp chúng tôi cải thiện chất lượng dịch vụ
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

