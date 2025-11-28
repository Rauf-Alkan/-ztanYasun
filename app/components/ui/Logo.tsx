import React from "react";

const colors = {
  navy: "#0F2C4C",
  gold: "#C5A572",
  white: "#FFFFFF",
};

type LogoProps = {
  variant?: "minimal" | "esthetic" | "monogram";
  className?: string;
  isWhite?: boolean; // YENİ ÖZELLİK: Arka plan koyuysa true yap
};

const Logo = ({ variant = "esthetic", className = "w-12 h-12", isWhite = false }: LogoProps) => {
  
  // Ana renk seçimi: isWhite true ise Beyaz, değilse Lacivert
  const mainColor = isWhite ? colors.white : colors.navy;

  if (variant === "esthetic") {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Diş Formu (Ana Renk) */}
        <path
          d="M25 35C25 20 35 15 50 15C65 15 75 20 75 35C75 55 68 65 65 80C64 85 58 85 55 80C53 75 50 65 50 65C50 65 47 75 45 80C42 85 36 85 35 80C32 65 25 55 25 35Z"
          fill={mainColor}
        />
        {/* Altın Işıltı (Her zaman Gold) */}
        <path
          d="M75 15L78 22L85 25L78 28L75 35L72 28L65 25L72 22L75 15Z"
          fill={colors.gold}
        />
      </svg>
    );
  }

  if (variant === "minimal") {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
          d="M30 35C30 20 40 20 50 20C60 20 70 20 70 35C70 55 65 65 60 80C58 86 52 86 50 80M50 80C48 86 42 86 40 80C35 65 30 55 30 35Z"
          stroke={mainColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="45" r="4" fill={colors.gold} />
      </svg>
    );
  }

  if (variant === "monogram") {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="50" cy="50" r="45" stroke={mainColor} strokeWidth="3" />
        <path
          d="M35 35V65M65 35V65M35 50H65"
          stroke={mainColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M35 25L50 15L65 25"
          stroke={colors.gold}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
};

export default Logo;