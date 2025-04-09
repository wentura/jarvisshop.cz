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
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Fetch all data in parallel
    const [categoriesResponse, productsResponse, suppliersResponse] =
      await Promise.all([
        supabase.from("categories").select("id, name").order("name"),
        supabase.from("products").select("*").eq("is_visible", true),
        supabase.from("suppliers").select("*").order("name"),
      ]);

    // Log responses for debugging
    console.log("API Responses:", {
      categories: categoriesResponse,
      products: productsResponse,
      suppliers: suppliersResponse,
    });

    // Check for errors in any of the responses
    if (categoriesResponse.error) throw categoriesResponse.error;
    if (productsResponse.error) throw productsResponse.error;
    if (suppliersResponse.error) throw suppliersResponse.error;

    // Set proper headers
    return new NextResponse(
      JSON.stringify({
        categories: categoriesResponse.data || [],
        products: productsResponse.data || [],
        suppliers: suppliersResponse.data || [],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return new NextResponse(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
