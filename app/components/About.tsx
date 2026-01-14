"use client";

import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

type AboutProps = {
  aboutTitle: string;
  aboutContent: string;
};

const PUBLIC_ID = "g1_idu7lm";

export default function About({ aboutTitle, aboutContent }: AboutProps) {
  return (
    <section className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start gap-6 md:gap-12">
        {/* TEKST */}
        <motion.div
          className="md:w-1/2 text-gray-300 leading-relaxed whitespace-pre-line"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-[#C5A572] mb-6 text-center md:text-left">
            {aboutTitle}
          </h2>
          <p className="max-w-[600px] mx-auto md:mx-0">
            {aboutContent}
          </p>
        </motion.div>

        {/* SLIKA */}
        <motion.div
          className="flex justify-center md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[600px] h-[260px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <CldImage
              src={PUBLIC_ID}
              alt="Restaurant interior"
              width={600}
              height={400}
              crop="fill"
              format="auto"
              quality="auto"
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
