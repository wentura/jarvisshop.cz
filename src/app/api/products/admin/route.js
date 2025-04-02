import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        categories:id_main_category (
          id,
          name
        ),
        suppliers:id_supplier (
          id,
          name
        )
      `
      )
      .order("name");

    if (error) throw error;

    return NextResponse.json({ products: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const productData = await request.json();

    if (!productData.name || !productData.price) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name: productData.name,
          description: productData.description,
          price: productData.price,
          img_url: productData.img_url,
          id_main_category: productData.id_main_category,
          id_supplier: productData.id_supplier,
          is_visible: productData.is_visible,
        },
      ])
      .select(
        `
        *,
        categories:id_main_category (
          id,
          name
        ),
        suppliers:id_supplier (
          id,
          name
        )
      `
      )
      .single();

    if (error) throw error;

    return NextResponse.json({ product: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
