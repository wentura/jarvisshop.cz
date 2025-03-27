import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
  }
  return shuffled;
};

export async function GET() {
  try {
    // Check environment variables
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      throw new Error("Missing Supabase environment variables");
    }

    // Fetch all data in parallel
    const [categoriesResponse, productsResponse, suppliersResponse] =
      await Promise.all([
        supabase.from("categories").select("id, name").order("name"),
        supabase.from("products").select("*"),
        supabase.from("suppliers").select("id, name").order("name"),
      ]);

    // Check for errors in any of the responses
    if (categoriesResponse.error) {
      console.error("Categories error:", categoriesResponse.error);
      throw new Error(`Categories error: ${categoriesResponse.error.message}`);
    }
    if (productsResponse.error) {
      console.error("Products error:", productsResponse.error);
      throw new Error(`Products error: ${productsResponse.error.message}`);
    }
    if (suppliersResponse.error) {
      console.error("Suppliers error:", suppliersResponse.error);
      throw new Error(`Suppliers error: ${suppliersResponse.error.message}`);
    }

    return NextResponse.json({
      categories: categoriesResponse.data,
      products: shuffleArray(productsResponse.data),
      suppliers: suppliersResponse.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
