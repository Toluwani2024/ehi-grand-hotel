import React from "react";
import heroImg from "../assets/frontdesksideview.jpg";
import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white">
      
      {/* HERO BANNER */}
      <div className="relative w-full bg-black ">
      <div className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Ehi Grand Hotel"
          className="max -h-full w-auto object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to -black/90" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-4 text-center text-4xl md:text-6xl font-extrabold  text-[#D4AF37]"
          >
            About Ehi Grand Hotel
          </motion.h1>
        </div>
      </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        
        {/* INTRO PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-neutral-300 text-lg leading-relaxed mb-16 max-w-4xl"
        >
          At Ehi Grand Hotel, we redefine hospitality with a blend of comfort,
          serenity, and exceptional service. Every detail is carefully curated
          to ensure your stay is memorable, from the moment you arrive to the
          moment you depart.
        </motion.p>

        {/* DIVIDER */}
        <div className="h-1px w-full bg-[#D4AF37]/20 mb-16"></div>

        {/* MISSION + VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Mission</h2>
            <p className="text-neutral-300 leading-relaxed text-sm">
              To provide an exceptional hospitality experience that ensures every guest 
              feels valued, relaxed, and comfortable from arrival to departure.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Vision</h2>
            <p className="text-neutral-300 leading-relaxed text-sm">
              To be a leading hospitality destination recognized for excellence, 
              personalized service, and genuine care—setting the global standard
              for memorable stays and exceptional guest satisfaction.
            </p>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="h-1px w-full bg-[#D4AF37]/20 mb-16"></div>

        {/* CORE VALUES */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-[#D4AF37] mb-8"
        >
          Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          <ValueItem title="Hospitality">
            We welcome every guest with warmth, respect, and a sincere smile.
          </ValueItem>

          <ValueItem title="Integrity">
            Honesty, fairness, and transparency guide everything we do.
          </ValueItem>

          <ValueItem title="Teamwork">
            We work together as one family to create seamless guest experiences.
          </ValueItem>

          <ValueItem title="Customer Satisfaction">
            We listen, respond, and go the extra mile to exceed expectations.
          </ValueItem>

        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mt-12"
        >
          <p className="text-neutral-300 text-lg">
            At Ehi Grand Hotel, luxury isn’t just a promise—it's an experience.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* VALUE ITEM COMPONENT */
function ValueItem({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-xl border border-[#D4AF37]/20 p-6 bg-linear-to-b from-neutral-900 to-black"
    >
      <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">{title}</h3>
      <p className="text-neutral-300 text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
}
