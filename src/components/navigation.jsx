"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-2 mx-auto md:px-12 sticky top-0 z-50 bg-white min-w-full stin">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <Image
          src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1732556877/jarvis-logo-rgb-02_nq2szx.png"
          alt="logo Jarvis Shop"
          width={100}
          height={45}
        />
        <ul className="items-center pr-2 gap-10 nadpisText-400 hidden md:flex">
          <li>Náš příběh</li>
          <li>Kde jsme?</li>
          <li>Jak fungujeme?</li>
          <li>Spolupracujeme</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
}
