import Image from "next/image";

export default function Card({
  number,
  image,
  heading,
  heading_1,
  paragraph,
  width,
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-lg transition hover:scale-[1.02]"
      style={{ width }}
    >
      <div className="flex justify-between items-start">
        <div className="text-6xl font-bold text-gray-300">{number}</div>

        <Image
          src={image}
          alt={heading}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="mt-4 text-left">
        <h2 className="text-2xl font-semibold mb-2">
          {heading} <br /> <span className="text-blue-500">{heading_1}</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
}
