// MenuCard.tsx – bez 'use client'
import { MenuDict } from "@/types/menu";

type Props = {
  t: MenuDict;
};

export default function MenuCard({ t }: Props) {
  const sections = [
    { key: "appetizers", items: t.appetizersItems },
    { key: "soups", items: t.soupsItems },
    { key: "mains", items: t.mainsItems },
    { key: "children", items: t.childrenItems },
    { key: "sides", items: t.sidesItems },
  ];

  return (
    <section className="py-20 px-6 bg-[#111] text-[#EAE0D1]">
      {/* welcome */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-[#C5A572]">{t.menu.welcomeTitle}</h2>
        <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">{t.menu.welcomeText}</p>
      </div>

      {/* sekcije */}
      {sections.map((sec) => (
        <div key={sec.key} className="max-w-5xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#C5A572]">{t.menu[sec.key]}</h3>
          <div className="space-y-3">
            {sec.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-[#333] pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.desc && <p className="text-sm text-white/70">{item.desc}</p>}
                </div>
                <span className="text-[#C5A572] font-semibold ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}