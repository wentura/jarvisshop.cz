import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updateData = await request.json();

    const { data, error } = await supabase
      .from("products")
      .update({
        name: updateData.name,
        description: updateData.description,
        price: updateData.price,
        img_url: updateData.img_url,
        id_main_category: updateData.id_main_category,
        id_supplier: updateData.id_supplier,
        is_visible: updateData.is_visible,
        is_in_shop_inter_id: updateData.is_in_shop_inter_id || [],
        is_on_landing_page: updateData.is_on_landing_page || false,
        is_on_shop_landing_page: updateData.is_on_shop_landing_page || false,
      })
      .eq("id", id)
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
      { error: error.message || "Failed to update product" },
      { status: 500 }
    );
  }
}
