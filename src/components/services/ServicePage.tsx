import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Check, Phone, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { trackPhoneCall } from "../../utils/conversion-tracking";

interface ServicePageProps {
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

export function ServicePage({
  title,
  description,
  imageUrl,
  emoji,
  features,
  benefits,
  process,
  keywords,
  metaDescription
}: ServicePageProps) {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const message = `Merhaba, ${title} hizmeti hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905467630261?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const callPhone = () => {
    trackPhoneCall("+905467630261");
    setTimeout(() => {
      window.location.href = "tel:+905467630261";
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30" />
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative container h-full flex flex-col justify-center text-white">
          <Button
            variant="ghost"
            className="w-fit mb-6 text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="text-xl max-w-2xl opacity-90">{metaDescription}</p>
        </div>
      </div>

      {/* Keywords */}
      <div className="border-b bg-white">
        <div className="container py-6">
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-4">Hizmet Detayları</h2>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6">Neler Yapıyoruz?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6">Çalışma Sürecimiz</h2>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6">Neden Bizi Tercih Etmelisiniz?</h2>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl mb-2">Ücretsiz Teklif Alın</h3>
                    <p className="text-gray-600 text-sm">
                      Size özel fiyat teklifi için hemen iletişime geçin
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={openWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp ile Teklif Al
                    </Button>

                    <Button
                      onClick={callPhone}
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Hemen Ara: 0546 763 02 61
                    </Button>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>7/24 Müşteri Desteği</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Aynı Gün Hizmet</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Profesyonel Ekip</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Garanti Belgeli</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-gray-700">
                    <strong>İstanbul'un tüm ilçelerinde</strong> hizmet veriyoruz
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
