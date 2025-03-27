import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Add this debug check
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
}

const supabase = createRouteHandlerClient({ cookies });

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
    // Fetch suppliers separately to ensure we get all of them
    const { data: suppliers, error: suppliersError } = await supabase
      .from("suppliers")
      .select("id, name")
      .order("name"); // Optional: order suppliers alphabetically

    if (suppliersError) throw suppliersError;

    const [categoriesResponse, productsResponse] = await Promise.all([
      supabase.from("categories").select("id, name"),
      supabase.from("products").select("*"),
    ]);

    if (categoriesResponse.error) throw categoriesResponse.error;
    if (productsResponse.error) throw productsResponse.error;

    // Shuffle the products
    const shuffledProducts = shuffleArray(productsResponse.data || []);

    return NextResponse.json({
      categories: categoriesResponse.data,
      products: shuffledProducts,
      suppliers: suppliers,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
