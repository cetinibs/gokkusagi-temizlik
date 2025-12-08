import React from "react";

interface LogoProps {
  className?: string;
}

const logoImage = new URL("../images/logo_new.png", import.meta.url).href;

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Gökkuşağı Temizlik Logosu"
        className="h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] select-none"
      />
    </div>
  );
}
