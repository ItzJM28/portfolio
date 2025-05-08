import Hero from "@/components/Hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FloatingNavBar } from "@/components/NavBar";
import { HeroHL } from "@/components/HeroHighlight";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden h-screen w-full sm:px-10 px-5">
        {/* Grid background */}
        <div className="absolute inset-0">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl w-full relative z-10">
          <FloatingNavBar />
          <HeroHL />
          <Hero />
        </div>
      </main>
    </>
  );
}
