import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "300+", label: "Happy Clients" },
    { number: "01", label: "Global Office" },
    { number: "04", label: "Years In the Business" },
    { number: "50", label: "Expert Team" },
  ];

  return (
    <section className="bg-blue-500 text-white py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h3 className="text-4xl sm:text-5xl font-bold">{item.number}</h3>
            <p className="text-sm sm:text-base mt-3 uppercase tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
