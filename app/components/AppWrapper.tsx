"use client";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import SocialSticky from "./SocialSticky";
import { usePathname } from "next/navigation";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isMenuPage = pathname.endsWith("/menu");

  return (
    <>
      <Preloader onFinish={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <SocialSticky hideOnMobile={isMenuPage} />
          {children}
        </>
      )}
    </>
  );
}