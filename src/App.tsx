import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { SEOHead } from "./components/SEOHead";

// Lazy load service detail page
const ServiceDetailPage = lazy(() => import("./components/services/ServiceDetailPage").then(module => ({ default: module.ServiceDetailPage })));

// Lazy load admin panel
const AdminApp = lazy(() => import("./admin/AdminApp"));

function HomePage() {
  // Homepage structured data
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gökkuşağı Kurumsal Temizlik Hizmetleri",
    "description": "İstanbul'da profesyonel temizlik hizmetleri sunan kurumsal temizlik şirketi. Ev, ofis, AVM, otel, villa temizliği ve daha fazlası.",
    "url": "https://gokkusagitemizlik.com",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Temizlik Hizmetleri",
      "numberOfItems": 14,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Boş Ev Temizliği",
            "url": "https://gokkusagitemizlik.com/hizmet/bos-ev-temizligi"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Villa Temizliği",
            "url": "https://gokkusagitemizlik.com/hizmet/villa-temizligi"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Ofis Temizliği",
            "url": "https://gokkusagitemizlik.com/hizmet/ofis-temizligi"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Gökkuşağı Kurumsal Temizlik Hizmetleri - İstanbul Profesyonel Temizlik Şirketi"
        description="İstanbul'da profesyonel temizlik hizmetleri. Ev, ofis, AVM, otel, villa temizliği. Boş ev, inşaat sonrası, dış cephe cam temizliği. Uygun fiyat, kaliteli hizmet."
        keywords="temizlik şirketi istanbul, profesyonel temizlik hizmeti, ev temizliği, ofis temizliği, AVM temizliği, otel temizliği, villa temizliği, boş ev temizliği, inşaat sonrası temizlik, dış cephe cam temizliği, Gökkuşağı Temizlik"
        canonicalUrl="https://gokkusagitemizlik.com"
        structuredData={homepageStructuredData}
      />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
    </>
  );
}

function MainSite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/hizmet/:serviceId"
            element={
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                </div>
              }>
                <ServiceDetailPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </Suspense>
    );
  }

  return <MainSite />;
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

