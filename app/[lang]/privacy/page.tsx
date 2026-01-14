import { Metadata } from "next";
import { getPrivacyDict } from "../../dictionaries/dictionaries";
import PrivacyClient from "../../components/PrivacyClient";

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getPrivacyDict(params.lang);
  return { title: dict.metaTitle, description: dict.metaDesc };
}

export default async function PrivacyPage({ params }: Props) {
  const dict = await getPrivacyDict(params.lang);
  return <PrivacyClient dict={dict} lang={params.lang} />;
}