import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieAccepted");
    if (!hasAccepted) {
      // Show banner after 2 seconds
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1 pr-4">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Trang web này sử dụng công nghệ (như cookies) để phân tích thông tin về tương tác của bạn với trang web nhằm cá nhân hóa trải nghiệm và hiển thị nội dung phù hợp. Quản lý cookies bằng cách nhấp vào nút "Cài đặt Cookie". Bằng việc tiếp tục sử dụng trang web, bạn đồng ý với việc sử dụng các công nghệ này và{" "}
                <a href="#" className="text-primary hover:underline font-semibold">
                  Điều khoản sử dụng
                </a>
                {" "}cùng{" "}
                <a href="#" className="text-primary hover:underline font-semibold">
                  Chính sách bảo mật
                </a>
                {" "}của chúng tôi.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="outline"
                onClick={handleAccept}
                className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 font-semibold px-6 h-12"
              >
                Cài đặt Cookie
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 shadow-lg"
              >
                Chấp nhận
              </Button>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
