import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "bos-ev-temizligi",
    emoji: "🏠",
    title: "Boş Ev Temizliği",
    description: "Taşınma öncesi ve sonrası detaylı ev temizliği hizmeti. Her köşesi titizlikle temizlenir.",
    price: "Size Özel Fiyatlar",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "villa-temizligi",
    emoji: "🏰",
    title: "Villa Temizliği",
    description: "Büyük alan temizliği konusunda uzman ekibimizle villa ve geniş evlerin profesyonel temizliği.",
    price: "Size Özel Fiyatlar",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "ofis-temizligi",
    emoji: "🏢",
    title: "Ofis Temizliği",
    description: "İş yerinizin hijyeni için düzenli ofis temizlik hizmetleri. Profesyonel çalışma ortamı.",
    price: "Size Özel Fiyatlar",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: "avm-temizligi",
    emoji: "🏪",
    title: "AVM Temizliği",
    description: "Alışveriş merkezleri için kapsamlı temizlik hizmetleri. Yüksek kalite standartları.",
    price: "Size Özel Fiyatlar",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "otel-temizligi",
    emoji: "🏨",
    title: "Otel Temizliği",
    description: "Otel ve konaklama tesisleri için profesyonel temizlik ve hijyen hizmetleri.",
    price: "Size Özel Fiyatlar",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: "yazlik-temizligi",
    emoji: "🏖️",
    title: "Yazlık Temizliği",
    description: "Sezon öncesi ve sonrası yazlık ev temizliği. Detaylı bakım ve temizlik.",
    price: "Size Özel Fiyatlar",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: "dis-cephe-cam-temizligi",
    emoji: "🪟",
    title: "Dış Cephe Cam Temizliği",
    description: "Yüksek bina cam temizliği. Güvenli ve profesyonel ekipmanlarla hizmet.",
    price: "Size Özel Fiyatlar",
    gradient: "from-sky-500 to-indigo-500"
  },
  {
    id: "insaat-sonrasi-temizlik",
    emoji: "🏗️",
    title: "İnşaat Sonrası Temizlik",
    description: "Yeni biten inşaatların detaylı temizliği. Teslim öncesi mükemmel sonuç.",
    price: "Size Özel Fiyatlar",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "okul-temizligi",
    emoji: "🏫",
    title: "Okul Temizliği",
    description: "Eğitim kurumları için hijyenik ve güvenli ortam temizlik hizmetleri.",
    price: "Size Özel Fiyatlar",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: "isyeri-temizligi",
    emoji: "💼",
    title: "İşyeri Temizliği",
    description: "Her türlü işyeri için özelleştirilmiş temizlik çözümleri.",
    price: "Size Özel Fiyatlar",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    id: "klinik-temizligi",
    emoji: "🏥",
    title: "Klinik Temizliği",
    description: "Sağlık kuruluşları için sterilizasyon ve hijyen odaklı temizlik.",
    price: "Size Özel Fiyatlar",
    gradient: "from-red-500 to-pink-500"
  },
  {
    id: "hastane-temizligi",
    emoji: "🏥",
    title: "Hastane Temizliği",
    description: "Hastaneler için en yüksek hijyen standartlarında profesyonel temizlik.",
    price: "Size Özel Fiyatlar",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: "dezenfeksiyon-hizmeti",
    emoji: "🦠",
    title: "Dezenfeksiyon Hizmeti",
    description: "Pandemi dezenfeksiyon ve hijyen hizmetleri. Sertifikalı dezenfektan ürünleri.",
    price: "Size Özel Fiyatlar",
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: "endustriyel-temizlik",
    emoji: "🏭",
    title: "Endüstriyel Temizlik",
    description: "Fabrika ve endüstriyel tesis temizliği. Özel ekipman ve uzman personel.",
    price: "Size Özel Fiyatlar",
    gradient: "from-gray-500 to-slate-600"
  }
];

export function Services() {
  const openWhatsApp = (serviceName: string) => {
    const message = `Merhaba, ${serviceName} hizmeti için teklif almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905524159944?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Hizmetlerimiz
          </Badge>
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Profesyonel Temizlik Çözümlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İstanbul'un tüm ilçelerinde geniş hizmet yelpazesiyle her türlü temizlik ihtiyacınız için yanınızdayız.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/hizmet/${service.id}`}
              className="block"
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden cursor-pointer h-full"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-5xl mb-4">{service.emoji}</div>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pt-4 border-t">
                    <p className="text-blue-600">{service.price}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      openWhatsApp(service.title);
                    }}
                  >
                    Teklif Al
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
