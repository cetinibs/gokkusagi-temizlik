export interface ServiceData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  emoji: string;
  features: string[];
  benefits: string[];
  process: string[];
  keywords: string[];
  metaDescription: string;
}

export const servicesData: Record<string, ServiceData> = {
  "bos-ev-temizligi": {
    id: "bos-ev-temizligi",
    title: "Boş Ev Temizliği",
    description: "Taşınma öncesi ve sonrası profesyonel boş ev temizliği hizmetimiz ile eviniz pırıl pırıl olsun. Uzman temizlik ekibimiz, mutfaktan banyoya, pencerelerden zeminlere kadar evinizin her köşesini detaylı bir şekilde temizler. Yeni evinize taşınırken veya eski evinizi teslim ederken evinizin tertemiz olmasını sağlıyoruz. İstanbul'un tüm ilçelerinde boş ev temizliği hizmeti sunuyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1527342959657-ddbaa82495d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzYwNDIzNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏠",
    features: [
      "Kapsamlı mutfak temizliği",
      "Detaylı banyo ve WC temizliği",
      "Cam ve pencere silimi",
      "Zemin ve parke bakımı",
      "Dolap içi ve dışı temizliği",
      "Toz alma ve vakumlama",
      "Balkon temizliği",
      "Petek ve radyatör temizliği"
    ],
    benefits: [
      "Profesyonel temizlik ekibi",
      "Ekolojik temizlik ürünleri",
      "Aynı gün hizmet imkanı",
      "Uygun fiyat garantisi",
      "Güvence belgeli hizmet",
      "Taşınma öncesi/sonrası özel paketler",
      "7/24 müşteri desteği"
    ],
    process: [
      "Ücretsiz keşif ve fiyat teklifi",
      "Randevu tarihi ve saati belirleme",
      "Profesyonel ekip tarafından detaylı temizlik",
      "Kalite kontrol ve son gözden geçirme",
      "Müşteri memnuniyeti onayı"
    ],
    keywords: [
      "boş ev temizliği istanbul",
      "taşınma temizliği",
      "ev temizlik şirketi",
      "profesyonel ev temizliği",
      "detaylı ev temizliği",
      "kiralık ev temizliği",
      "daire temizliği",
      "taşınırken temizlik"
    ],
    metaDescription: "İstanbul'da profesyonel boş ev temizliği hizmeti. Taşınma öncesi ve sonrası kapsamlı ev temizliği. Uygun fiyat, aynı gün hizmet."
  },
  "villa-temizligi": {
    id: "villa-temizligi",
    title: "Villa Temizliği",
    description: "Geniş alanlı villa ve müstakil evlerin temizliği için özel olarak tasarlanmış profesyonel hizmetimiz. Bahçeden havuza, çok katlı iç mekanlara kadar villanızın tamamını en ince detayına kadar temizliyoruz. Deneyimli ekibimiz büyük alanlarda çalışma konusunda uzmandır. Lüks villa temizliği için özel ekipman ve ürünler kullanıyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1650532897813-d92427f7d229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MDQyMzU2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏰",
    features: [
      "Çok katlı villa temizliği",
      "Bahçe ve dış alan temizliği",
      "Havuz bakım ve temizliği",
      "Geniş salon ve odaların temizliği",
      "Teras ve balkon temizliği",
      "Yüksek tavanlar ve avizelerin temizliği",
      "Mermer ve özel zemin bakımı",
      "Garaj temizliği"
    ],
    benefits: [
      "Büyük alan temizliği konusunda uzman ekip",
      "Lüks mekanlar için özel ürünler",
      "Düzenli temizlik programları",
      "Özel ekipman ve teknoloji",
      "Gizlilik ve güven garantisi",
      "Esnek çalışma saatleri",
      "Havuz bakım hizmeti dahil"
    ],
    process: [
      "Villa keşfi ve ihtiyaç analizi",
      "Özel temizlik planı oluşturma",
      "Deneyimli ekip ile detaylı temizlik",
      "Bahçe ve dış alan düzenlemesi",
      "Kalite kontrol ve müşteri onayı"
    ],
    keywords: [
      "villa temizliği istanbul",
      "lüks villa temizliği",
      "müstakil ev temizliği",
      "bahçeli ev temizliği",
      "havuzlu villa temizliği",
      "büyük ev temizliği",
      "villa temizlik şirketi",
      "kotra temizliği"
    ],
    metaDescription: "İstanbul'da profesyonel villa temizliği hizmeti. Bahçe, havuz ve geniş iç mekanların detaylı temizliği. Deneyimli ekip, uygun fiyat."
  },
  "ofis-temizligi": {
    id: "ofis-temizligi",
    title: "Ofis Temizliği",
    description: "İş yerinizin hijyeni ve temizliği için profesyonel ofis temizlik hizmeti sunuyoruz. Çalışma ortamınızın her zaman temiz ve düzenli olması için düzenli veya tek seferlik ofis temizliği yapıyoruz. Toplantı odalarından çalışma alanlarına, mutfaktan tuvaletlere kadar ofis temizliğinin tüm detaylarını profesyonelce hallediyoruz. İstanbul'daki işletmelere özel ofis temizliği paketleri.",
    imageUrl: "https://images.unsplash.com/photo-1646194118794-9cd7b10409a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDM4ODExMnww&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏢",
    features: [
      "Çalışma masası ve sandalye temizliği",
      "Toplantı salonu temizliği",
      "Ofis mutfağı ve çay ocağı",
      "WC ve lavabo dezenfeksiyonu",
      "Zemin silme ve vakumlama",
      "Cam ve pencere temizliği",
      "Çöp toplama ve atık yönetimi",
      "Resepsiyon alanı temizliği"
    ],
    benefits: [
      "Mesai dışı temizlik hizmeti",
      "Günlük, haftalık veya aylık paketler",
      "Sessiz ve hızlı çalışma",
      "İşyerinize özel temizlik planı",
      "Sertifikalı temizlik ürünleri",
      "Kurumsal faturalama",
      "Düzenli kalite kontrol"
    ],
    process: [
      "Ofis alanının incelenmesi",
      "Özel temizlik programı oluşturma",
      "Uygun zaman diliminde temizlik",
      "Düzenli kontrol ve raporlama",
      "Müşteri memnuniyet değerlendirmesi"
    ],
    keywords: [
      "ofis temizliği istanbul",
      "işyeri temizliği",
      "kurumsal temizlik hizmeti",
      "ofis temizlik şirketi",
      "profesyonel ofis temizliği",
      "düzenli ofis temizliği",
      "plaza temizliği",
      "iş merkezi temizliği"
    ],
    metaDescription: "İstanbul'da profesyonel ofis temizliği hizmeti. Düzenli veya tek seferlik işyeri temizliği. Mesai dışı hizmet, uygun fiyat."
  },
  "avm-temizligi": {
    id: "avm-temizligi",
    title: "AVM Temizliği",
    description: "Alışveriş merkezleri için kapsamlı ve profesyonel temizlik hizmetleri sunuyoruz. AVM'lerin yoğun insan trafiği nedeniyle sürekli temiz tutulması gerekir. Ortak alanlardan mağaza önlerine, asansörlerden tuvaletlere kadar AVM'nizin her noktasını hijyenik ve temiz tutuyoruz. 7/24 hizmet veren ekibimizle AVM temizliğinde uzmanız.",
    imageUrl: "https://images.unsplash.com/photo-1694064500485-405140238c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzODg5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏪",
    features: [
      "Ortak alan temizliği",
      "Asansör ve yürüyen merdiven temizliği",
      "WC ve lavabo sürekli temizlik",
      "Zemin bakımı ve cilalama",
      "Cam yüzey temizliği",
      "Çöp toplama ve atık yönetimi",
      "Food court alanı temizliği",
      "Otopark temizliği"
    ],
    benefits: [
      "7/24 kesintisiz hizmet",
      "Büyük mekanlar için özel ekip",
      "Yüksek trafikli alan deneyimi",
      "Profesyonel ekipman kullanımı",
      "Hızlı müdahale ekibi",
      "Kurumsal sözleşmeler",
      "Düzenli süpervizör kontrol"
    ],
    process: [
      "AVM yönetimi ile görüşme",
      "Kapsamlı alan analizi",
      "Özel temizlik programı hazırlama",
      "Deneyimli ekip görevlendirme",
      "Sürekli kalite kontrol ve raporlama"
    ],
    keywords: [
      "avm temizliği istanbul",
      "alışveriş merkezi temizliği",
      "avm temizlik şirketi",
      "profesyonel avm temizliği",
      "alışveriş merkezi hijyen",
      "avm yer bakımı",
      "ticari alan temizliği",
      "mall temizliği"
    ],
    metaDescription: "İstanbul'da profesyonel AVM temizliği hizmeti. 7/24 alışveriş merkezi temizliği, ortak alan bakımı. Deneyimli ekip."
  },
  "otel-temizligi": {
    id: "otel-temizligi",
    title: "Otel Temizliği",
    description: "Otel ve konaklama tesisleri için profesyonel temizlik ve hijyen hizmetleri sunuyoruz. Misafir odalarından lobi alanına, restorantan spa merkezine kadar otelinizin tüm alanlarında en yüksek temizlik standartlarını sağlıyoruz. Otel işletmenizin itibarı için kritik önem taşıyan temizlik ve hijyeni profesyonel ekibimizle garanti altına alıyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1590761044169-b9ad903fca4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjA0MjM1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏨",
    features: [
      "Misafir oda temizliği ve hazırlama",
      "Lobi ve resepsiyon temizliği",
      "Restoran ve kahvaltı salonu",
      "Spa ve fitness merkezi temizliği",
      "Toplantı ve konferans salonu",
      "Çamaşırhane hizmeti",
      "Ortak alan ve koridor temizliği",
      "Havuz ve jakuzi bakımı"
    ],
    benefits: [
      "Turizm sektörü deneyimi",
      "Hızlı oda devir hizmeti",
      "Esnek çalışma saatleri",
      "Misafir memnuniyeti odaklı",
      "Otel standartlarına uygun",
      "Düzenli personel eğitimi",
      "Acil temizlik hizmeti"
    ],
    process: [
      "Otel yönetimi ile ihtiyaç belirleme",
      "Özel temizlik protokolü oluşturma",
      "Eğitimli personel görevlendirme",
      "Günlük temizlik ve kontrol",
      "Düzenli performans değerlendirme"
    ],
    keywords: [
      "otel temizliği istanbul",
      "konaklama tesisi temizliği",
      "otel oda temizliği",
      "profesyonel otel temizliği",
      "otel hijyen hizmeti",
      "butik otel temizliği",
      "apart otel temizliği",
      "pansiyon temizliği"
    ],
    metaDescription: "İstanbul'da profesyonel otel temizliği hizmeti. Oda, lobi ve ortak alan temizliği. Turizm sektörü deneyimi, hızlı hizmet."
  },
  "yazlik-temizligi": {
    id: "yazlik-temizligi",
    title: "Yazlık Temizliği",
    description: "Sezon öncesi ve sonrası yazlık evlerinizin profesyonel temizliği için buradayız. Uzun süre kullanılmayan yazlıklar özel temizlik gerektir. Deniz havasının etkileri, toz ve nemi profesyonel ekipmanlarla temizliyoruz. Bahçeden havuza, iç mekanlardan teraslara kadar yazlık evinizin tüm detaylarını titizlikle temizliyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1624211809805-faf35cfb9490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwc3VtbWVyfGVufDF8fHx8MTc2MDQyMzU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏖️",
    features: [
      "Sezon öncesi genel temizlik",
      "Nem ve küf giderme",
      "Bahçe ve dış alan düzenleme",
      "Havuz temizliği ve hazırlama",
      "Teras ve balkon temizliği",
      "Mobilya bakımı ve temizliği",
      "Mutfak ve banyo dezenfeksiyonu",
      "Sezon sonu kapatma temizliği"
    ],
    benefits: [
      "Sezon öncesi hızlı hazırlık",
      "Deniz havası etkisi giderme",
      "Bahçe bakım hizmeti",
      "Esnek randevu saatleri",
      "Kiralık yazlık hazırlığı",
      "Uzun süre boş kalan ev temizliği",
      "Düzenli bakım paketleri"
    ],
    process: [
      "Yazlık keşfi ve durum tespiti",
      "Kapsamlı temizlik planı hazırlama",
      "İç ve dış mekan temizliği",
      "Bahçe ve havuz bakımı",
      "Son kontrol ve müşteri teslimi"
    ],
    keywords: [
      "yazlık ev temizliği",
      "sezon öncesi temizlik",
      "sahil evi temizliği",
      "villa yazlık temizliği",
      "yaz evi temizlik hizmeti",
      "tatil evi temizliği",
      "kiralık yazlık temizliği",
      "yazlık açılış temizliği"
    ],
    metaDescription: "Yazlık ev temizliği hizmeti. Sezon öncesi ve sonrası kapsamlı temizlik. Bahçe, havuz ve iç mekan temizliği. Hızlı hizmet."
  },
  "dis-cephe-cam-temizligi": {
    id: "dis-cephe-cam-temizligi",
    title: "Dış Cephe Cam Temizliği",
    description: "Yüksek bina ve iş merkezlerinin dış cephe cam temizliği için profesyonel hizmet sunuyoruz. Güvenlik standartlarına uygun ekipman ve deneyimli personelimizle yüksekte güvenli çalışma yapıyoruz. Alpinist tekniği ile veya vinç kullanarak her türlü yükseklikteki camları tertemiz ediyoruz. Plazalar, iş merkezleri ve apartmanlar için ideal.",
    imageUrl: "https://images.unsplash.com/photo-1624113651182-28d57b3d3fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZyUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzYwNDIzNTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🪟",
    features: [
      "Alpinist tekniği ile cam temizliği",
      "Vinç ve platform kullanımı",
      "Yüksek bina cam temizliği",
      "Cephe camı parlatma",
      "İş güvenliği ekipmanları",
      "Kireç ve leke çıkarma",
      "Isı cam temizliği",
      "Pencere çerçeve temizliği"
    ],
    benefits: [
      "İş güvenliği sertifikalı ekip",
      "Profesyonel alpinist kadro",
      "Özel temizlik ekipmanları",
      "Sigortalı çalışma garantisi",
      "Hızlı ve güvenli hizmet",
      "Düzenli bakım programları",
      "Her yükseklik için uygun"
    ],
    process: [
      "Bina keşfi ve risk analizi",
      "Güvenlik planlaması",
      "Özel ekipman hazırlığı",
      "Profesyonel ekip ile temizlik",
      "Güvenlik kontrol ve teslim"
    ],
    keywords: [
      "dış cephe cam temizliği",
      "yüksek cam temizliği",
      "alpinist cam temizliği",
      "plaza cam temizliği",
      "bina cephe temizliği",
      "cam silme hizmeti",
      "profesyonel cam temizliği",
      "gökdelen cam temizliği"
    ],
    metaDescription: "Profesyonel dış cephe cam temizliği. Yüksek bina ve plaza cam temizliği. Alpinist teknik, güvenli hizmet, uygun fiyat."
  },
  "insaat-sonrasi-temizlik": {
    id: "insaat-sonrasi-temizlik",
    title: "İnşaat Sonrası Temizlik",
    description: "Yeni biten inşaat, tadilat veya renovasyon sonrası profesyonel temizlik hizmeti sunuyoruz. İnşaat artıkları, boya lekeleri, alçı ve çimento kalıntılarını özel ekipmanlarla temizliyoruz. Müteahhitler, gayrimenkul şirketleri ve ev sahipleri için ideal inşaat sonrası temizlik hizmeti. Bina teslimleri öncesi mükemmel temizlik garantisi.",
    imageUrl: "https://images.unsplash.com/photo-1636367393690-1f07c7413851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwNDEzOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏗️",
    features: [
      "İnşaat tozu ve atık temizliği",
      "Boya ve çimento lekesi çıkarma",
      "Cam koruyucu sökme ve cam temizliği",
      "Zemin ilk temizlik ve cilalama",
      "Banyo ve mutfak ince temizlik",
      "Elektrik ve tesisat temizliği",
      "Dolap içi ve dışı temizliği",
      "Kapı ve pencere temizliği"
    ],
    benefits: [
      "İnşaat temizliği konusunda uzman",
      "Özel temizlik ekipmanları",
      "Hızlı teslim garantisi",
      "Müteahhit firmalar için paketler",
      "Teslim öncesi son kontrol",
      "Uygun metrekare fiyatı",
      "Büyük projeler için iskonto"
    ],
    process: [
      "Şantiye keşfi ve toz tespiti",
      "Kaba temizlik ile başlangıç",
      "Detaylı ince temizlik",
      "Zemin bakım ve cilalama",
      "Son kontrol ve müşteri onayı"
    ],
    keywords: [
      "inşaat sonrası temizlik",
      "tadilat sonrası temizlik",
      "şantiye temizliği",
      "yeni ev temizliği",
      "boya badana temizliği",
      "renovasyon sonrası temizlik",
      "daire teslim temizliği",
      "inşaat tozu temizleme"
    ],
    metaDescription: "İnşaat sonrası profesyonel temizlik hizmeti. Tadilat, renovasyon sonrası detaylı temizlik. Hızlı teslim, uygun m2 fiyatı."
  },
  "okul-temizligi": {
    id: "okul-temizligi",
    title: "Okul Temizliği",
    description: "Eğitim kurumları için hijyenik ve güvenli ortam temizlik hizmetleri sunuyoruz. Okullar, çocukların ve gençlerin sağlığı için en yüksek hijyen standartlarını gerektirir. Sınıflardan koridorlara, yemekhaneden tuvaletlere kadar okul binasının tüm alanlarını düzenli olarak temizliyoruz. Çocuk sağlığına uygun ekolojik ürünler kullanıyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYwMzUyOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏫",
    features: [
      "Sınıf ve derslik temizliği",
      "Koridor ve merdiven temizliği",
      "WC ve lavabo dezenfeksiyonu",
      "Yemekhane hijyen temizliği",
      "Kütüphane ve laboratuvar",
      "Spor salonu temizliği",
      "Öğretmenler odası temizliği",
      "Bahçe ve oyun alanı"
    ],
    benefits: [
      "Çocuk sağlığına uygun ürünler",
      "Eğitim saatleri dışında hizmet",
      "Düzenli dezenfeksiyon",
      "Deneyimli ve güvenilir personel",
      "Milli Eğitim onaylı",
      "Kurumsal sözleşme imkanı",
      "Dönemsel derin temizlik"
    ],
    process: [
      "Okul yönetimi ile görüşme",
      "Eğitim alanlarının planlanması",
      "Çocuk dostu ürün seçimi",
      "Düzenli temizlik uygulaması",
      "Haftalık raporlama ve kontrol"
    ],
    keywords: [
      "okul temizliği istanbul",
      "eğitim kurumu temizliği",
      "sınıf temizliği",
      "kreş temizliği",
      "anaokulu temizlik hizmeti",
      "lise temizliği",
      "üniversite temizliği",
      "öğrenci yurdu temizliği"
    ],
    metaDescription: "Profesyonel okul temizliği hizmeti. Sınıf, koridor ve ortak alan hijyeni. Çocuk sağlığına uygun ürünler, güvenilir hizmet."
  },
  "isyeri-temizligi": {
    id: "isyeri-temizligi",
    title: "İşyeri Temizliği",
    description: "Her türlü işyeri için özelleştirilmiş profesyonel temizlik çözümleri sunuyoruz. Dükkan, mağaza, kafe, restoran, berber, kuaför ve diğer tüm işyerlerinin temizliğinde uzmanız. İşletmenizin türüne özel temizlik planı oluşturuyor ve müşterilerinize temiz bir ortam sunmanızı sağlıyoruz. Günlük, haftalık veya aylık paket seçenekleri.",
    imageUrl: "https://images.unsplash.com/photo-1716635174919-e6aec2d1c45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzYwNDIzNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "💼",
    features: [
      "Mağaza ve dükkan temizliği",
      "Restoran ve kafe temizliği",
      "Berber ve kuaför salonu",
      "Esnaf işyeri temizliği",
      "Vitrin ve cam temizliği",
      "Zemin bakım ve parlatma",
      "WC ve lavabo hijyeni",
      "Depo ve arka alan temizliği"
    ],
    benefits: [
      "İşletmenize özel temizlik planı",
      "Açılış veya kapanış saatinde hizmet",
      "Esnek paket seçenekleri",
      "Hızlı ve sessiz çalışma",
      "Müşteri memnuniyetini artırır",
      "Uygun fiyat garantisi",
      "Düzenli ve güvenilir hizmet"
    ],
    process: [
      "İşyeri ziyareti ve analiz",
      "İşletme tipine özel plan",
      "Uygun zamanda temizlik",
      "Düzenli kalite kontrol",
      "İşletme sahibi geri bildirimi"
    ],
    keywords: [
      "işyeri temizliği istanbul",
      "mağaza temizliği",
      "dükkan temizlik hizmeti",
      "restoran temizliği",
      "kafe temizliği",
      "esnaf temizlik şirketi",
      "küçük işyeri temizliği",
      "ticari alan temizliği"
    ],
    metaDescription: "Profesyonel işyeri temizliği hizmeti. Mağaza, restoran, kafe ve esnaf işyerleri için özel temizlik. Esnek saatler, uygun fiyat."
  },
  "klinik-temizligi": {
    id: "klinik-temizligi",
    title: "Klinik Temizliği",
    description: "Sağlık kuruluşları için sterilizasyon ve hijyen odaklı profesyonel temizlik hizmeti sunuyoruz. Klinikler, poliklinikler ve sağlık merkezlerinde hasta ve personel sağlığı için en yüksek temizlik standartlarını uyguluyoruz. Tıbbi atık yönetimi, dezenfeksiyon ve sterilizasyon konularında uzman ekibimiz ile sağlık sektörüne hizmet veriyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1593786950861-3b753eb67c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwY2xlYW58ZW58MXx8fHwxNzYwNDIzNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏥",
    features: [
      "Muayene odası sterilizasyonu",
      "Bekleme alanı hijyeni",
      "Tıbbi atık yönetimi",
      "Ameliyathane temizliği",
      "Laboratuvar dezenfeksiyonu",
      "Tıbbi cihaz temizliği",
      "WC ve lavabo sterilizasyonu",
      "Koridor ve resepsiyon"
    ],
    benefits: [
      "Sağlık sektörü deneyimi",
      "Tıbbi hijyen standartları",
      "Sertifikalı temizlik ürünleri",
      "Düzenli dezenfeksiyon",
      "Hasta güvenliği odaklı",
      "Sağlık Bakanlığı uyumlu",
      "Acil temizlik hizmeti"
    ],
    process: [
      "Klinik hijyen analizi",
      "Tıbbi standartlara uygun plan",
      "Özel eğitimli personel",
      "Düzenli sterilizasyon",
      "Haftalık hijyen raporlama"
    ],
    keywords: [
      "klinik temizliği istanbul",
      "poliklinik temizliği",
      "sağlık merkezi temizliği",
      "tıbbi hijyen hizmeti",
      "muayenehane temizliği",
      "diş kliniği temizliği",
      "estetik klinik temizliği",
      "özel klinik temizliği"
    ],
    metaDescription: "Profesyonel klinik temizliği hizmeti. Sterilizasyon, dezenfeksiyon ve tıbbi hijyen. Sağlık sektörü deneyimi, güvenilir hizmet."
  },
  "hastane-temizligi": {
    id: "hastane-temizligi",
    title: "Hastane Temizliği",
    description: "Hastaneler için en yüksek hijyen standartlarında profesyonel temizlik hizmeti sunuyoruz. Ameliyathaneden yoğun bakıma, servislerden ortak alanlara kadar hastanenin tüm bölümlerinde enfeksiyon kontrolü ve sterilizasyon sağlıyoruz. Hasta ve sağlık personeli güvenliği için kritik olan hastane temizliğinde yıllara dayanan deneyimimiz var.",
    imageUrl: "https://images.unsplash.com/photo-1631507623104-aa66944677aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjA0MjM1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏥",
    features: [
      "Ameliyathane sterilizasyonu",
      "Yoğun bakım özel temizlik",
      "Hasta odası günlük hijyen",
      "Acil servis temizliği",
      "Poliklinik alanları",
      "Tıbbi atık yönetimi",
      "Enfeksiyon kontrolü",
      "Ortak alan dezenfeksiyonu"
    ],
    benefits: [
      "Hastane hijyen standartları",
      "7/24 kesintisiz hizmet",
      "Enfeksiyon kontrol uzmanı",
      "Sertifikalı medikal ürünler",
      "Deneyimli sağlık personeli",
      "Düzenli denetim ve raporlama",
      "Acil müdahale ekibi"
    ],
    process: [
      "Hastane yönetimi koordinasyonu",
      "Bölüm bazlı hijyen planı",
      "Özel eğitimli personel görevlendirme",
      "7/24 temizlik ve dezenfeksiyon",
      "Günlük raporlama ve denetim"
    ],
    keywords: [
      "hastane temizliği istanbul",
      "hastane hijyen hizmeti",
      "ameliyathane temizliği",
      "sağlık tesisi temizliği",
      "tıp merkezi temizliği",
      "özel hastane temizliği",
      "devlet hastanesi temizliği",
      "kamu hastanesi hizmeti"
    ],
    metaDescription: "Profesyonel hastane temizliği hizmeti. Ameliyathane, yoğun bakım ve servis hijyeni. 7/24 hizmet, enfeksiyon kontrolü."
  },
  "dezenfeksiyon-hizmeti": {
    id: "dezenfeksiyon-hizmeti",
    title: "Dezenfeksiyon Hizmeti",
    description: "Pandemi sonrası artan dezenfeksiyon ihtiyacı için profesyonel hijyen hizmetleri sunuyoruz. Virüs, bakteri ve mikropları yok eden sertifikalı dezenfektan ürünler kullanıyoruz. Ev, ofis, işyeri, okul ve tüm kapalı mekanlarda ULV cihazları ile kapsamlı dezenfeksiyon yapıyoruz. Sağlık Bakanlığı onaylı ürünler ve yöntemlerle hizmet veriyoruz.",
    imageUrl: "https://images.unsplash.com/photo-1624884269715-70759892cd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNpbmZlY3Rpb24lMjBjbGVhbmluZyUyMHNwcmF5fGVufDF8fHx8MTc2MDQyMzU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🦠",
    features: [
      "ULV cihazı ile ilaçlama",
      "Virüs ve bakteri yok etme",
      "Temas yüzeyleri dezenfeksiyonu",
      "Hava dezenfeksiyonu",
      "Hijyen sertifikası",
      "Covid-19 önlemleri",
      "Ekolojik dezenfektan",
      "Kokusuz uygulama"
    ],
    benefits: [
      "Sağlık Bakanlığı onaylı ürünler",
      "Profesyonel ULV ekipmanı",
      "Hızlı ve etkili sonuç",
      "İnsan ve çevre dostu",
      "Düzenli dezenfeksiyon programları",
      "Hijyen belgesi verilir",
      "Acil dezenfeksiyon hizmeti"
    ],
    process: [
      "Mekan keşfi ve analiz",
      "Uygun dezenfektan seçimi",
      "ULV cihazı ile uygulama",
      "Temas noktaları özel temizlik",
      "Hijyen sertifikası teslimi"
    ],
    keywords: [
      "dezenfeksiyon hizmeti istanbul",
      "ilaçlama ve dezenfeksiyon",
      "covid dezenfeksiyonu",
      "virüs dezenfeksiyonu",
      "ofis dezenfeksiyonu",
      "ev dezenfeksiyonu",
      "ulv ilaçlama",
      "hijyen sertifikası"
    ],
    metaDescription: "Profesyonel dezenfeksiyon hizmeti. Virüs, bakteri ve mikrop temizliği. ULV cihazı, sertifikalı ürünler, hijyen belgesi."
  },
  "endustriyel-temizlik": {
    id: "endustriyel-temizlik",
    title: "Endüstriyel Temizlik",
    description: "Fabrika, üretim tesisi ve endüstriyel alanların profesyonel temizliği için hizmet veriyoruz. Ağır sanayi, üretim hatları, depo ve lojistik merkezlerinin temizliğinde uzman ekibimiz var. Özel endüstriyel temizlik ekipmanları, kimyasalları ve deneyimli personelimizle büyük ölçekli projeleri başarıyla tamamlıyoruz. İş güvenliği standartlarına tam uyum.",
    imageUrl: "https://images.unsplash.com/photo-1715783058283-2e31a1cb7684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjA0MjM1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    emoji: "🏭",
    features: [
      "Üretim alanı temizliği",
      "Makine ve ekipman temizliği",
      "Depo ve ardiye temizliği",
      "Yüksek basınçlı yıkama",
      "Yağ ve kimyasal temizliği",
      "Yüksekte çalışma hizmeti",
      "Atık ve hurda toplama",
      "Baca ve havalandırma temizliği"
    ],
    benefits: [
      "Endüstriyel alan deneyimi",
      "Özel temizlik ekipmanları",
      "İş güvenliği sertifikalı ekip",
      "Büyük ölçekli proje yönetimi",
      "Üretimi durdurmadan temizlik",
      "Kimyasal temizlik uzmanlığı",
      "Düzenli bakım sözleşmeleri"
    ],
    process: [
      "Tesis keşfi ve ihtiyaç analizi",
      "Endüstriyel temizlik planı",
      "Özel ekipman hazırlığı",
      "Güvenlik önlemleri ile temizlik",
      "Periyodik bakım ve raporlama"
    ],
    keywords: [
      "endüstriyel temizlik istanbul",
      "fabrika temizliği",
      "üretim tesisi temizliği",
      "sanayi temizlik hizmeti",
      "depo temizliği",
      "lojistik merkezi temizliği",
      "ağır sanayi temizliği",
      "atölye temizliği"
    ],
    metaDescription: "Profesyonel endüstriyel temizlik hizmeti. Fabrika, üretim tesisi ve depo temizliği. Özel ekipman, deneyimli ekip, güvenli hizmet."
  }
};

export const servicesList = Object.values(servicesData);
