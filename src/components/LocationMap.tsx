import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { ScrollReveal, TextReveal, WavyText } from "./ScrollReveal";

export const LocationMap = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal width="100%">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-4">
              <MapPin className="h-4 w-4" />
              Location
            </div>
          </ScrollReveal>
          
          <div className="flex justify-center items-center flex-wrap gap-x-3">
            <WavyText 
              text="Liên hệ &" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            />
            <WavyText 
              text="Địa chỉ" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            />
          </div>

          <div className="flex justify-center">
            <TextReveal 
              text="Hãy liên hệ với chúng tôi để được tư vấn miễn phí"
              className="text-lg text-gray-400 max-w-3xl mx-auto justify-center"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background/80 backdrop-blur-sm border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Địa chỉ</h4>
                    <p className="text-gray-400 text-sm">
                      66 Đường 39, Hiệp Bình Phước, TP. Thủ Đức, TP.HCM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hotline</h4>
                    <a 
                      href="tel:0888889805" 
                      className="text-primary hover:text-cyan-400 transition-colors"
                    >
                      088 888 9805
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Zalo: 0888889805</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:ximitech1309@gmail.com" 
                      className="text-primary hover:text-cyan-400 transition-colors"
                    >
                      ximitech1309@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Website</h4>
                    <a 
                      href="https://ximitech.vn" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-cyan-400 transition-colors"
                    >
                      https://ximitech.vn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-gray-400 text-sm text-center mb-4">
                  Hỗ trợ 24/7 - Tư vấn miễn phí
                </p>
                <a
                  href="https://zalo.me/0888889805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  Chat ngay qua Zalo
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-background/80 backdrop-blur-sm border-2 border-primary/20 rounded-xl overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.530949430014!2d106.70890321117518!3d10.84716228926132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175286e20901841%3A0x60867a3dd0e67243!2zNjYgxJDGsOG7nW5nIDM5LCBIaeG7h3AgQsOsbmggUGjGsOG7m2MsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1768654996543!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XimiTech Location - 66 Đường 39, Hiệp Bình Phước"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

