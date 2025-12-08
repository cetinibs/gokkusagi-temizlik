import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      aria-label="Yukarı çık"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 text-white p-3 shadow-2xl hover:bg-gray-800 transition-colors"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}


