"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center bg-transparent",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block 
        text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
        font-light 
        rounded-lg 
        bg-gradient-to-r from-[#517AFF] via-[#515AFF] to-[#1C28FF] 
        px-0.5 sm:px-1 md:px-1.5 
        pb-0.5 sm:pb-1 md:pb-1.5`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
