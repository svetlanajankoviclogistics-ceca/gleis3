"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  { href: "https://www.facebook.com/restaurantgleis3/", icon: FaFacebook, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://wa.me/41628883300", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://search.google.com/local/writereview?placeid=ChIJm1SOrlKlj0cRnma3KIv4OmA", icon: FaGoogle, label: "Google Review" },
];

type Props = { hideOnMobile?: boolean };

export default function SocialSticky({ hideOnMobile }: Props) {
  const [isInFooter, setIsInFooter] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const [mountSticky, setMountSticky] = useState(false); // ➜ lazy mount

  const segment = useSelectedLayoutSegment();
  const isMenuPage = segment === "menu";

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const ob = new IntersectionObserver(
      ([e]) => setIsInFooter(e.isIntersecting),
      { threshold: 0.3 }
    );
    ob.observe(footer);
    return () => ob.disconnect();
  }, []);

  /* ➜  LAZY MOUNT: prikaži sticky tek posle frame-a */
  useEffect(() => {
    if (!isMenuPage && !(hideOnMobile && width < 768) && !isInFooter) {
      const frame = requestAnimationFrame(() => setMountSticky(true));
      return () => cancelAnimationFrame(frame);
    } else {
      setMountSticky(false);
    }
  }, [isMenuPage, hideOnMobile, width, isInFooter]);

  return (
    <>
      {/* DESNI STICKY – mount-uj samo kad smemo i nismo u footer-u */}
      {mountSticky && (
        <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-200"
              >
                <Icon className="text-white text-xl group-hover:text-amber-400" />
              </Link>
            );
          })}
        </aside>
      )}

      {/* FUTER – rezervisan prostor 48 px */}
      <div className="h-12">
        <div
          className={`flex justify-center gap-4 h-full items-center transition-opacity duration-700 ${
            isInFooter ? "opacity-100" : "opacity-0"
          }`}
        >
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-200"
              >
                <Icon className="text-white text-xl group-hover:text-[#d1c7b7]" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}