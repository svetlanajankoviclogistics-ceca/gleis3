"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export type HoursTranslation = {
  hoursTitle: string;
  hoursMonTue: string;
  hoursMonTueTime: string;
  hoursWedSun: string;
  hoursWedSunTime: string;
  hoursKitchen: string;
  hoursKitchenTime: string;
  ctaButton: string;
};

type GardenHoursProps = { t: HoursTranslation };

export default function GardenHours({ t }: GardenHoursProps) {
  return (
    <section className="w-full bg-gradient-to-br from-[#0F0F0F] to-[#121212] py-24">
      <div className="mx-auto px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* SLIKA – Cloudinary, ceo sadržaj, bez crop-a */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          <CldImage
            src="r11_c82voq"
            alt="Garden terrace at Restaurant Gleis 3"
            width={800}
            height={600}
            format="auto"
            quality="auto"
            className="w-full h-80 md:h-96 object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>

        {/* TEKST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#EAE0D1] space-y-6 md:space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase">
            {t.hoursTitle}
          </h3>

          <div className="space-y-4 text-sm md:text-base font-light tracking-wide">
            <div>
              <p className="text-[#C5A572]">{t.hoursMonTue}</p>
              <p className="opacity-80">{t.hoursMonTueTime}</p>
            </div>
            <div>
              <p className="text-[#C5A572]">{t.hoursWedSun}</p>
              <p className="opacity-80">{t.hoursWedSunTime}</p>
            </div>
            <div>
              <p className="text-[#C5A572]">{t.hoursKitchen}</p>
              <p className="opacity-80">{t.hoursKitchenTime}</p>
            </div>
          </div>

          <a
            href="tel:+41335258079"
            aria-label="Reserve a table at Restaurant Gleis 3"
            className="mt-4 px-7 py-3 bg-[#C5A572] hover:bg-[#b29260] text-black font-semibold rounded-full transition-all shadow-md inline-block"
          >
            {t.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}