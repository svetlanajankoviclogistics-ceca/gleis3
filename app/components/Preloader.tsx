"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from "next-cloudinary";

interface PreloaderProps {
  onFinish?: () => void; // callback koji signalizira roditelju da je preloader nestao
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish(); // obaveštava RootLayout da preloader završava
    }, 1800); // trajanje preloadera u ms (1.8 sekundi)
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Cloudinary slika */}
            <CldImage
              src="preloader_zcmycq"
              alt="Preloader"
              width={300}
              height={300}
              format="auto"
              quality="auto"
              className="object-contain drop-shadow-lg"
              preload
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



