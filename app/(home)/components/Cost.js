import Image from "next/image";
import cost from "@/public/Images/cost.jpg";

export default function Cost() {
  return (
    <div className="relative h-[40vh] md:h-[50vh] lg:h-[40vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src={cost}
        alt="Cost background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div
        className="
          px-6 sm:px-12 md:px-16 lg:px-32
          flex flex-col md:flex-row
          items-center md:items-center
          text-center md:text-left
          justify-between w-full max-w-6xl mx-auto
          gap-8
        "
      >
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4">
            Let’s discuss.{" "}
            <span className="text-blue-500">
              How much <br className="hidden sm:block" /> Your App Costs?
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-full md:max-w-md mb-4 md:mb-0">
            Send us the features you are looking to build, and we shall advise
            on the next steps.
          </p>
        </div>

        {/* Button Section */}
        <div className="">
          <button
            className="
              border border-white 
              px-6 py-2 rounded-lg font-semibold 
              text-white bg-blue-500
              hover:bg-transparent hover:text-blue-500 hover:border-blue-500
              transition-all duration-300
              text-sm sm:text-base
            "
          >
            Lets Discuss
          </button>
        </div>
      </div>
    </div>
  );
}
