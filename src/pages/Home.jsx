import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Hero img
import heroImg from "../assets/frontdesk.jpg";
import apartmentImg from "../assets/apartment.jpg";

// Room images
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


//resort images
import lounge from "../assets/lounge.jpg";
import resortLounge from "../assets/club4.jpg";
import Ehiresort from "../assets/Ehiresort.jpg";
import redroom from "../assets/club2.jpg";

export default function Home() {
  const rooms = [
    {
      title: "Capetown",
      price: "₦60,000 / night",
      images: [capetown1, capetown2],
      desc: "Comfortable double bed, free Wi-Fi, Work table and chair.",
    },
    {
      title: "Ontario",
      price: "₦50,000 / night",
      images: [ontario1, ontario3],
      desc: "Comfortable double bed, free Wi-Fi, Work table and chair.",
    },
    {
      title: "Rome",
      price: "₦50,000 / night",
      images: [rome1, rome2],
      desc: "Comfortable double bed, free Wi-Fi, Work table and chair.",
    },
    {
      title: "Seoul",
      price: "₦70,000 / night",
      images: [seoul, seoul2],
      desc: "Comfortable double bed, free Wi-Fi, Work table and chair.",
    },
    {
      title: "Berlin",
      price: "₦60,000 / night",
      images: [berlin1, berlin2],
      desc: "Comfortable double bed, free Wi-Fi, Work table and chair.",
    },
  ];

  return (
    <>
  {/* HERO SECTION */}
<section id="home" className="relative h-screen w-full text-white">
  <img
    src={heroImg}
    alt="Luxury hotel front desk"
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center pt-20">
    <motion.h1
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
      style={{ textShadow: '2px 4px 12px rgba(0, 0, 0, 0.9)' }}
    >
      <span className="text-[#D4AF37]">Ehi Grand Hotel</span>
    </motion.h1>

    <motion.p
      initial={{ y: 14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className="mt-6 max-w-2xl text-sm font-light tracking-[0.3em] text-white/90 sm:text-base md:text-lg uppercase"
      style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        textShadow: '2px 4px 10px rgba(0, 0, 0, 0.8)'
      }}
    >
      Where Elegance Meets Exceptional Service
    </motion.p>
       
    {/* CTA BUTTONS */}
    <motion.div
      initial={{ y: 14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      className="mt-30 flex flex-col gap-4 sm:flex-row sm:gap-4"
    >

      {/* Primary CTA - Links to Contact Page */}
      <a
        href="/contact"
        className="group relative overflow-hidden bg-[#D4AF37] text-black px-8 py-4 rounded-md font-semibold text-sm tracking-wider hover:bg-[#D4AF37] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50"
      >
        Book Now
      </a>

      {/* Secondary CTA - Links to Rooms Page */}
      <a
        href="/rooms"
        className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-md font-semibold text-sm tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-105"
      >
        View Rooms
      </a>
    </motion.div>   
  </div>
</section>



      {/* ROOMS SECTION */}
      <section id="rooms" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-3xl font-bold text-[#D4AF37]">Our Rooms</h2>
         </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
        </div>
      </section>


      {/* WHY GUESTS CHOOSE US */}
      <section
        id="why-us"
        className="bg-black py-20 text-white border-t border-[#D4AF37]/20"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-10">
            Why Guests Choose Us
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-6">
              <h3 className="mb-2 text-lg font-semibold text-[#D4AF37]">
                24/7 Power Supply
              </h3>
              <p className="text-sm text-neutral-300">
                Reliable electricity for uninterrupted comfort.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-6">
              <h3 className="mb-2 text-lg font-semibold text-[#D4AF37]">
                High-Speed Wi-Fi
              </h3>
              <p className="text-sm text-neutral-300">
                Fast internet for both work and entertainment.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-6">
              <h3 className="mb-2 text-lg font-semibold text-[#D4AF37]">
                Prime Location
              </h3>
              <p className="text-sm text-neutral-300">
                Easy access to major routes and city amenities.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-6">
              <h3 className="mb-2 text-lg font-semibold text-[#D4AF37]">
                Professional Staff
              </h3>
              <p className="text-sm text-neutral-300">
                Attentive service focused on guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

          

          {/* RESORT PREVIEW */}
<section
  id="resort-preview"
  className="theme-page py-20 border-t border-[#D4AF37]/20"
>
  <div className="mx-auto max-w-7xl px-4">
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
          The Resort Experience
        </h2>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">
          Beyond the hotel stay — discover curated nightlife, lounges, dining,
          and premium experiences designed for unforgettable moments.
        </p>
      </div>

      <a
        href="/resort"
        className="inline-flex w-fit items-center justify-center rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
        aria-label="Explore the resort page"
      >
        Explore Resort
      </a>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
     {[
  {
    title: "Lounge",
    desc: "Relaxed seating, signature drinks, and elevated vibes.",
    img: lounge,
  },
  
  {
    title: "Club",
    desc: "Premium sound, curated nights, VIP sections and dedicated service.",
    img: resortLounge,
  },
  {
    title: " Outdoor",
    desc: "Day and Nightime leisure and private hangouts in style.",
    img: Ehiresort,
  },
  {
    title: "Redroom",
    desc: "The club's best-kept secret. Tucked within our main floor, the Redroom offers VIP exclusivity with intimate ambiance.",
    img: redroom,
  },
].map((item) => (
  <motion.a
    key={item.title}
    href="/resort"
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="group relative rounded-2xl overflow-hidden theme-card border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
    aria-label={`View resort details: ${item.title}`}
  >
    {/* image */}
    <div className="relative h-52 w-full overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
    </div>

    {/* content */}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-[#D4AF37]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-300">
        {item.desc}
      </p>

      {/* button */}
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="mt-5 inline-flex items-center justify-center rounded-md border border-[#D4AF37]/70 px-4 py-2 text-xs font-semibold text-[#D4AF37] transition group-hover:bg-[#D4AF37]/10"
      >
        View details
      </motion.span>
    </div>

    {/* subtle glow */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.15)]" />
    </div>
  </motion.a>
))}

    </div>
  </div>
</section>

      {/* GALLERY PREVIEW */}
<section
  id="gallery-preview"
  className="bg-black py-20 text-white border-t border-[#D4AF37]/20"
>
  <div className="mx-auto max-w-7xl px-4">
    <div className="mb-8 flex items-baseline justify-between">
      <h2 className="text-3xl font-bold text-[#D4AF37]">Gallery Preview</h2>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div className="overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={heroImg}
          alt="Front desk"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>


      <div className="overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={capetown1}
          alt="Capetown room"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>



      <div className="overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={ontario1}
          alt="Ontario room"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>


      <div className="overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={rome1}
          alt="Rome room"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>


      <div className="overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={apartmentImg}
          alt="Apartment"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>


      {/* leave last cell empty or duplicate one image */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-[#D4AF37]/20">
        <img
          src={seoul}
          alt="Seoul room"
          className="h-40 w-full object-cover md:h-52"
        />
      </div>

      
    </div>
  </div>
</section>

    </>
  );
}


/* ROOM CARD WITH AUTO SLIDE */
function RoomCard({ room }) {
  const [current, setCurrent] = useState(0);

  // auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % room.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [room.images.length]);

  const currentImage = room.images[current];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black"
    >
      {/* FADE CAROUSEL */}
      <div className="relative h-52 w-full overflow-hidden">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={`${room.title} view ${current + 1}`}
          className="h-52 w-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {room.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-[#D4AF37]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{room.title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{room.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#D4AF37] font-bold">{room.price}</span>
          <a
            href="/rooms"
            className="rounded-md bg-[#D4AF37] px-4 py-1.5 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
          >
            View
          </a>
        </div>
      </div>
    </motion.div>

  );
}
