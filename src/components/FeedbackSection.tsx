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

  // Generate feedback image paths
  const feedbackImages = Array.from({ length: 47 }, (_, i) => {
    const imageNames = [
      'z7324432358631_e1dd8ad220771eb7dfc268ff84347551.jpg',
      'z7324432365847_8f4f2e7053a19a8d13f481746d113aad.jpg',
      'z7324432368773_afe731a59c7cb04d7ab4dc68e6928aa2.jpg',
      'z7324432372211_fc06e92b1cd7b2374eb27838a0b78345.jpg',
      'z7324432400921_a22c159d33e85bd8b43b30c94ac1e8ed.jpg',
      'z7324432409121_1948d9c024712526dc1df8539159da7f.jpg',
      'z7324432410026_b456b66479375645cb75e7a51db1a254.jpg',
      'z7324432411874_0851d0a4d9160aa13dcd994b909ab892.jpg',
      'z7324432412970_ca5b8f64a0f11474529d08b6dbdd653a.jpg',
      'z7324432412984_c7539abcc297a6ddbd184187d2ce3608.jpg',
      'z7324432413775_ff680ce37048dd467fa9b5e94cba3a34.jpg',
      'z7324432421571_41c2903e595503e16f014b63ea1bf2ac.jpg',
      'z7324432468797_bc80e3b08c56d71fef349f3d88b976d9.jpg',
      'z7324432470036_7e80ca30f64e08f3af695001c1cffa17.jpg',
      'z7324432470103_c0439c1bd8b81d1cee49809d866f4f68.jpg',
      'z7324432470263_c26940911aca5b9ac4252822184cd2be.jpg',
      'z7324432470264_316ca0cce854afa5d33f6f14497226af.jpg',
      'z7324432473538_338a2c1b25e9a4f1c43f6f832e29ca43.jpg',
      'z7324432473662_ac4ab2465547a59e1aac19e455b6f31e.jpg',
      'z7324432519583_c9bc703193fe094ce788bd784e4f95dc.jpg',
      'z7324432560791_1787b125378f56d44cbd2a93bc0e8620.jpg',
      'z7324432563278_e91aa2c0f0d8ba218c1cfc1dab5e6430.jpg',
      'z7324432683337_9f857da1482b50fc11f9093b6c98d518.jpg',
      'z7324432812947_eaadac835b046a55faa6bb4bcf5c683d.jpg',
      'z7324433210698_ddeb54ffc8ab6cf46ff75f459103afc8.jpg',
      'z7324433258214_323db7f925445b257c220d255820cbd1.jpg',
      'z7324433267600_a6eae118be6f175d5eb0149a708fbcbb.jpg',
      'z7324433272853_4b8db21348d4bd514d9409ca5396df3d.jpg',
      'z7324433282213_28ccc9f9ad4866027ce4f4ebeaa6737f.jpg',
      'z7324433349580_8416d301ddf874a028b3e029e30955a8.jpg',
      'z7324433785543_8eda68add99de6ae48064a70037c2afe.jpg',
      'z7324433787707_236973b039f914f7ce6cad622bf56508.jpg',
      'z7324433788313_1aeb0fd39c91f0bbe3d6693f42f6b8e8.jpg',
      'z7324433788441_57acfcfbe8c5f4992105140cef00e38f.jpg',
      'z7324433789732_d28935e7d32a4548094ec7136d111e32.jpg',
      'z7324433791310_f16eb0ce3cbc66e6f935930d61fe489c.jpg',
      'z7324433792609_84685de4b14c7911278a26ce4784297f.jpg',
      'z7324433792938_cf227921f7ca28fcac6ab5e627b21bd7.jpg',
      'z7324433793739_c6fac2a603e4b2cf366bf18718466782.jpg',
      'z7324433793843_3fa44213b1cf10cc84c56e2cf1db0538.jpg',
      'z7324433799383_84838e981d6f85fa2dd936c46bee7be6.jpg',
      'z7324433799776_a9754acc223af480bfd44f7f4d52631e.jpg',
      'z7324433800366_a14a89208519b897d3dca0d8c927b1c5.jpg',
      'z7324433800461_d0ec30c2586a897a8b40b7396ca9a693.jpg',
      'z7324433800469_03c4b290ac5fcc06e7c7cc74d6e48de1.jpg',
      'z7324433802657_aaef80b9f2c687be715ae07670746734.jpg',
      'z7324433804240_9b1b4567e00feb0f0b020ff527a44a1a.jpg',
    ];
    return `/feedback/${imageNames[i]}`;
  });

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
        {/* Customer Feedback Images */}
        <div ref={ref} className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Phản hồi từ <span className="text-primary">Khách hàng</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto md:text-lg">
              Tin nhắn, đánh giá và thanh toán từ khách hàng thực tế
            </p>
          </div>

          {/* Infinite Scrolling Carousel */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes scroll-left-spin {
                0% { transform: translateX(0); }
                100% { transform: translateX(-200%); }
              }
              .animate-scroll-left {
                animation: scroll-left-spin 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, scroll-left 25s linear 2s infinite;
              }
            `}</style>
            
            {/* First Row - Scroll Left */}
            <div className={`flex gap-4 mb-4 ${isVisible ? 'animate-scroll-left' : ''}`}>
              {[...feedbackImages, ...feedbackImages, ...feedbackImages, ...feedbackImages].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative flex-shrink-0 h-64 md:h-80 rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={image}
                    alt={`Feedback ${index + 1}`}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Second Row - Scroll Right */}
            <style>{`
              @keyframes scroll-right {
                0% { transform: translateX(-25%); }
                100% { transform: translateX(-75%); }
              }
              @keyframes scroll-right-spin {
                0% { transform: translateX(-25%); }
                100% { transform: translateX(-225%); }
              }
              .animate-scroll-right {
                animation: scroll-right-spin 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, scroll-right 25s linear 2s infinite;
              }
            `}</style>
            
            <div className={`flex gap-4 ${isVisible ? 'animate-scroll-right' : ''}`}>
              {[...feedbackImages.slice().reverse(), ...feedbackImages.slice().reverse(), ...feedbackImages.slice().reverse(), ...feedbackImages.slice().reverse()].map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative flex-shrink-0 h-64 md:h-80 rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={image}
                    alt={`Feedback ${index + 1}`}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

