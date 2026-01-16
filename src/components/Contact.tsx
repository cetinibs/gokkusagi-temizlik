import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { trackPhoneCall } from "../utils/conversion-tracking";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Google Ads Conversion Tracking for Form Submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17651373667/sn1UCPfN564bEOOs6uBB',
        'transaction_id': `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      });
    }

    // Form gönderimi burada işlenecek
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    trackPhoneCall(phoneNumber);
    setTimeout(() => {
      window.location.href = `tel:${phoneNumber}`;
    }, 100);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "0546 763 02 61",
      link: "tel:+905467630261",
      phoneNumber: "+905467630261"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "0546 763 02 61",
      link: "https://wa.me/905467630261?text=Merhaba%2C%20temizlik%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
      phoneNumber: null
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@gokkusagitemizlik.com",
      link: "mailto:info@gokkusagitemizlik.com",
      phoneNumber: null
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "İKİTELİ OSB MAH. İSTEKS B6 BLOK SK. B6 BLOK ISTEKS SANAYI NO:19 BAŞAKŞEHİR/İSTANBUL",
      link: null,
      phoneNumber: null
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "7/24 Hizmet",
      link: null,
      phoneNumber: null
    }
  ];

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ücretsiz fiyat teklifi almak veya sorularınız için bize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.link ? (
              info.phoneNumber ? (
                <a
                  href={info.link}
                  onClick={(e) => handlePhoneClick(e, info.phoneNumber!)}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  target={info.link.startsWith('https') ? '_blank' : undefined}
                  rel={info.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                >
                  {info.content}
                </a>
              )
            ) : (
              <span className="text-gray-700">{info.content}</span>
            );

            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {content}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Teklif Formu</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad *</Label>
                  <Input
                    id="name"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0555 555 55 55"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Hizmet Türü *</Label>
                  <Input
                    id="service"
                    placeholder="Örn: Ev Temizliği"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea
                  id="message"
                  placeholder="Detayları buraya yazabilirsiniz..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Teklif Gönder
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
