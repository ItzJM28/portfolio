"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";

export function HeroHL() {
  return (
    <HeroHighlight>
      {/* Responsive PNG above the HeroHighlight */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="w-full flex justify-center mb-6"
      >
        <Image
          src="/jd.png" // Replace with the actual path to your PNG
          alt="Hero Highlight Icon"
          width={200} // Default width
          height={200} // Default height
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        />
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 sm:px-6 md:px-8 font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed sm:leading-normal md:leading-snug lg:leading-tight text-center mx-auto"
      >
        Design-Driven, Code-Focused <br />
        Where Aesthetics Meet Functionality
        <br />
        <Highlight className="text-black dark:text-white px-5 pt-1">
          Front-End Development · UI/UX Design · Visual Identity
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
