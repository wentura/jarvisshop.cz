"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryNavigation({ categories, activeCategory }) {
  const router = useRouter();

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "all") {
      router.push("/vtelno-radoun/letak");
    } else {
      router.push(`/vtelno-radoun/letak/category/${categoryId}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 border-b-2 border-black">
      <div className="flex flex-wrap gap-1">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 transition-all duration-300 text-xs sm:text-sm tracking-wider font-medium ${
                activeCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))
        ) : (
          <div className="text-black">NO CATEGORIES FOUND</div>
        )}
      </div>
    </div>
  );
}
