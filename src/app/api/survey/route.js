import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Ensure this is SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { error: "Neplatný formát dat" },
        { status: 400 }
      );
    }

    // Destructure all potential fields from the body
    const {
      age,
      distance,
      frequency,
      pref_farmarske_produkty,
      pref_cerstve_pecivo,
      pref_mlecne_vyrobky,
      pref_uzeniny_pastiky,
      pref_trvanlive_potraviny,
      pref_napoje,
      pref_alkohol,
      pref_tabakove_vyrobky,
      preference_focus,
      reason_open_247,
      reason_location,
      reason_local_products,
      reason_no_queues,
      reason_anonymous,
      reason_other,
      reason_other_text,
      improvement_text,
    } = body;

    // Prepare data for Supabase
    const insertData = {
      age: age || null,
      distance: distance || null,
      frequency: frequency || null,
      // New product preferences - ensure boolean conversion
      pref_farmarske_produkty: !!pref_farmarske_produkty,
      pref_cerstve_pecivo: !!pref_cerstve_pecivo,
      pref_mlecne_vyrobky: !!pref_mlecne_vyrobky,
      pref_uzeniny_pastiky: !!pref_uzeniny_pastiky,
      pref_trvanlive_potraviny: !!pref_trvanlive_potraviny,
      pref_napoje: !!pref_napoje,
      pref_alkohol: !!pref_alkohol,
      pref_tabakove_vyrobky: !!pref_tabakove_vyrobky,
      // ---
      preference_focus: preference_focus || null,
      reason_open_247: !!reason_open_247,
      reason_location: !!reason_location,
      reason_local_products: !!reason_local_products,
      reason_no_queues: !!reason_no_queues,
      reason_anonymous: !!reason_anonymous,
      reason_other: !!reason_other,
      reason_other_text:
        reason_other && reason_other_text ? reason_other_text.trim() : null,
      improvement_text: improvement_text ? improvement_text.trim() : null,
    };

    const { data, error } = await supabase
      .from("survey_responses")
      .insert([insertData])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      // Provide more specific error if possible
      const userError = error.message.includes("check constraint")
        ? "Některá data jsou neplatná."
        : "Nepodařilo se uložit odpovědi";
      return NextResponse.json(
        { error: userError, details: error.message }, // Include details for debugging
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      response: data,
    });
  } catch (error) {
    console.error("API error:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Chyba při zpracování dat formuláře" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Nepodařilo se zpracovat požadavek" },
      { status: 500 }
    );
  }
}
