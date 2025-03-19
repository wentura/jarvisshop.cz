import React from "react";

export default function Header({ title, productsCount, categoryName }) {
  return (
    <div className="bg-red-600 w-full py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight uppercase">
          {title}
        </h1>
        <div className="w-24 h-1 bg-white mt-4"></div>
        <p className="text-white mt-4">
          {productsCount > 0 ? (
            <>
              Celkem {productsCount} produktů
              {categoryName && categoryName !== "VŠE"
                ? ` v kategorii ${categoryName}`
                : ""}
            </>
          ) : (
            "Žádné produkty k zobrazení"
          )}
        </p>
      </div>
    </div>
  );
}
