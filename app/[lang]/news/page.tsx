import NewsHero from "../../components/NewsHero";
import { getNavDict } from "../../dictionaries/dictionaries";
import type { Metadata } from "next";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const { nav } = await getNavDict(lang);

  return {
    title: nav.news,
    description: "Latest news and updates from Restaurant Café Gleis 3.",
    openGraph: {
      title: nav.news,
      description: "Latest news and updates from Restaurant Café Gleis 3.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/logo_jundzy.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}/news`,
      type: "website",
      locale: lang,
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}/news`,
      languages: {
        de: "https://restaurant-gleis3.ch/de/news",
        en: "https://restaurant-gleis3.ch/en/news",
        fr: "https://restaurant-gleis3.ch/fr/news",
        ko: "https://restaurant-gleis3.ch/ko/news",
        es: "https://restaurant-gleis3.ch/es/news",
      },
    },
  };
}

export default async function NewsPage({ params }: Props) {
  const { lang } = params;
  const tNav = await getNavDict(lang);

  return (
    <main>
      <NewsHero title={tNav.nav.news} />
    </main>
  );
}

