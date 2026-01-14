import Contact from "../../components/Contact";
import { getContactDict } from "../../dictionaries/dictionaries";
import type { Metadata } from "next";

export const revalidate = 0;
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { contact } = await getContactDict(lang);

  return {
    title: contact.contactTitle,
    description: "Contact Restaurant Café Gleis 3 – reservations, questions, location and opening hours.",
    openGraph: {
      title: contact.contactTitle,
      description: "Contact Restaurant Café Gleis 3 – reservations, questions, location and opening hours.",
      images: ["https://res.cloudinary.com/dljm63khd/image/upload/logo_jundzy.jpg"],
      url: `https://restaurant-gleis3.ch/${lang}/contact`,
      type: "website",
      locale: lang,
    },
    alternates: {
      canonical: `https://restaurant-gleis3.ch/${lang}/contact`,
      languages: {
        de: "https://restaurant-gleis3.ch/de/contact",
        en: "https://restaurant-gleis3.ch/en/contact",
        fr: "https://restaurant-gleis3.ch/fr/contact",
        ko: "https://restaurant-gleis3.ch/ko/contact",
        es: "https://restaurant-gleis3.ch/es/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const tContact = await getContactDict(lang);

  return (
    <>
      <Contact t={tContact.contact} />
    </>
  );
}