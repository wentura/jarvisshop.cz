"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SupplierNavigation({ suppliers, activeSupplier }) {
  const router = useRouter();
  const [showSuppliers, setShowSuppliers] = useState(false);

  const handleSupplierChange = (supplierId) => {
    if (supplierId === "all") {
      router.push("/katalog");
    } else {
      router.push(`/katalog/dodavatel/${supplierId}`);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 border-b-2 border-black hidden md:block">
      <button
        onClick={() => setShowSuppliers(!showSuppliers)}
        className=" text-xs sm:text-sm underline underline-offset-4 pb-4"
      >
        {showSuppliers ? "Skryj dodavatele" : "Zobraz dodavatele"}
      </button>
      {activeSupplier !== "all" && (
        <Link
          href="/katalog"
          className="text-xs sm:text-sm underline underline-offset-4 pb-4 ml-4"
        >
          VŠE
        </Link>
      )}
      {showSuppliers && (
        <div className="flex flex-wrap gap-1">
          {suppliers.length > 0 ? (
            suppliers.map((supplier) => (
              <button
                key={supplier.id}
                onClick={() => handleSupplierChange(supplier.id)}
                className={`px-4 py-2 transition-all duration-300 text-xs sm:text-sm tracking-wider font-medium flex items-center ${
                  activeSupplier === supplier.id
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black hover:bg-gray-100"
                }`}
              >
                {supplier.logo_url && (
                  <img
                    src={supplier.logo_url}
                    alt={supplier.name}
                    className="w-8 h-auto max-w-8 max-h-8 mr-2"
                  />
                )}
                {supplier.name}
              </button>
            ))
          ) : (
            <div className="text-black">NO SUPPLIERS FOUND</div>
          )}
        </div>
      )}
    </div>
  );
}
