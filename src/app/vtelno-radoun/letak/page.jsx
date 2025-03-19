"use client";

import React, { useEffect, useMemo, useState } from "react";
import CategoryNavigation from "./components/CategoryNavigation";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

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
        const response = await fetch("/api/products");

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
  }, []);

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
      <Header title={title} productsCount={products.length} />
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
      />
      <ProductGrid products={shuffledProducts} />

      {/* Swiss-style footer with grid lines */}
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
    </div>
  );
}
