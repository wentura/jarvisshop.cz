"use client";

import React, { useEffect, useState } from "react";
import CategoryNavigation from "./components/CategoryNavigation";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import SupplierNavigation from "./components/SupplierNavigation";

const title = "NAŠE NABÍDKA";

export default function Radoun() {
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSupplier, setActiveSupplier] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Get the current hostname
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || window.location.origin;
        const response = await fetch(`${baseUrl}/api/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store", // Disable caching
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to fetch data: ${errorData.error || response.status} ${
              response.statusText
            }`
          );
        }

        const data = await response.json();

        if (!data.categories || !data.products || !data.suppliers) {
          console.error("Received data:", data); // Debug log
          throw new Error("Invalid data format returned from API");
        }

        const allCategory = { id: "all", name: "VŠE" };
        const allSupplier = { id: "all", name: "VŠE" };

        const processedCategories = [
          allCategory,
          ...data.categories.map((cat) => ({
            id: cat.id,
            name: cat.name.toUpperCase(),
          })),
        ];

        const processedSuppliers = [
          allSupplier,
          ...data.suppliers.map((sup) => ({
            id: sup.id,
            name: sup.name.toUpperCase(),
          })),
        ];

        setCategories(processedCategories);
        setSuppliers(processedSuppliers);
        setProducts(data.products);
      } catch (err) {
        setError(
          `Failed to fetch data: ${err.message}. Please try again later or contact support.`
        );
        console.error("Error fetching data:", {
          message: err.message,
          stack: err.stack,
          url: window.location.href,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <SupplierNavigation
        suppliers={suppliers}
        activeSupplier={activeSupplier}
      />
      <ProductGrid products={products} />
    </div>
  );
}
