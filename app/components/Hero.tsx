"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  const scrolled = false; // Hero je u vrhu, pa možemo koristiti isti stil kao navbar pre scrolla

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-18">
      {/* Pozadinska slika – Cloudinary, ceo sadržaj, bez crop-a */}
      <CldImage
        src="gleis3restaurant_oahq04"
        alt="Restaurant background"
        fill
        format="auto"
        quality="auto"
        className="object-cover"
        preload
      />

      {/* Pravougaonik sa osenčenjem poput navbar-a */}
      <motion.div
        className="
          z-10 relative
          rounded-2xl
          px-12 py-8
          flex flex-col items-center text-center
          font-sans
        "
        style={{
          backgroundColor: scrolled
            ? "rgba(11,11,11,0.9)"
            : "rgba(11,11,11,0.6)",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.4)"
            : "0 4px 20px rgba(0,0,0,0.2)",
        }}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo – Cloudinary, ceo sadržaj, bez crop-a */}
        <CldImage
          src="logo_jundzy"
          alt="Home icon"
          width={300}
          height={300}
          format="auto"
          quality="auto"
          className="mb-6"
          preload
        />

        {/* Tekst ispod loga */}
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-[#C5A572]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-400 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}

