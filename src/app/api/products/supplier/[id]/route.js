import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(request, { params }) {
  try {
    const supplierId = params.id;

    if (!supplierId) {
      return NextResponse.json(
        { error: "Supplier ID is required" },
        { status: 400 }
      );
    }

    // Fetch all data in parallel
    const [suppliersResponse, productsResponse, currentSupplierResponse] =
      await Promise.all([
        supabase.from("suppliers").select("id, name").order("name"),
        supabase.from("products").select("*").eq("id_supplier", supplierId),
        supabase.from("suppliers").select("name").eq("id", supplierId).single(),
      ]);

    // Check for errors
    if (suppliersResponse.error) throw suppliersResponse.error;
    if (productsResponse.error) throw productsResponse.error;
    if (currentSupplierResponse.error) throw currentSupplierResponse.error;

    return NextResponse.json({
      suppliers: suppliersResponse.data,
      products: productsResponse.data,
      currentSupplier: currentSupplierResponse.data,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
