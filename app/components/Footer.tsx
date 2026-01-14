// components/Footer.tsx
"use client";

import Link from "next/link";
import SocialSticky from "./SocialSticky";
import { CldImage } from "next-cloudinary";

export type FooterTranslation = {
  contact: string;
  phone: string;
  email: string;
  hours: string;
  address: string;
  follow: string;
};

type Props = { t: FooterTranslation; currentLang: string }; // ⬅️ dodaj currentLang

export default function Footer({ t, currentLang }: Props) {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo + adresa */}
        <div>
          <div className="w-[140px] h-20 mx-auto md:mx-0 mb-4">
            <CldImage
              src="logo_jundzy"
              alt="Restaurant Café Gleis 3"
              width={140}
              height={80}
              className="w-auto h-full object-contain"
            />
          </div>
          <pre className="whitespace-pre-wrap text-sm text-gray-300">
            {t.address}
          </pre>
        </div>

        {/* Kontakt i radno vreme */}
        <div>
          <h3 className="font-semibold mb-2">{t.contact}</h3>
          <p className="text-sm text-gray-300">{t.phone}</p>
          <p className="text-sm text-gray-300">{t.email}</p>
          <p className="text-sm text-gray-300 mt-2">{t.hours}</p>
        </div>

        {/* Socijalne mreže */}
        <div>
          <h3 className="font-semibold mb-2">{t.follow}</h3>
          <SocialSticky hideOnMobile={false} />
        </div>
      </div>

        {/* Jedan link koji vodi na zajedničku stranicu */}
        <div className="mt-8 flex justify-center gap-4 text-sm text-gray-400">
          <Link href={`/${currentLang}/privacy`} className="hover:text-white transition">
            Legal Notice / Privacy Policy
          </Link>
        </div>
        <p className="text-xs text-center mt-2">© 2026 Restaurant Café Gleis 3 Reshanth. All rights reserved.</p>
    </footer>
  );
}