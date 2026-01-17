import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
import apartmentImg from "../assets/apartment.jpg";


const rooms = [
  {
    title: "Capetown",
    price: "₦60,000 / night",
    images: [capetown1, capetown2],
    desc: "Ideal for business and leisure guests, with a calm ambience for rest.",
    size: "24 m²",
    bedType: "Queen-size bed",
    maxGuests: 2,
    amenities: [
      "Free high-speed Wi-Fi",
      "Air conditioning",
      "Work desk and chair",
      "Smart TV",
      "En-suite bathroom",
    ],
  },
  {
    title: "Ontario",
    price: "₦50,000 / night",
    images: [ontario1, ontario3],
    desc: "Comfortable and functional, perfect for short or extended stays.",
    size: "26 m²",
    bedType: "Queen-size bed",
    maxGuests: 2,
    amenities: [
      "Free high-speed Wi-Fi",
      "Air conditioning",
      "Work desk and chair",
      "Mini fridge",
      "Smart TV",
    ],
  },
  {
    title: "Rome",
    price: "₦50,000 / night",
    images: [rome1, rome2],
    desc: "Stylish room with warm lighting and a relaxed, premium feel.",
    size: "28 m²",
    bedType: "King-size bed",
    maxGuests: 2,
    amenities: [
      "Free high-speed Wi-Fi",
      "Air conditioning",
      "Large wardrobe",
      "Smart TV",
      "En-suite bathroom",
    ],
  },
  {
    title: "Seoul",
    price: "₦70,000 / night",
    images: [seoul, seoul2],
    desc: "Modern design with a clean and minimal interior finish.",
    size: "25 m²",
    bedType: "Queen-size bed",
    maxGuests: 2,
    amenities: [
      "Free high-speed Wi-Fi",
      "Air conditioning",
      "Work desk and chair",
      "Smart TV",
      "24/7 room service",
    ],
  },
  {
    title: "Berlin",
    price: "₦60,000 / night",
    images: [berlin1, berlin2],
    desc: "Cozy, well-lit room with the essentials for a comfortable stay.",
    size: "24 m²",
    bedType: "Queen-size bed",
    maxGuests: 2,
    amenities: [
      "Free high-speed Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Reading lights",
      "En-suite bathroom",
    ],
  },
];

export default function Rooms() {
  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[#D4AF37]">Our Rooms</h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-300">
            Browse all our room options. Each room is designed for comfort,
            privacy and a smooth stay at Ehi Grand Hotel. You can book directly
            via WhatsApp or email.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
              
              
     {/* APARTMENT SECTION */}
           <section
             id="apartment"
             className="bg-black py-20 text-white border-t border-[#D4AF37]/20"
           >
             <div className="mx-auto max-w-7xl px-4">
               <h2 className="text-3xl font-bold text-[#D4AF37] mb-8">
                 Our Apartment
               </h2>
     
               <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
                 {/* Apartment image */}
                 <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/30">
                   <img
                     src={apartmentImg}
                     alt="Ehi Grand Hotel Apartment"
                     className="h-full w-full object-cover"
                   />
                 </div>
     
                 {/* Apartment details */}
                 <div>
                   <h3 className="text-2xl font-semibold mb-3">
                     Luxury Serviced Apartment
                   </h3>
     
                   <p className="text-sm text-neutral-300 mb-4">
                     Spacious, fully furnished apartment ideal for long stays and
                     premium guests. Includes living area, bedroom, kitchen,
                     workspace, and private bathroom.
                   </p>
     
                   <ul className="mb-6 space-y-2 text-sm text-neutral-200">
                     <li>• Fully furnished living room and bedroom</li>
                     <li>• Equipped kitchen</li>
                     <li>• High–speed Wi-Fi</li>
                     <li>• 24/7 power supply</li>
                     <li>• Secure parking</li>
                     <li>• Daily cleaning on request</li>
                   </ul>
     
                   <div className="mb-4 text-lg font-bold text-[#D4AF37]">
                     ₦200,000 / night
                   </div>
     
                   <div className="flex flex-wrap gap-3">
                     {/* WhatsApp booking */}
                     <a
                       href="https://wa.me/2349165084483?text=Hello%20Ehi%20Grand%20Hotel,%20I%20want%20to%20book%20the%20apartment."
                       target="_blank"
                       rel="noreferrer"
                       className="rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
                     >
                       Book via WhatsApp
                     </a>
     
                     {/* Email booking */}
                     <a
                       href="mailto:info@ehigrandhotel.com?subject=Apartment%20Booking&body=Hello%20Ehi%20Grand%20Hotel,%0D%0A%0D%0AI%20would%20like%20to%20book%20the%20apartment.%0D%0A%0D%0AStay%20dates:%0D%0AGuests:%0D%0AOther%20details:"
                       className="rounded-md border border-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
                     >
                       Book via Email
                     </a>
                   </div>
                 </div>
               </div>
             </div>
           </section>
            </div>
    </section>
  );
}

function RoomCard({ room }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % room.images.length),
      5000
    );
    return () => clearInterval(timer);
  }, [room.images.length]);

  const currentImage = room.images[current];

  const whatsappMessage = encodeURIComponent(
    `Hello Ehi Grand Hotel,\n\nI would like to book the ${room.title} room.\n\nPreferred dates:\nNumber of guests:\nOther details:`
  );
  const whatsappLink = `https://wa.me/2349165084483?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`${room.title} Room Booking`);
  const emailBody = encodeURIComponent(
    `Hello Ehi Grand Hotel,\n\nI would like to book the ${room.title} room.\n\nPreferred check-in date:\nPreferred check-out date:\nNumber of guests:\nOther details:\n`
  );
  const emailLink = `mailto:info@ehigrandhotel.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black"
    >
      {/* Image carousel */}
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

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{room.title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{room.desc}</p>

        <div className="mt-3 flex flex-wrap gap-3 text-xs text-neutral-300">
          <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1">
            {room.size}
          </span>
          <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1">
            {room.bedType}
          </span>
          <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1">
            Max {room.maxGuests} guests
          </span>
        </div>

        <ul className="mt-3 space-y-1 text-xs text-neutral-300">
          {room.amenities.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#D4AF37] text-base font-bold">
            {room.price}
          </span>
        </div>

        {/* Booking buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-semibold text-black hover:bg-[#D4AF37]/90"
          >
            Book via WhatsApp
          </a>

          <a
            href={emailLink}
            className="rounded-md border border-[#D4AF37] px-4 py-2 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            Book via Email
          </a>
        </div>
      </div>
    </motion.div>
  );
}
