import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, text } = body;

    // Validate required field
    if (!text) {
      return NextResponse.json(
        { error: "Text zpětné vazby je povinný" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("zpetnavazba")
      .insert([
        {
          name: name || null, // if name is empty string, store as null
          email: email || null, // if email is empty string, store as null
          text: text.trim(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Nepodařilo se uložit zpětnou vazbu" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      feedback: data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se zpracovat požadavek" },
      { status: 500 }
    );
  }
}
