"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [language, setLanguage] = useState<"FR" | "EN">("FR");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { fr: "Accueil", en: "Home", href: "/" },
    { fr: "Formations", en: "Training", href: "/formations" },
    { fr: "Prestations", en: "Services", href: "/prestations" },
    { fr: "Boutique", en: "Shop", href: "/boutique" },
    { fr: "Immigration", en: "Immigration", href: "/immigration" },
   { fr: "À propos", en: "About", href: "/a-propos" },
    { fr: "Contact", en: "Contact", href: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <img src="/assets/logo.jpg" alt="New Fashion logo" />
          <span>NEW FASHION</span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {language === "FR" ? link.fr : link.en}
            </Link>
          ))}
        </nav>

        <button
          className="language-button"
          onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
        >
          {language === "FR" ? "EN" : "FR"}
        </button>
      </div>
    </header>
  );
}