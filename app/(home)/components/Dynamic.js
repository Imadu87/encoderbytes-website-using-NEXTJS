export default function Dynamic({ heading, heading_1, button, paragraph }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left max-w-3xl">
        <h1 className="uppercase text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
          {heading} <br />
          <span className="text-blue-500">{heading_1}</span>.
        </h1>

        {/* Mobile + Tablet Button */}
        <div className="md:hidden mb-4">
          <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white font-medium transition">
            {button}
          </button>
        </div>

        <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* Tablet + Desktop Button */}
      <div className="hidden md:flex md:justify-center lg:justify-start">
        <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white font-medium transition max-w-xs truncate whitespace-nowrap">
          {button}
        </button>
      </div>
    </div>
  );
}
