import { Shield, Users, Clock, Award } from "lucide-react";
import aboutImage from "figma:asset/339fffd174e169f0e9b72f96cba68cca85fba8bb.png";

const features = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "Sigortalı ve eğitimli personelimizle güvenilir hizmet sunuyoruz."
  },
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description: "Alanında uzman ve deneyimli temizlik ekibimizle çalışıyoruz."
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "Her zaman ulaşabileceğiniz müşteri hizmetleri desteği."
  },
  {
    icon: Award,
    title: "Kalite Garantisi",
    description: "İşimizin arkasında duruyoruz, memnuniyet garantisi veriyoruz."
  }
];

export function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20" />
            <img
              src={aboutImage}
              alt="Gökkuşağı Temizlik Hizmetleri Ekibi"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              Hakkımızda
            </div>
            
            <h2 className="text-3xl md:text-4xl text-gray-900">
              GÖKKUŞAĞI Temizlik Hizmetleri
            </h2>
            
            <p className="text-lg text-gray-600">
              İstanbul'un tüm ilçelerinde faaliyet gösteren profesyonel temizlik firması olarak, 
              ev, ofis, villa ve kurumsal alanlarda üst düzey temizlik hizmetleri sunuyoruz.
            </p>

            <p className="text-gray-600">
              Deneyimli kadromuz, modern ekipmanlarımız ve müşteri memnuniyeti odaklı yaklaşımımızla 
              her projede mükemmel sonuçlar elde ediyoruz. Hijyen ve kalite standartlarında 
              asla taviz vermiyoruz.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1 text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
