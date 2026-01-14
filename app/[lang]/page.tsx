import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import About from "../components/About";
import CustomerComments from "../components/CustomerComments";
import GardenSection from "../components/GardenSection";
import { getHomeDict, getContactDict } from "../dictionaries/dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { hero } = await getHomeDict(lang);

  return {
    title: hero.heroTitle,
    description: hero.heroSubtitle,
    openGraph: {
      title: hero.heroTitle,
      description: hero.heroSubtitle,
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/gleis3restaurant_oahq04.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}`,
      type: "website",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: hero.heroTitle,
      description: hero.heroSubtitle,
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/gleis3restaurant_oahq04.jpg"],
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}`,
      languages: {
        de: "https://restaurant-gleis3.ch/de",
        en: "https://restaurant-gleis3.ch/en",
        fr: "https://restaurant-gleis3.ch/fr",
        ko: "https://restaurant-gleis3.ch/ko",
        es: "https://restaurant-gleis3.ch/es",
      },
    },
  };
}

export const revalidate = 0;   // nikad ne koristi cache
export const dynamic = "force-dynamic";

type Props = { params: Promise <{ lang: string }> };


export default async function HomePage({ params }: Props) {
  const { lang } =await params; // obavezno, bez obzira na TS warning
  const t = await getHomeDict(lang); // učitava de/en/fr/ko json
  const tContact = await getContactDict(lang); // contact prevodi
  const currentLang = lang;

  return (
    <main>
      <Hero title={t.hero.heroTitle} subtitle={t.hero.heroSubtitle} />
      <About 
          aboutTitle={t.about.aboutTitle}          
          aboutContent={t.about.aboutContent} 
        />
      <Menu title={t.menuhome.menuTitle} fullMenu={t.menuhome.fullMenu} currentLang={currentLang} />
      <GardenSection t={t.hours} />
      <Gallery galleryTitle={t.menuhome.galleryTitle} allDishes={t.menuhome.allDishes} currentLang={currentLang}/>
      <CustomerComments comments={t.comments.list} />
      <Contact t={tContact.contact} />
    </main>
  );
}




