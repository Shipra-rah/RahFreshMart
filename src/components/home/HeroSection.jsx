import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "../../data/heroData";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="px-6 py-16 bg-[#f7f3ea]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold text-slate-900 leading-tight">
            {slide.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition">
              Shop Now
            </button>
            <button className="px-8 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[320px] lg:h-[380px] rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>

      {/* DOT INDICATORS */}
      <div className="mt-10 flex justify-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all ${
              i === index ? "bg-slate-800 w-8" : "bg-slate-300 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
