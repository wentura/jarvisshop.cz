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

    // Get products for the specific category
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select(
        `
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
      `
      )
      .eq("id_main_category", categoryId);

    if (productsError) {
      console.error("Products error:", productsError);
      throw productsError;
    }

    // Get all categories for the navigation
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (categoriesError) {
      console.error("Categories error:", categoriesError);
      throw categoriesError;
    }

    // Get the current category for the title
    const { data: currentCategory, error: currentCategoryError } =
      await supabase
        .from("categories")
        .select("name")
        .eq("id", categoryId)
        .single();

    if (currentCategoryError) {
      console.error("Current category error:", currentCategoryError);
      throw currentCategoryError;
    }

    return NextResponse.json({
      products: products || [],
      categories: categories || [],
      currentCategory: currentCategory || null,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data: " + error.message },
      { status: 500 }
    );
  }
}
