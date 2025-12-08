import { useParams } from "react-router-dom";
import { ServicePage } from "./ServicePage";
import { servicesData } from "../../data/servicesData";
import { useEffect } from "react";
import { SEOHead } from "../SEOHead";

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Hizmet bulunamadı</h1>
          <a href="/" className="text-blue-600 hover:underline">
            Ana sayfaya dön
          </a>
        </div>
      </div>
    );
  }

  // Structured data for service page
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Gökkuşağı Kurumsal Temizlik Hizmetleri",
      "url": "https://gokkusagitemizlik.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "serviceType": service.title,
    "category": "Temizlik Hizmetleri",
    "offers": {
      "@type": "Offer",
      "description": service.description,
      "priceCurrency": "TRY"
    },
    "keywords": service.keywords.join(', ')
  };

  return (
    <>
      <SEOHead
        title={`${service.title} - Gökkuşağı Temizlik Hizmetleri`}
        description={service.metaDescription}
        keywords={service.keywords.join(', ')}
        canonicalUrl={`https://gokkusagitemizlik.com/hizmet/${service.id}`}
        ogImage={service.imageUrl}
        structuredData={serviceStructuredData}
      />
      <ServicePage {...service} />
    </>
  );
}
