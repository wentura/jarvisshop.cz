"use client";

import React, { useEffect, useMemo, useState } from "react";
import CategoryNavigation from "../../components/CategoryNavigation";
import Header from "../../components/Header";
import ProductGrid from "../../components/ProductGrid";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
  }
  return shuffled;
};

export default function CategoryPage({ params }) {
  const categoryId = params.id;
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/category/${categoryId}`);

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
        setCategoryName(data.currentCategory?.name?.toUpperCase() || "");
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

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
      <Header
        title={categoryName || "KATEGORIE"}
        productsCount={products.length}
        categoryName={categoryName}
      />
      <CategoryNavigation categories={categories} activeCategory={categoryId} />
      <ProductGrid products={shuffledProducts} />

      {/* Swiss-style footer with grid lines */}
      
    </div>
  );
}
