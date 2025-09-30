import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const {
      name,
      desc,
      logo,
      map,
      gps,
      short_name,
      id_inter,
      is_visible,
      is_deleted,
    } = await request.json();

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("shops")
      .update({
        name,
        desc: desc || null,
        logo: logo || null,
        map: map || null,
        gps: gps || null,
        short_name: short_name || null,
        id_inter: id_inter || null,
        is_visible,
        is_deleted,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ shop: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update shop" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Soft delete - mark as deleted instead of actually deleting
    const { data, error } = await supabase
      .from("shops")
      .update({ is_deleted: true })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ shop: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete shop" },
      { status: 500 }
    );
  }
}
