import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Add this debug check
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request, { params }) {
  try {
    const categoryId = params.id;

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    // Fetch all data in parallel
    const [productsResponse, categoriesResponse, currentCategoryResponse] =
      await Promise.all([
        supabase
          .from("products")
          .select(
            `
          id, 
          name, 
          description, 
          price, 
          img_url,
          id_main_category,
          categories:id_main_category (id, name)
        `
          )
          .eq("id_main_category", categoryId),
        supabase.from("categories").select("*").order("name"),
        supabase
          .from("categories")
          .select("name")
          .eq("id", categoryId)
          .single(),
      ]);

    // Check for errors
    if (productsResponse.error) throw productsResponse.error;
    if (categoriesResponse.error) throw categoriesResponse.error;
    if (currentCategoryResponse.error) throw currentCategoryResponse.error;

    return NextResponse.json({
      products: productsResponse.data || [],
      categories: categoriesResponse.data || [],
      currentCategory: currentCategoryResponse.data || null,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
