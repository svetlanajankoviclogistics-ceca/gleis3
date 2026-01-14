"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Comment = { text: string; name: string };

export default function CustomerComments({ comments }: { comments: Comment[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!comments.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % comments.length), 3500);
    return () => clearInterval(id);
  }, [comments.length]);

  if (!comments.length) return null;

  const c = comments[index];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 px-4 text-white relative overflow-hidden"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dljm63khd/image/upload/r16_-_Copy_cjovif.jpg')" }}
    >
      {/* pulsiramajuća zlatna tačka */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40rem] h-[40rem] rounded-full bg-gold-500/10 blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="backdrop-blur-md bg-black/40 ring-2 ring-gold-500/80 rounded-3xl shadow-gold p-8 md:p-12"
          >
            <p className="text-lg md:text-2xl text-white italic mb-6 leading-relaxed">
              “{c.text}”
            </p>
            <p className="text-sm md:text-base font-semibold text-gold-500 tracking-wide">
              {c.name}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* zlatne indicator tačkice */}
        <div className="mt-8 flex justify-center gap-3">
          {comments.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              role="button"
              tabIndex={0}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-gold-500 scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to comment ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}