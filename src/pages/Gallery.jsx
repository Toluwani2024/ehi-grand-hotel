import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import view from "../assets/view.jpg";
import heroImg from "../assets/frontdesk.jpg";
import frontdesksideview from "../assets/frontdesksideview.jpg";
import hallway from "../assets/hallway.jpg";
import apartmentImg from "../assets/apartment.jpg";
import res from "../assets/res1.jpg";
import capetown1 from "../assets/capetown1.jpg";
import capetown2 from "../assets/capetown2.jpg";
import ontario1 from "../assets/ontario1.jpg";
import ontario3 from "../assets/ontario3.jpg";
import rome1 from "../assets/rome1.jpg";
import rome2 from "../assets/rome2.jpg";
import seoul from "../assets/seoul.jpg";
import seoul2 from "../assets/seoul2.jpg";
import berlin1 from "../assets/berlin1.jpg";
import berlin2 from "../assets/berlin2.jpg";
import pool from "../assets/pool.jpg";
import bartenderimg from "../assets/bartenderimg.jpg";
import bar1 from "../assets/bar1.jpg";
import kitchen from "../assets/kitchen.jpg";
import room1 from "../assets/aptroom1.jpg";
import room2 from "../assets/aptroom2.jpg";
import room3 from "../assets/aptroom3.jpg";
import worktable from "../assets/worktable.jpg";
import cp from "../assets/cp.jpg";
import img from "../assets/IMG_0206.jpg";
import img1 from "../assets/IMG_0228.jpg";


const galleryImages = [
  { src: view, label: "Outside View" },
  { src: frontdesksideview, label: "Front Desk Side View" },
  { src: heroImg, label: "Front Desk" },
  { src: hallway, label: "Hallway" },
  { src: res, label: "Restaurant" },
  { src: capetown1, label: "Capetown Room" },
  { src: capetown2, label: "Capetown Room View" },
  { src: ontario1, label: "Ontario Room" },
  { src: ontario3, label: "Ontario Room View" },
  { src: rome1, label: "Rome Room" },
  { src: rome2, label: "Rome Room Detail" },
  { src: seoul, label: "Seoul Room" },
  { src: seoul2, label: "Seoul Room Detail" },
  { src: berlin1, label: "Berlin Room" },
  { src: berlin2, label: "Berlin Room Detail" },
  { src: apartmentImg, label: "Apartment living room" },
  { src: room1, label: "Apartment Bedroom " },
  { src: room2, label: "Apartment Bedroom " },
  { src: room3, label: "Apartment Bedroom " },
  { src: kitchen, label: " Apartment Kitchen" },
  { src: pool, label: "Pool" },
  { src: bartenderimg, label: "Bartender" },
  { src: bar1, label: "Bar" },
  {src: worktable, label: "Worktable"},
  {src: seoul, label: "seoul room view "},
  {src: cp , label :"capetown"},
  {src: img, label: "Apartmentview "},
  {src: img1, label: ""},
];

export default function Gallery() {
  const [selected, setSelected] = useState(null); // { src, label } | null

  return (
    <>
      <section className="min-h-screen bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* HEADER */}
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-[#D4AF37]">Gallery</h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-300">
              Explore views of our rooms, apartment, bar, restaurant and hotel
              spaces. Tap on any picture to see it in a larger view.
            </p>
          </header>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(item)}
                className="group overflow-hidden rounded-xl border border-[#D4AF37]/20 bg-neutral-900 text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48"
                />
                <div className="px-3 py-2 text-xs text-neutral-300">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <div className="bg-black">
                  <img
                    src={selected.src}
                    alt={selected.label}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-[#D4AF37]/30 bg-black/80 px-4 py-3 text-xs text-neutral-300">
                  <span className="truncate">{selected.label}</span>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-md border border-[#D4AF37]/60 px-3 py-1 text-[11px] font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
