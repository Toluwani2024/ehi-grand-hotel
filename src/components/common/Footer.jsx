import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#D4AF37]/20 py-12">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
            <a href="/" className="flex items-center gap-2">
                    <img 
                      src={logo} 
                      alt="Ehi Grand Hotel Logo" 
                      className="h-10 w-auto object-contain"
                    />
                  </a>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed max-w-xs">
            Luxury, comfort, and exceptional hospitality — where every stay becomes
            a memorable experience.
         </p>
        </div>

        

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li><a href="/" className="hover:text-[#D4AF37]">Home</a></li>
            <li><a href="/about" className="hover:text-[#D4AF37]">About</a></li>
            <li><a href="/rooms" className="hover:text-[#D4AF37]">Rooms</a></li>
            <li><a href="/gallery" className="hover:text-[#D4AF37]">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#D4AF37]">Contact</a></li>
            <li><a href="/faq" className="hover:text-[#D4AF37]">FAQ</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Contact</h3>

          <p className="text-sm text-neutral-300 mb-3">
            7/9, Goddy Love street <br />
            Off Baale Bus stop, Egbeda,<br />
            Lagos, Nigeria.
          </p>

          <p className="text-sm text-neutral-300 mb-3">
            Phone: <span className="text-[#D4AF37]">+234 916 508 4483</span>
          </p>

          <p className="text-sm text-neutral-300 mb-4">
            Email:{" "}
            <a
              href="mailto:info@ehigrandhotel.com"
              className="text-[#D4AF37] hover:underline"
            >
              Ehigrandhotel@gmail.com 
            </a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://wa.me/2349165084483"
              target="_blank"
              rel="noreferrer"
              className="text-[#00ff00] text-xl hover:text-white transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/ehigrandhotelng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="text-[#E4405F] text-xl hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
  <p>© 2026 Ehi Grand Hotel — All Rights Reserved.</p>
  <p className="mt-2 text-white/40">
    Designed & Built by Lumeon Dev
  </p>
</div>


    </footer>

    
  );
}