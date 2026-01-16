import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import heroImage from "figma:asset/a7edd8e2ad9c21e8218abee7190ef19b64483f59.png";
import { trackPhoneCall } from "../utils/conversion-tracking";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    trackPhoneCall(phoneNumber);
    setTimeout(() => {
      window.location.href = `tel:${phoneNumber}`;
    }, 100);
  };

  return (
    <section id="anasayfa" className="relative min-h-[600px] flex flex-col overflow-hidden">
      {/* Telefon Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3">
        <div className="container">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Phone className="h-5 w-5 text-white animate-pulse" />
            <a
              href="tel:+905467630261"
              onClick={(e) => handlePhoneClick(e, "+905467630261")}
              className="text-white text-xl font-bold hover:underline transition-all"
            >
              0546 763 02 61
            </a>
            <span className="text-white/90 text-sm hidden sm:inline">- Hemen Arayın, Ücretsiz Teklif Alın!</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10 top-[52px]" />

      <div className="container py-20 md:py-28 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              İstanbul'da Profesyonel Temizlik
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              GÖKKUŞAĞI Temizlik Hizmetleri
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              İstanbul'un tüm ilçelerinde profesyonel temizlik hizmetleri sunuyoruz.
              Ev, ofis, villa, AVM ve daha fazlası için uzman kadromuzla yanınızdayız.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>7/24 Hizmet Desteği</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Profesyonel ve Deneyimli Ekip</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Uygun Fiyat Garantisi</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("hizmetler")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Hizmetlerimizi Keşfet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/905467630261?text=Merhaba%2C%20temizlik%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum.", "_blank")}
              >
                Teklif Al
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroImage}
              alt="Gökkuşağı Temizlik Hizmetleri Ekibi"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
