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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });

        // Log the raw response for debugging
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        // Try to parse the response as JSON
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseError) {
          throw new Error(
            `Invalid JSON response: ${responseText.substring(0, 100)}...`
          );
        }

        if (!response.ok) {
          throw new Error(`Server error: ${data.error || response.statusText}`);
        }

        if (!data.categories || !data.products || !data.suppliers) {
          console.error("Received data structure:", data);
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
            logo_url: sup.logo_url,
          })),
        ];

        setCategories(processedCategories);
        setSuppliers(processedSuppliers);
        setProducts(data.products);
      } catch (err) {
        const errorMessage = `Failed to fetch data: ${err.message}`;
        console.error("Error details:", {
          message: err.message,
          stack: err.stack,
          url: window.location.href,
        });
        setError(errorMessage);
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
        activeCatewgory={activeCategory}
      />
      <SupplierNavigation
        suppliers={suppliers}
        activeSupplier={activeSupplier}
      />
      <ProductGrid products={products} />
    </div>
  );
}
