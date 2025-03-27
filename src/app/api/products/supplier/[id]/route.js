import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const supabase = createRouteHandlerClient({ cookies });
  const supplierId = params.id;

  try {
    // Fetch all suppliers for navigation
    const { data: suppliers, error: suppliersError } = await supabase
      .from("suppliers")
      .select("id, name");

    if (suppliersError) throw suppliersError;

    // Fetch products for the specific supplier
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*")
      .eq("id_supplier", supplierId);

    if (productsError) throw productsError;

    // Fetch current supplier info
    const { data: currentSupplier, error: currentSupplierError } =
      await supabase
        .from("suppliers")
        .select("name")
        .eq("id", supplierId)
        .single();

    if (currentSupplierError) throw currentSupplierError;

    return NextResponse.json({
      suppliers,
      products,
      currentSupplier,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
