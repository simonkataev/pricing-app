"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const loadingTexts = [
    "Juris AI starter op",
    "Databaser og lovgivning indlæses",
    "Systemet initialiseres",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [dots, setDots] = useState(".");

  // Simulate loading dots animation
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Cycle through loading texts
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
      setDots("."); // Reset to 1 dot when new text is displayed
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: {
      y: 20, // Start from below (bottom)
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.55, ease: "easeInOut" },
      },
    },
    exit: {
      y: -25, // Exit to top
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.55, ease: "easeInOut" },
      },
    },
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="relative">
        {/* Logo only - hiding the text from the original image */}
        <div className="min-w-[300px] h-[120px] relative flex items-center justify-center">
          <Image
            src="/loading.png"
            alt="Loading..."
            width={270}
            height={154}
            priority
            className="object-cover object-top"
            style={{ clipPath: "inset(0 0 40px 0)" }} // Clip the bottom part containing text
          />
        </div>

        {/* Animated text container - fixed height to prevent layout shifts */}
        <div className="text-gray-700 mt-[-10px] h-[24px] overflow-hidden flex justify-center text-[14px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative whitespace-nowrap"
            >
              <span className="inline-block font-medium">
                {loadingTexts[currentTextIndex]}
              </span>
              <span className="absolute left-[calc(100%+4px)]">{dots}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
