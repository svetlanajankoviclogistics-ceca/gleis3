"use client";

import Image from "next/image";

type NewsHeroProps = {
  title: string;
};

export default function NewsHero({ title }: NewsHeroProps) {
  return (
    <section className="w-full">
      {/* NASLOV */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          {title}
        </h1>
      </div>

      {/* SLIKA PREKO CELOG EKRANA */}
      <div className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src="/news.avif"
          alt="News"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
