"use client";

import React, { useEffect, useMemo, useState } from "react";

const title = "NAŠE NABÍDKA";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
  }
  return shuffled;
};

export default function Radoun() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/products${
            activeCategory !== "all" ? `?category=${activeCategory}` : ""
          }`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to fetch data: ${errorData.error || response.statusText}`
          );
        }

        const data = await response.json();

        if (!data.categories || !data.products) {
          throw new Error("Invalid data format returned from API");
        }

        const allCategory = { id: "all", name: "VŠE" };
        const processedCategories = [
          allCategory,
          ...data.categories.map((cat) => ({
            id: cat.id,
            name: cat.name.toUpperCase(),
          })),
        ];

        setCategories(processedCategories);
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeCategory]);

  // Shuffle products for display
  const shuffledProducts = useMemo(() => {
    return shuffleArray(products);
  }, [products]);

  if (loading) {
    return (
      <div className="w-full bg-white min-h-screen flex justify-center items-center">
        <div className="text-black text-2xl font-light tracking-wide">
          NAČÍTÁNÍ...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white min-h-screen flex justify-center items-center">
        <div className="text-black text-2xl font-light">CHYBA: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {/* Swiss-style header with red block */}
      <div className="bg-red-600 w-full py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight uppercase">
            {title}
          </h1>
          <div className="w-24 h-1 bg-white mt-4"></div>
        </div>
      </div>

      {/* Category navigation with Swiss-style tabs */}
      <div className="container mx-auto px-6 py-8 border-b-2 border-black">
        <div className="flex flex-wrap gap-1">
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
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

      {/* 4-column grid on large screens, 2-column on mobile with smaller images */}
      <div className="container mx-auto px-6 py-12">
        {shuffledProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-10">
            {shuffledProducts.map((product) => (
              <div key={product.id} className="group bg-white flex flex-col">
                {/* Smaller image container */}
                <div
                  className="relative bg-gray-50 mb-3 overflow-hidden"
                  style={{ height: "120px" }}
                >
                  <img
                    src={product.img_url}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />

                  {/* Swiss-style price tag - smaller for compact layout */}
                  <div className="absolute bottom-0 right-0 bg-red-600 text-white font-bold px-3 py-1 text-sm">
                    {product.price} Kč
                  </div>
                </div>

                {/* Typography-focused product info - more compact */}
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm sm:text-base font-bold text-black uppercase tracking-tight line-clamp-2">
                    {product.name}
                  </h2>
                  <div className="w-8 h-0.5 bg-red-600"></div>
                  <p className="text-black text-xs sm:text-sm font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-black text-xl mt-8 font-light tracking-wide">
            ŽÁDNÉ PRODUKTY NENALEZENY
          </div>
        )}
      </div>

      {/* Swiss-style footer with grid lines */}
    </div>
  );
}
