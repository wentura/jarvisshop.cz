"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CategoryNavigation({ categories, activeCategory }) {
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === "all") {
      router.push("/vtelno-radoun/letak");
    } else {
      router.push(`/vtelno-radoun/letak/category/${categoryId}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8  hidden md:block">
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="text-xs sm:text-sm underline underline-offset-4 pb-4"
      >
        {showCategories ? "Skryj kategorie" : "Zobraz kategorie"}
      </button>
      {activeCategory !== "all" && (
        <Link
          href="/vtelno-radoun/letak"
          className="text-xs sm:text-sm underline underline-offset-4 pb-4 ml-4"
        >
          VŠE
        </Link>
      )}
      {showCategories && (
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
      )}
    </div>
  );
}
