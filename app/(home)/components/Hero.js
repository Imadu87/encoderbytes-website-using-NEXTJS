import Image from "next/image";
import { ArrowRight } from "lucide-react";
import hero from "@/public/Images/hero.jpg";

export default function HeroSection() {
  return (
    <section
      className="
        relative 
        h-screen 
        max-h-[700px]
        flex items-center 
        text-white 
        
      "
    >
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="object-cover -z-10 object-center"
        priority
      />
      <div
        className="
          px-6 md:px-16 
          flex flex-col
          tracking-tight leading-tight 
          text-center md:text-left 
          items-center md:items-start
          max-w-3xl 
        "
      >
        <p className="text-2xl md:text-xl xl:text-2xl tracking-widest">
          a bespoke
        </p>
        <h1
          className="
            uppercase font-bold 
            leading-tight tracking-tight
            text-5xl md:text-5xl xl:text-5xl 2xl:text-7xl
          "
        >
          <span className="block md:hidden">SOFTWARE</span>
          <span className="block md:hidden">DEVELOPMENT</span>
          <span className="block md:hidden text-blue-500">company.</span>

          <span className="hidden md:inline">SOFTWARE DEVELOPMENT</span>

          <span className="hidden md:block text-blue-500">company.</span>
        </h1>

        <p
          className="
            text-lg md:text-xl xl:text-xl 
            mb-10 
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


