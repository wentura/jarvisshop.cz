import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wide">
              KONTAKT
            </h3>
            <p className="font-light text-xs sm:text-sm">
              info@vtelno-radoun.cz
            </p>
            <p className="font-light text-xs sm:text-sm">+420 123 456 789</p>
          </div>
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wide">
              ADRESA
            </h3>
            <p className="font-light text-xs sm:text-sm">Vtelno-Radouň 123</p>
            <p className="font-light text-xs sm:text-sm">123 45 Město</p>
          </div>
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wide">
              OTEVÍRACÍ DOBA
            </h3>
            <p className="font-light text-xs sm:text-sm">
              Po - Pá: 8:00 - 18:00
            </p>
            <p className="font-light text-xs sm:text-sm">So: 8:00 - 12:00</p>
          </div>
          <div>
            <h3 className="text-sm uppercase font-bold mb-3 tracking-wide">
              DOPRAVA
            </h3>
            <p className="font-light text-xs sm:text-sm">Osobní odběr</p>
            <p className="font-light text-xs sm:text-sm">Doručení po okolí</p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-white mt-6 mb-4"></div>
        <p className="text-center font-light text-xs">
          © {new Date().getFullYear()} VTELNO-RADOUŇ. VŠECHNA PRÁVA VYHRAZENA.
        </p>
      </div>
    </footer>
  );
}
