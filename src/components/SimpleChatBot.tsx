import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import logoWhite from "@/assets/ximitech.png";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

export const SimpleChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Xin chào! Mình là AI Assistant của XimiTech 😊\n\nBạn cần tư vấn về Website, App Mobile, AI Chatbot hay Đồ án CNTT?", 
      isBot: true,
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Groq API Configuration
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
  const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isTyping) return;
    
    // Clear input immediately before any async operations
    setInput("");
    
    const userMessage = textToSend;
    const userMsg: Message = {
      text: userMessage,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      // System prompt about XimiTech
      const systemPrompt = `Bạn là chatbot AI của XimiTech - công ty chuyên cung cấp giải pháp IT toàn diện. Nói chuyện thân thiện, tự nhiên và chuyên nghiệp.

THÔNG TIN XIMITECH:
- Chủ sở hữu: Trần Thanh Độ, sinh năm 2004, học tại Đại học Kinh tế - Tài chính TP.HCM (UEF), sống tại Vinhomes Grand Park, TP.HCM
- Dịch vụ: Thiết kế website, phát triển app mobile (Android & iOS), ứng dụng AI & chatbot, làm đồ án CNTT
- Công nghệ: React, Next.js, Node.js, Python, AI (OpenAI, Claude, Gemini, Groq), React Native, Flutter, Cloud (AWS, GCP), Docker, CI/CD
- Website: Responsive 100%, SEO tối ưu, tốc độ nhanh, bảo mật cao
- App Mobile: Cross-platform với React Native/Flutter, deploy lên App Store & Google Play
- AI/Chatbot: Tích hợp OpenAI, Claude, Gemini, Groq, RAG system, custom training, tích hợp Zalo/Facebook Messenger
- Đồ án CNTT: Code clean, document đầy đủ, hướng dẫn demo, bảo hành đến khi bảo vệ xong
- Thời gian: Website 3-10 ngày | App Mobile 1-2 tuần | Chatbot AI 1-2 ngày | Đồ án CNTT 1-2 tuần
- Bảo hành: 12 tháng, hỗ trợ 24/7 qua Zalo
- Liên hệ: Zalo 0888889805, Email: ximitech1309@gmail.com, Website: ximitech.vn

PHONG CÁCH TRẢ LỜI:
- Trả lời ngắn gọn, rõ ràng, dễ hiểu (2-3 câu)
- Thân thiện nhưng chuyên nghiệp, không quá tình cảm
- Dùng emoji vừa phải: 😊, 💻, 📱, ⚡, 🚀, ✨ (1-2 emoji mỗi câu trả lời)
- Tập trung vào thông tin hữu ích
- Khi khách hỏi về dịch vụ: Giới thiệu ngắn gọn + thời gian + giá trị mang lại
- Luôn kết thúc bằng câu hỏi hoặc gợi ý tiếp theo để tạo tương tác`;

      // Prepare conversation history for Groq (skip first bot greeting)
      const conversationHistory = messages
        .slice(1) // Skip the initial greeting message
        .filter(msg => !msg.isTyping)
        .map(msg => ({
          role: msg.isBot ? 'assistant' : 'user',
          content: msg.text
        }));

      // Call Groq API
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            ...conversationHistory,
            { role: "user", content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 200
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      
      // Get bot response
      const botResponse = data.choices[0]?.message?.content || 'Xin lỗi, tôi không hiểu. Bạn có thể hỏi lại được không? 😊';
      
      setIsTyping(false);
      
      // Add complete message at once (no typing effect to avoid duplicates)
      setMessages(prev => [...prev, { 
        text: botResponse, 
        isBot: true, 
        timestamp: new Date()
      }]);
      
    } catch (error) {
      console.error('API Error:', error);
      setIsTyping(false);
      
      // Add error message
      setMessages(prev => [...prev, {
        text: 'Xin lỗi, có lỗi xảy ra. Vui lòng liên hệ Zalo: 0888889805 để được hỗ trợ! 😊',
        isBot: true,
        timestamp: new Date()
      }]);
    }
  };

  const quickReplies = ["Thiết kế Website", "App Mobile", "Chatbot AI", "Đồ án CNTT", "Báo giá"];

  return (
    <>
      {/* Chat Button with Pulse and Greeting Bubble */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-end gap-3">
        {/* Greeting Bubble - Only show when chat is closed */}
        {!isOpen && (
          <div className="animate-in slide-in-from-right-5 duration-500 mb-2">
            <div className="bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[250px] border-2 border-primary/20 relative">
              <p className="text-sm font-medium text-gray-800">
                Xin chào! Cần tư vấn về dịch vụ IT? 😊
              </p>
              {/* Arrow pointing to button */}
              <div className="absolute -right-2 bottom-4 w-4 h-4 bg-white border-r-2 border-b-2 border-primary/20 transform rotate-[-45deg]"></div>
            </div>
          </div>
        )}
        
        {/* Chat Button */}
        <div className="relative">
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          )}
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 bg-gradient-to-br from-primary via-cyan-500 to-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Chat Widget - Professional Design */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[550px] bg-background rounded-2xl shadow-2xl border-2 border-primary/20 flex flex-col animate-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="relative p-4 bg-gradient-to-r from-primary via-cyan-500 to-primary text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/50 p-1.5">
                  <img src={logoWhite} alt="XimiTech" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base flex items-center gap-2">
                  XimiTech Assistant
                  <Sparkles className="h-4 w-4" />
                </h3>
                <p className="text-xs text-white/90 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Trả lời trong 1 giây
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-secondary/5 to-background">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"} animate-in slide-in-from-bottom-2`}
              >
                <div className={`max-w-[85%] ${msg.isBot ? "order-1" : "order-2"}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 shadow-md ${
                      msg.isBot
                        ? "bg-white border border-gray-200 text-gray-800"
                        : "bg-gradient-to-br from-primary to-cyan-600 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 px-2">
                    {msg.timestamp.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
              {quickReplies.map((reply, i) => (
                <Button
                  key={i}
                  size="sm"
                  variant="outline"
                  className="text-xs whitespace-nowrap border-primary/30 hover:bg-primary hover:text-white hover:border-primary transition-colors flex-shrink-0"
                  onClick={() => handleSend(reply)}
                >
                  {reply}
                </Button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-background">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                placeholder="Nhập câu hỏi của bạn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-2 focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-br from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-700 shadow-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

