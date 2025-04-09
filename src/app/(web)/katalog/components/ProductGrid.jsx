import React from "react";

export default function ProductGrid({ products }) {
  return (
    <div className="container mx-auto px-6 py-12">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-10">
          {products.map((product) => (
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
                {/* Show category name if available */}
                {product.categories && (
                  <p className="text-gray-500 text-xs mt-1">
                    {product.categories.name}
                  </p>
                )}
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
  );
}
