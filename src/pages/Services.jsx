import React from "react";

export default function Services() {
  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-3">
            Our Services
          </h1>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl">
            Ehi Grand Hotel is designed to give you a comfortable, seamless and
            relaxing stay, whether you are here for business, transit or leisure.
          </p>
        </header>

        {/* INCLUDED IN EVERY STAY */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            Included in Every Stay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard title="Complimentary Breakfast">
              Start your day with a complimentary breakfast each morning for lodged guests.
            </ServiceCard>
            <ServiceCard title="High-Speed Wi-Fi">
              Reliable internet access in rooms and public areas for work and entertainment.
            </ServiceCard>
            <ServiceCard title="24/7 Power Supply">
              Constant electricity with backup power to ensure uninterrupted comfort.
            </ServiceCard>
            <ServiceCard title="Daily Housekeeping">
              Rooms and common areas are kept clean and refreshed for your comfort.
            </ServiceCard>
            <ServiceCard title="Secure Parking">
              On-site parking with security presence for your peace of mind.
            </ServiceCard>
            <ServiceCard title="24/7 Front Desk Support">
              Assistance with check-in, enquiries, and guest needs at any time.
            </ServiceCard>
          </div>
        </section>

        {/* ADDITIONAL SERVICES */}
        <section className="mb-16 border-t border-[#D4AF37]/20 pt-10">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard title="Laundry Service">
              Optional laundry and pressing services available on request for longer stays.
            </ServiceCard>
            <ServiceCard title="Airport / City Transfers">
              Airport or city transfer arrangements can be made ahead of your arrival.
            </ServiceCard>
            <ServiceCard title="Event & Small Meeting Support">
              Support for small gatherings, meetings or intimate events (on request).
            </ServiceCard>
            <ServiceCard title="Long-Stay Apartment">
              A fully serviced apartment option for guests who want more space and privacy.
            </ServiceCard>
          </div>
        </section>

        {/* NOTE / CTA */}
        <section className="border-t border-[#D4AF37]/20 pt-10">
          <p className="text-sm text-neutral-300 max-w-2xl">
            For special requests, group bookings, or corporate arrangements, please contact us
            directly via{" "}
            <a
              href="mailto:Ehigrandhotel@gmail.com"
              className="text-[#D4AF37] hover:underline"
            >
              Ehigrandhotel@gmail.com 
            </a>{" "}
            or WhatsApp on{" "}
            <a
              href="https://wa.me/2349165084483"
              className="text-[#D4AF37] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              +234 916 508 4483
            </a>
            .
          </p>
        </section>

      </div>
    </section>
  );
}

function ServiceCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-[#D4AF37]/20 bg-linear-to-b from-neutral-900 to-black p-5">
      <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">{title}</h3>
      <p className="text-sm text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
}
