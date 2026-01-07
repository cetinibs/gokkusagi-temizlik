import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { trackPhoneCall } from "../utils/conversion-tracking";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Boş Ev Temizliği",
    "Villa Temizliği",
    "Ofis Temizliği",
    "AVM Temizliği",
    "Otel Temizliği",
    "Hastane Temizliği"
  ];

  const districts = [
    "Kadıköy",
    "Beşiktaş",
    "Şişli",
    "Beyoğlu",
    "Üsküdar",
    "Sarıyer"
  ];

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    trackPhoneCall(phoneNumber);
    setTimeout(() => {
      window.location.href = `tel:${phoneNumber}`;
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-sm">
              İstanbul'un tüm ilçelerinde profesyonel temizlik hizmetleri sunuyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#hizmetler" className="text-sm hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2">
              {districts.map((district, index) => (
                <li key={index} className="text-sm">
                  {district}
                </li>
              ))}
              <li className="text-sm">ve tüm İstanbul...</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+905524159944"
                  onClick={(e) => handlePhoneClick(e, "+905524159944")}
                  className="hover:text-white transition-colors"
                >
                  0552 415 99 44
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+905467630261"
                  onClick={(e) => handlePhoneClick(e, "+905467630261")}
                  className="hover:text-white transition-colors"
                >
                  0546 763 02 61
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/905524159944?text=Merhaba%2C%20temizlik%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@gokkusagitemizlik.com" className="hover:text-white transition-colors">
                  info@gokkusagitemizlik.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>İKİTELİ OSB MAH. İSTEKS B6 BLOK SK. NO:19 BAŞAKŞEHİR/İSTANBUL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} GÖKKUŞAĞI Temizlik Hizmetleri. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
