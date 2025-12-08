import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link 
          to="/"
          className="hover:opacity-80 transition-opacity"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("anasayfa")}
            className="text-sm hover:text-primary transition-colors"
          >
            Ana Sayfa
          </button>
          <button
            onClick={() => scrollToSection("hizmetler")}
            className="text-sm hover:text-primary transition-colors"
          >
            Hizmetlerimiz
          </button>
          <button
            onClick={() => scrollToSection("hakkimizda")}
            className="text-sm hover:text-primary transition-colors"
          >
            Hakkımızda
          </button>
          <button
            onClick={() => scrollToSection("iletisim")}
            className="text-sm hover:text-primary transition-colors"
          >
            İletişim
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("https://share.google/RG9rmuePyHeVcM8Ya", "_blank")}
            className="inline-flex"
          >
            YORUM YAPINIZ
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open("https://wa.me/905524159944?text=Merhaba%2C%20temizlik%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum.", "_blank")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Phone className="h-4 w-4 mr-2" />
            İletişime Geç
          </Button>
        </div>
      </div>
    </header>
  );
}
