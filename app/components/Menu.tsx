"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuProps = {
  title: string;
  fullMenu: string;
  currentLang: string;
};

export default function Menu({ title, fullMenu,currentLang }: MenuProps) {
  const items = [
    { name: "Rösti «Gleis 3»", price: "CHF 31" },
    { name: "Emmentaler Rindsentrecôte vom Grill", price: "CHF 49" },
    { name: "Hausgemachtes “Cordon bleu” Gleis 3", price: "CHF 38" },
  ];

  return (
    <section id="menu" className="py-20 px-6 text-center bg-[#111]">
      <motion.h2
        className="text-4xl mb-8 text-[#C5A572]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {items.map((dish, i) => (
          <motion.div
            key={i}
            className="flex justify-between text-lg border-b border-[#333] pb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <span>{dish.name}</span>
            <span className="text-[#C5A572]">{dish.price}</span>
          </motion.div>
        ))}
      </div>

        <Link href={`/${currentLang}/menu`} passHref>
          <motion.div
            aria-label="View full menu"
            className="inline-block mt-10 px-6 py-3 bg-[#C5A572] text-[#0B0B0B] rounded-full font-semibold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {fullMenu}
          </motion.div>
        </Link>
    </section>
  );
}


