"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-2 mx-auto md:px-12 sticky top-0 z-50 bg-white min-w-full stin">
      <div className="min-w-full flex justify-between">
        <Image
          src="https://res.cloudinary.com/dqtptqvnb/image/upload/v1732556877/jarvis-logo-rgb-02_nq2szx.png"
          alt="logo Jarvis Shop"
          width={100}
          height={45}
        />
        <ul className="flex items-center pr-2 gap-6">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
}
