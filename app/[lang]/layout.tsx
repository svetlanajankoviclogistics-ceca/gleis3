// app/[lang]/layout.tsx
import CookieBanner from "../components/CookieBanner";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppShell from "../components/AppShell";   // ⬅️ NOVO
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { getNavDict, getFooterDict } from "../dictionaries/dictionaries";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const viewport: Viewport = {
  themeColor: "#C5A572",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "de" ? "Restaurant Café Gleis 3" : "Gleis 3 Restaurant & Café",
    description:
      lang === "de"
        ? "Feine Küche in historischem Ambiente – Interlaken"
        : "Fine dining in a historic setting – Interlaken",
    openGraph: { locale: lang },
    icons: { icon: "/favicon.ico" },
    manifest: "/site.webmanifest",
    other: {
      "preconnect-fonts": "https://fonts.googleapis.com ",
      "dns-prefetch-cdn": "https://res.cloudinary.com ",
      "preload-image": "https://res.cloudinary.com/dljm63khd/image/upload/gleis3restaurant_oahq04.jpg ",
      "preload-logo": "https://res.cloudinary.com/dljm63khd/image/upload/logo_jundzy.jpg ",
      "preload-hero": "https://res.cloudinary.com/dljm63khd/image/upload/gleis3restaurant_oahq04.jpg ",
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  const nav = await getNavDict(lang);
  const footer = await getFooterDict(lang);

 return (
    <>
      {/* Preloader se učitava ODMah, iznad svega */}
      <Preloader />   {/* ⬅️ tvoja komponenta */}

      <AppShell
        navbar={<Navbar t={nav.nav} currentLang={lang} />}
        footer={<Footer t={footer.footer} currentLang={lang} />}
      >
        {children}
      </AppShell>
      <CookieBanner />
    </>
  );
}