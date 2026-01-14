import About from "../../components/About";
import { getHomeDict } from "../../dictionaries/dictionaries";
import type { Metadata } from "next";

export const revalidate = 0;   // nikad ne koristi cache
export const dynamic = "force-dynamic";

type Props = { params: Promise <{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { about } = await getHomeDict(lang);

  return {
    title: about.aboutTitle,
    description: "Learn more about Restaurant Café Gleis 3 – our story, team and passion for Swiss cuisine.",
    openGraph: {
      title: about.aboutTitle,
      description: "Learn more about Restaurant Café Gleis 3 – our story, team and passion for Swiss cuisine.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/r11_c82voq.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}/about`,
      type: "website",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: about.aboutTitle,
      description: "Learn more about Restaurant Café Gleis 3 – our story, team and passion for Swiss cuisine.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/r11_c82voq.jpg"],
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}/about`,
      languages: {
        de: "https://restaurant-gleis3.ch/de/about",
        en: "https://restaurant-gleis3.ch/en/about",
        fr: "https://restaurant-gleis3.ch/fr/about",
        ko: "https://restaurant-gleis3.ch/ko/about",
        es: "https://restaurant-gleis3.ch/es/about",
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } =await  params;              // 1. raspakuj Promise

  const t = await getHomeDict(lang);    // nav prevodi

  return (
    <main>
      <About 
          aboutTitle={t.about.aboutTitle}          
          aboutContent={t.about.aboutContent} 
        />
    </main>
  );
}