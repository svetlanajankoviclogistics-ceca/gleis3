// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export type NavTranslation = {
  startseite: string;
  news: string;
  uberUns: string;
  speisekarte: string;
  gallerie: string;
  kontakt: string;
};

type NavbarProps = { t: NavTranslation; currentLang: string };

const langs = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ko", label: "KO" },
  { code: "es", label: "ES" },
];

function LangSwitch({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const routeWithoutLang = segments.length > 2 ? `/${segments.slice(2).join("/")}` : "/";
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {langs.map((l) => (
        <Link
          key={l.code}
          href={`/${l.code}${routeWithoutLang}`}
          className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
            l.code === currentLang
              ? "text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] font-semibold"
              : "text-white/70 hover:text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar({ t, currentLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === `/${currentLang}` || pathname === `/${currentLang}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${currentLang}`, label: t.startseite },
    { href: `/${currentLang}/news`, label: t.news },
    { href: `/${currentLang}/uberUns`, label: t.uberUns },
    { href: `/${currentLang}/menu`, label: t.speisekarte },
    { href: `/${currentLang}/gallery`, label: t.gallerie },
    { href: `/${currentLang}/contact`, label: t.kontakt },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHome
          ? scrolled
            ? "bg-black border-b border-white/10"
            : "bg-transparent"
          : "bg-black border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <div className="w-[120px] h-10">
            <CldImage
              src="logo_jundzy"
              alt="Logo"
              width={120}
              height={40}
              format="auto"
              quality="auto"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav + jezici (≥ 640 px) */}
        <div className="hidden sm:flex items-center gap-7 text-white text-lg font-medium tracking-wide">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              replace
              scroll={false}
              className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] hover:text-yellow-300 transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <LangSwitch currentLang={currentLang} />
        </div>

        {/* Mobile: samo hamburger (< 640 px) */}
        <div className="flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu – jezici unutar (< 640 px) */}
      <div
        className={clsx(
          "sm:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-screen bg-black/90" : "max-h-0 bg-transparent"
        )}
      >
        <div className="flex flex-col items-center gap-5 py-6 text-white text-lg font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              replace
              scroll={false}
              onClick={() => setOpen(false)}
              className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] hover:text-yellow-300 transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}

          {/* JEZICI – SAMO unutar hamburger menija */}
          <LangSwitch currentLang={currentLang} />
        </div>
      </div>
    </nav>
  );
}