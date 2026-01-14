// components/GalleryGrid.tsx
"use client";

import { CldImage } from "next-cloudinary";

type Dish = {
  name: string;
  image: string; // Cloudinary Public ID
};

export default function GalleryGrid({ items }: { items: Dish[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {items.map((item) => (
        <div key={item.name} className="text-center">
          <CldImage
            src={item.image}           // ovde ubaci svoj Cloudinary Public ID
            width={400}
            height={300}
            alt={item.name}
            crop="fill"
            format="auto"
            quality="auto"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2 font-medium text-lg">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
