// app/[lang]/gallery/page.tsx
import GalleryGrid from "../../components/GalleryGrid";
import { getHomeDict } from "../../dictionaries/dictionaries";
import type { Metadata } from "next";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { gallery } = await getHomeDict(lang);

  return {
    title: gallery.title,
    description: "Discover our gallery – fresh Swiss dishes, fondue, schnitzel and more.",
    openGraph: {
      title: gallery.title,
      description: "Discover our gallery – fresh Swiss dishes, fondue, schnitzel and more.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/g10_epihfh.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}/gallery`,
      type: "website",
      locale: lang,
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}/gallery`,
      languages: {
        de: "https://restaurant-gleis3.ch/de/gallery",
        en: "https://restaurant-gleis3.ch/en/gallery",
        fr: "https://restaurant-gleis3.ch/fr/gallery",
        ko: "https://restaurant-gleis3.ch/ko/gallery",
        es: "https://restaurant-gleis3.ch/es/gallery",
      },
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { lang } = await params;
  const t = await getHomeDict(lang);

  const dishes = [
    { name: "Rösti Gleis 3", image: "g10_epihfh" },
    { name: "Gemüse Rösti", image: "g18_snpbdd" },
    { name: "Riz Casimir", image: "g3_ouph9a" },
    { name: "Pouletbrustschnitzel", image: "g0_uqak1j" },
    { name: "Ganzes Mischtkrazerli", image: "g8_vwoq04" },
    { name: "Fischknusperli", image: "g7_mfvl4k" },
    { name: "Älpler‑Maccaroni", image: "g11_bdtxap" },
    { name: "Niidle‑Schnitzel", image: "g5_riz632" },
    { name: "Rindsentrecôte", image: "g1_idu7lm" },
    { name: "Cordon bleu Gleis 3", image: "g12_dex3ji" },
    { name: "Schwyzer Stammtisch‑Schnitzel", image: "g2_tfaapf" },
    { name: "Buurebratwurst‑Schnägg", image: "g19_b4ymx7" },
    { name: "Niidle‑Gschnätzlets", image: "g6_m0jxe0" },
    { name: "Nacktes Cordon Bleu Gleis 3", image: "g15_eqzobs" },
    { name: "unknown", image: "g4_v1b5ow" },
    { name: "dont know the name", image: "g21_wvfe7j" },
    { name: "Käse - Fondue", image: "WhatsApp_Image_2026-01-10_at_14.07.23_jy7nwa" },
  ];

  return (
    <main className="py-16 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#C5A572]">
        {t.gallery.title}
      </h1>
      <GalleryGrid items={dishes} />
    </main>
  );
}