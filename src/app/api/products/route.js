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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("category");

    // Get all products regardless of category assignment
    const { data: allProducts, error: productsError } = await supabase.from(
      "products"
    ).select(`
        id, 
        name, 
        description, 
        price, 
        img_url,
        id_main_category,
        categories:id_main_category (
          id, 
          name
        )
      `);

    if (productsError) {
      console.error("Products error:", productsError);
      throw productsError;
    }

    // Get all categories for the menu
    const { data: allCategories, error: categoriesError } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (categoriesError) {
      console.error("Categories error:", categoriesError);
      throw categoriesError;
    }

    // Filter products by category if needed
    const filteredProducts =
      categoryId && categoryId !== "all"
        ? allProducts.filter((product) =>
            // Handle null id_main_category (uncategorized products)
            categoryId === "uncategorized"
              ? !product.id_main_category
              : product.id_main_category == categoryId
          )
        : allProducts;

    return NextResponse.json({
      categories: allCategories || [],
      products: filteredProducts || [],
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data: " + error.message },
      { status: 500 }
    );
  }
}
