import React from "react";

const faqs = [
  {
    q: "Is breakfast included in the room rate?",
    a: "Yes. Lodged guests enjoy complimentary breakfast in the morning as part of their stay.",
  },


  {
    q: "How can I make a reservation?",
    a: "You can book via WhatsApp, phone call, email, or by sending an enquiry through our Contact page.",
  },


  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 2:00 PM and check-out is by 12:00 PM.",
  },


  {
    q: "Do you have parking available?",
    a: "Yes. We provide on-site secure parking for guests.",
  },


  {
    q: "Do you offer a serviced apartment for long stays?",
    a: "Yes. We have a fully serviced apartment ideal for long stays and premium guests. Details are available on our Rooms and Services pages.",
  },


  {
    q: "Is there Wi-Fi in the rooms?",
    a: "Yes. High-speed Wi-Fi is available in all rooms and public areas.",
  },

  
  {
    q: "How do I contact the hotel directly?",
    a: "You can reach us via phone, WhatsApp, or email on the Contact page. Our team is available to assist you.",
  },
];

export default function FAQ() {
  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl">
            Find quick answers to some of the most common questions about Ehi Grand
            Hotel, our services and guest experience.
          </p>
        </header>

        

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-5"
            >
              <h2 className="text-sm md:text-base font-semibold text-[#D4AF37] mb-2">
                {item.q}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
