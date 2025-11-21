import Image from "next/image";

export default function ContentImage({
  img,
  heading,
  heading_1,
  heading_2,
  paragraph,
  button_1,
  button_2,
  reverse = false, 
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 items-center lg:items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={img}
          alt={heading_1 || heading}
          className="w-full h-auto object-cover rounded-xl shadow-md"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 sm:px-6 md:py-0">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{heading}</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
          {heading_1} <br />
          <span className="text-blue-500">{heading_2}</span>
        </h1>
        <p className="text-gray-600 mb-6">{paragraph}</p>

        {(button_1 || button_2) && (
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {button_1 && (
              <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-transparent hover:text-blue-500 border border-blue-500 transition-all duration-300">
                {button_1}
              </button>
            )}
            {button_2 && (
              <button className="bg-transparent text-blue-500 font-medium px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white border border-blue-500 transition-all duration-300">
                {button_2}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
