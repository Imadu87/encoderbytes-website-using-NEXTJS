"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "@/public/Images/image.webp";
import image2 from "@/public/Images/image.webp";
import image3 from "@/public/Images/image.webp";

export default function TestimonialSlider() {
  const testimonials = [
    {
      image: image1,
      paragraph:
        "I can highly recommend EncoderBytes as an app development company. They are great to work with, knowledgeable when it comes to building custom apps on flutter/firebase.",
      name: "Markus Stripf",
      designation: "Backend Software Engineer at MX",
    },
    {
      image: image2,
      paragraph:
        "EncoderBytes delivered our project ahead of schedule. Their communication and development skills are top-notch. Highly professional team!",
      name: "Jake Corry",
      designation: "Backend Software Engineer at MX",
    },
    {
      image: image3,
      paragraph:
        "Amazing experience working with EncoderBytes. The team truly understands modern app development and provides excellent support.",
      name: "Blaise Labriola",
      designation: "AI/Machine Learning & Stock Portfolio Analytics",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, [testimonials.length]);

  return (
    <section className="w-full py-16 bg-gray-200 flex justify-center">
      <div className="max-w-xl text-center px-6 transition-all duration-300 ease-in-out">
        
        {/* Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={testimonials[currentIndex].image}
            alt="Client Image"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg italic leading-relaxed">
          {testimonials[currentIndex].paragraph}
        </p>

        {/* Name */}
        <h3 className="mt-6 text-xl font-semibold text-blue-500">
          {testimonials[currentIndex].name}
        </h3>

        {/* Designation */}
        <p className="text-blue-400">
          {testimonials[currentIndex].designation}
        </p>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === i ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
