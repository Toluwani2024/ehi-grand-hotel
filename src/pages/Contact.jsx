import React from "react";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">


        {/* HEADING */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-3">
            Contact & Location
          </h1>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl">
            For reservations, enquiries, events or apartment bookings, reach out to us using
            any of the channels below. Our team is available to assist you.
          </p>
        </header>



        {/* GRID: INFO + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* CONTACT INFO PANEL */}
          <div className="rounded-2xl border border-[#D4AF37]/30 bg-linear-to-b from-neutral-900 to-black p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-4">
              Visit or reach us
            </h2>

            <div className="space-y-4 text-sm text-neutral-300">
              <div>
                <p className="font-semibold text-[#D4AF37] mb-1">Address</p>
                <p>
                  7/9, Goddy Love street
                  <br />
                  Off Baale Bus stop, Egbeda,
                  <br />
                  Lagos, Nigeria.
                </p>
              </div>



              <div>
                <p className="font-semibold text-[#D4AF37] mb-1">Phone</p>
                <a href="tel:+2349165084483" className="hover:underline">
                  +234 916 508 4483
                </a>
              </div>



              <div>
                <p className="font-semibold text-[#D4AF37] mb-1">Email</p>
                <a
                  href="mailto:info@ehigrandhotel.com"
                  className="hover:underline"
                >
                  Ehigrandhotel@gmail.com 
                </a>
              </div>



              <div>
                <p className="font-semibold text-[#D4AF37] mb-1">Check-in / Check-out</p>
                <p>Check-in: 12:00 PM &nbsp;•&nbsp; Check-out: 12:00 PM</p>
              </div>
            </div>

            {/* QUICK ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2349165084483?text=Hello%20Ehi%20Grand%20Hotel,%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
              >
                <FaWhatsapp className="text-base" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+2349165084483"
                className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <FaPhoneAlt className="text-base" />
                Call Reception
              </a>
            </div>



            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wide text-neutral-500">
                Follow us
              </span>
              <a
                href="https://www.instagram.com/ehigrandhotelng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] text-xl hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/2349165084483"
                target="_blank"
                rel="noreferrer"
                className="text-[#00FF00] text-xl hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          

          {/* CONTACT FORM */}
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[#D4AF37] mb-4">
              Send us a message
            </h2>
            <p className="text-sm text-neutral-300 mb-6">
              Share your reservation request, apartment enquiry, or any special
              requirement. We will get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-[#D4AF37]"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-[#D4AF37]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-[#D4AF37]"
                    placeholder="+234..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-[#D4AF37]"
                  placeholder="Reservation, apartment enquiry, general question..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-[#D4AF37] resize-none"
                  placeholder="Share your dates, number of guests, and any special requests..."
                />
              </div>

            <a
           href="mailto:Ehigrandhotel@gmail.com?subject=Enquiry%20from%20Ehi%20Grand%20Hotel%20website&body=Please%20include%20your%20name%2C%20phone%20number%2C%20stay%20dates%2C%20and%20any%20special%20requests."
           className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#D4AF37]/90"
>
  <FaEnvelope className="text-base" />
  Send Enquiry
</a>

            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="rounded-2xl border border-[#D4AF37]/30 overflow-hidden bg-neutral-900">
          <iframe
            title="Ehi Grand Hotel Location"
            src="https://www.google.com/maps?q=Ehi+Grand+Hotel+Egbeda+Lagos&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
