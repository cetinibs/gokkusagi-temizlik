import { CheckCircle2, Star, ThumbsUp, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "1000+",
    label: "Mutlu Müşteri"
  },
  {
    icon: CheckCircle2,
    value: "5000+",
    label: "Tamamlanan Proje"
  },
  {
    icon: ThumbsUp,
    value: "%99",
    label: "Müşteri Memnuniyeti"
  },
  {
    icon: TrendingUp,
    value: "10+",
    label: "Yıllık Deneyim"
  }
];

const reasons = [
  {
    title: "Uygun Fiyatlar",
    description: "Kaliteden ödün vermeden en uygun fiyat garantisi sunuyoruz."
  },
  {
    title: "Hızlı Hizmet",
    description: "Zamanında ve hızlı şekilde işlerinizi tamamlıyoruz."
  },
  {
    title: "Eğitimli Personel",
    description: "Sertifikalı ve sürekli eğitim alan profesyonel ekibimiz."
  },
  {
    title: "Modern Ekipman",
    description: "En son teknoloji temizlik ekipmanları kullanıyoruz."
  },
  {
    title: "Çevre Dostu Ürünler",
    description: "İnsan ve çevre sağlığına uygun temizlik malzemeleri."
  },
  {
    title: "Esnek Çalışma Saatleri",
    description: "Size uygun zaman dilimlerinde hizmet veriyoruz."
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Neden GÖKKUŞAĞI?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İstanbul'da temizlik hizmeti konusunda tercih edilen firma olmanın gururunu yaşıyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 text-gray-900">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
