"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

type GalleryProps = {
  galleryTitle: string;
  allDishes: string;
  currentLang: string;
};

// Cloudinary public IDs
const images = [
  { name: "Rösti Gleis 3", image: "g10_epihfh" },
  { name: "Gemüse Rösti", image: "g18_snpbdd" },
  { name: "Riz Casimir", image: "g3_ouph9a" },
  { name: "Pouletbrustschnitzel", image: "g0_uqak1j" },
  { name: "Ganzes Mischtkrazerli", image: "g8_vwoq04" },
  { name: "Fischknusperli", image: "g7_mfvl4k" },
  { name: "Älpler‑Maccaroni", image: "g11_bdtxap" },
  { name: "Niidle‑Schnitzel", image: "g5_riz632" },
  { name: "Cordon bleu Gleis 3", image: "g12_dex3ji" },
];

export default function Gallery({ galleryTitle, allDishes, currentLang }: GalleryProps) {
  const [current, setCurrent] = useState(0);

  // Automatska rotacija
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Pozicije slika u carouselu
  const getPositionStyle = (index: number) => {
    if (index === current) return { scale: 1.2, x: 0, zIndex: 10, opacity: 1 };
    if (index === (current - 1 + images.length) % images.length)
      return { scale: 0.9, x: -150, zIndex: 5, opacity: 0.5 };
    if (index === (current + 1) % images.length)
      return { scale: 0.9, x: 150, zIndex: 5, opacity: 0.5 };
    return { scale: 0.8, x: 0, zIndex: 1, opacity: 0 };
  };

  // Funkcije za strelice
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="bg-[#0B0B0B] text-white py-16 px-4 md:px-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#C5A572] mb-12 text-center">
          {galleryTitle}
        </h2>

        <div className="relative w-full flex justify-center items-center h-[320px] md:h-[400px]">
          {images.map((item, index) => {
            const pos = getPositionStyle(index);
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, x: 0, opacity: 0 }}
                animate={{
                  scale: pos.scale,
                  x: pos.x,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                transition={{ duration: 0.6 }}
                className="absolute w-[180px] md:w-[220px] h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg"
              >
                <CldImage
                  src={item.image}
                  alt={item.name}
                  width={220}
                  height={300}
                  crop="fill"
                  format="auto"
                  quality="auto"
                  className="object-cover rounded-xl"
                />
              </motion.div>
            );
          })}

          {/* Strelice */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            aria-label="Next image" 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-10">
          <Link
            href={`/${currentLang}/gallery`}
            aria-label="View full gallery"  
            className="bg-[#C5A572] hover:bg-[#b29260] text-black font-semibold px-8 py-3 rounded-full transition-all shadow-md"
          >
            {allDishes}
          </Link>
        </div>
      </div>
    </section>
  );
}