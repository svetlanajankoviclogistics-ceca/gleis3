import { getMenuDict, getHomeDict } from "../../dictionaries/dictionaries";
import MenuCard from "../../components/Menucard";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { menuhome } = await getHomeDict(lang);

  return {
    title: menuhome.menuTitle,
    description: "Discover our menu – fresh Swiss dishes, fondue, schnitzel and more.",
    openGraph: {
      title: menuhome.menuTitle,
      description: "Discover our menu – fresh Swiss dishes, fondue, schnitzel and more.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/g10_epihfh.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}/menu`,
      type: "website",
      locale: lang,
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}/menu`,
      languages: {
        de: "https://restaurant-gleis3.ch/de/menu",
        en: "https://restaurant-gleis3.ch/en/menu",
        fr: "https://restaurant-gleis3.ch/fr/menu",
        ko: "https://restaurant-gleis3.ch/ko/menu",
        es: "https://restaurant-gleis3.ch/es/menu",
      },
    },
  };
}

export default async function MenuPage({ params }: Props) {
  const { lang } = await params;
  const t = await getMenuDict(lang); // ← await je dozvoljen JER OVO JE SERVER KOMPONENTA

  return <MenuCard t={t} />;
}