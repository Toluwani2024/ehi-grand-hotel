import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import club4 from "../assets/club4.jpg";
import lounge1 from "../assets/lounge.jpg";
import casaclub from "../assets/casaclub.jpg";
import club3  from "../assets/club3.jpg";
import Ehiresort from "../assets/Ehiresort.jpg";
import img from "../assets/IMG_2574.jpg";
import club from "../assets/club.jpg";

export default function Resort() {
  const experiences = useMemo(
    () => [
      {
        title: "Club",
        subtitle: "Nightlife & VIP tables",
        desc: "Premium sound, curated nights, VIP sections and dedicated service — built for unforgettable evenings.",
        image: club4,
      },
      {
        title: "Lounge",
        subtitle: "Relaxed luxury",
        desc: "Sophisticated seating, signature drinks and a calm atmosphere for guests who want premium comfort.",
        image: lounge1,
      },
    ],
    []
  );

  const gallery = useMemo(
    () => [
      { src: club4, label: "Club" },
      { src: lounge1, label: "Lounge" },
      {src: casaclub ,label: "Nightlife"},
      {src: club3, label: "redroom"},
      {src: Ehiresort, label: "Outdoor experience"},
      {src: img, label :"lounge bar"},
      {src: club, label: "VIP club"}
    ],
    []
  );

  const [selected, setSelected] = useState(null);

  return (
    <div className="theme-page">
      {/* HERO */}
      <header className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={club4}
          alt="Ehi Grand Resort experience"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ textShadow: "0 12px 40px rgba(0,0,0,0.8)" }}
          >
            <span className="text-[#D4AF37]">Ehi</span>{" "}
            <span className="text-white">Grand Resort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm md:text-base text-neutral-200"
            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.75)" }}
          >
            A curated destination for premium nights, lounges, dining and outdoor
            leisure — designed for unforgettable experiences.
          </motion.p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#experiences"
              className="rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
              aria-label="Explore resort experiences"
            >
              Explore Experiences
            </a>

            <a
              href="https://wa.me/2349165084483?text=Hello%20Ehi%20Grand%20Resort,%20I%20want%20to%20make%20a%20reservation%20or%20enquiry."
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#D4AF37]/70 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
              aria-label="Chat with resort on WhatsApp"
            >
              Book / Enquire (WhatsApp)
            </a>
          </div>
        </div>
      </header>

      {/* QUICK STATS / TRUST STRIP */}
      <section className="border-t border-[#D4AF37]/20">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { k: "VIP Sections", v: "Premium service" },
              { k: "Security", v: "Comfort & safety" },
              { k: "Parking", v: "Easy access" },
              { k: "Hospitality", v: "Guest-first care" },
            ].map((item) => (
              <div key={item.k} className="theme-card rounded-2xl p-5">
                <div className="text-sm font-semibold text-[#D4AF37]">
                  {item.k}
                </div>
                <div className="mt-2 text-xs text-muted">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="experiences"
        className="border-t border-[#D4AF37]/20 py-20"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              Resort Experiences
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">
              Explore curated spaces built for nights out, relaxed luxury, and
              premium moments.
            </p>
          </div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {experiences.map((x) => (
              <motion.article
                key={x.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="theme-card overflow-hidden rounded-2xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={x.image}
                    alt={`${x.title} at Ehi Grand Resort`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold text-[#D4AF37]">
                    {x.subtitle}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{x.title}</h3>
                  <p className="mt-3 text-sm text-muted">{x.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/2349165084483?text=Hello%20Ehi%20Grand%20Resort,%20I%20want%20to%20reserve%20a%20VIP%20spot%20/%20table."
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
                      aria-label={`Reserve for ${x.title} via WhatsApp`}
                    >
                      Reserve via WhatsApp
                    </a>



                    <button
                      type="button"
                      onClick={() => setSelected({ src: x.image, label: x.title })}
                      className="rounded-md border border-[#D4AF37]/60 px-4 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
                      aria-label={`Preview ${x.title} image`}
                    >
                      Preview
                    </button>


                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="resort-gallery" className="border-t border-[#D4AF37]/20 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                Resort Gallery
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">
                Tap any image to view it in full.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelected(img)}
                className="theme-card group overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label={`Open image: ${img.label}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48"
                />
                <div className="px-3 py-2 text-xs text-muted">{img.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY / CTA */}
      <section className="border-t border-[#D4AF37]/20 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="theme-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
              Reserve a Premium Experience
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">
              For VIP tables, lounges, private hangouts, celebrations or event
              enquiries, reach out with your date and guest count.
            </p>



            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2349165084483?text=Hello%20Ehi%20Grand%20Resort,%20I%20want%20to%20make%20a%20reservation.%20Date:%20%20Guests:%20%20Package:%20"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
                aria-label="Enquire via WhatsApp"
              >
                Enquire via WhatsApp
              </a>



              <a
                href="mailto:info@ehigrandhotel.com?subject=Resort%20Enquiry&body=Hello%20Ehi%20Grand%20Resort,%0D%0A%0D%0AI%20want%20to%20make%20a%20reservation.%0D%0ADate:%0D%0AGuests:%0D%0AClub/Lounge:%0D%0ABudget:%0D%0AOther%20details:"
                className="rounded-md border border-[#D4AF37]/60 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
                aria-label="Enquire via email"
              >
                Enquire via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative max-h-[90vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.9)]">
                <div className="bg-black">
                  <img
                    src={selected.src}
                    alt={selected.label}
                    className="max-h-[72vh] w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-[#D4AF37]/30 bg-black/85 px-4 py-3 text-xs text-neutral-300">
                  <span className="truncate">{selected.label}</span>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded-md border border-[#D4AF37]/60 px-3 py-1 text-[11px] font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
                    aria-label="Close preview"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
