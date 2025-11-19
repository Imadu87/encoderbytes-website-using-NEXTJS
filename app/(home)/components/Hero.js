import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "@/public/Images/hero.jpg";

export default function HeroSection() {
  return (
    <section
      className="
        relative 
        h-[90vh] 
        lg:h-screen 
        xl:h-[85vh] 
        2xl:h-[75vh] 
        flex items-center 
        text-white 
        mt-20
      "
    >
      {/* === Background Image === */}
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="
          object-cover 
          -z-10 
          object-center 
        "
        priority
      />

      {/* === Text Content === */}
      <div
        className="
          px-6 md:px-16 
          flex flex-col 
          text-center md:text-left 
          items-center md:items-start
          max-w-3xl
        "
      >
        <p className="text-2xl md:text-xl xl:text-2xl tracking-widest mb-2">
          a bespoke
        </p>

        {/* MAIN HEADING */}
        <h1 className="uppercase font-bold leading-tight tracking-tight mb-4 text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
          <span className="whitespace-nowrap">SOFTWARE DEVELOPMENT</span>
          <br />
          <span className="text-blue-500">company.</span>
        </h1>

        <p
          className="
            text-lg md:text-xl xl:text-2xl 
            mb-8 md:mb-10 
            text-gray-200 
            max-w-2xl
          "
        >
          Software Development That Ensures Growth Of Your Business.
        </p>

        <button
          className="
            flex items-center gap-2
            border border-white 
            px-6 py-3 
            rounded-lg 
            font-semibold 
            text-white 
            bg-blue-500
            hover:bg-transparent
            transition
          "
        >
          See how we work
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
