import Image from "next/image";
import cost from "@/public/Images/cost.jpg";

export default function Cost() {
  return (
    <div className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src={cost}
        alt="Cost background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div
        className="
          px-6 sm:px-12 md:px-32 py-12 md:py-20 
          flex flex-col md:flex-row 
          items-center md:items-center 
          text-center md:text-left 
          justify-between w-full max-w-6xl mx-auto
          gap-8
        "
      >
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-3xl font-bold leading-tight mb-4">
            Let’s discuss.{" "}
            <span className="text-blue-500">
              How much <br className="hidden sm:block" /> Your App Costs?
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0 mb-6 md:mb-0">
            Send us the features you are looking to build, and we shall advise
            on the next steps.
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button
            className="
              border border-white 
              px-6 py-2 rounded-lg font-semibold 
              text-white bg-blue-500
              hover:bg-transparent hover:text-blue-500 hover:border-blue-500
              transition-all duration-300
              text-base sm:text-lg
            "
          >
            Lets Discuss
          </button>
        </div>
      </div>
    </div>
  );
}
