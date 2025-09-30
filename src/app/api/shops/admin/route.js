import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("shops")
      .select("*")
      .order("name, id");

    if (error) throw error;

    return NextResponse.json({ shops: data });
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
      .insert([
        {
          name,
          desc: desc || null,
          logo: logo || null,
          map: map || null,
          gps: gps || null,
          short_name: short_name || null,
          id_inter: id_inter || null,
          is_visible: is_visible || false,
          is_deleted: is_deleted || false,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ shop: data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create shop" },
      { status: 500 }
    );
  }
}
