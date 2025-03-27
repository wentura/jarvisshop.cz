"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import ProductGrid from "../../components/ProductGrid";
import SupplierNavigation from "../../components/SupplierNavigation";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
  }
  return shuffled;
};

export default function SupplierPage({ params }) {
  const supplierId = params.id;
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [supplierName, setSupplierName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/supplier/${supplierId}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to fetch data: ${errorData.error || response.statusText}`
          );
        }

        const data = await response.json();

        if (!data.suppliers || !data.products) {
          throw new Error("Invalid data format returned from API");
        }

        const allSupplier = { id: "all", name: "VŠE" };
        const processedSuppliers = [
          allSupplier,
          ...data.suppliers.map((sup) => ({
            id: sup.id,
            name: sup.name.toUpperCase(),
          })),
        ];

        setSuppliers(processedSuppliers);
        setProducts(data.products);
        setSupplierName(data.currentSupplier?.name?.toUpperCase() || "");
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [supplierId]);

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
        title={supplierName || "DODAVATEL"}
        productsCount={products.length}
        categoryName={supplierName}
      />
      <SupplierNavigation suppliers={suppliers} activeSupplier={supplierId} />
      <ProductGrid products={shuffledProducts} />
    </div>
  );
}
