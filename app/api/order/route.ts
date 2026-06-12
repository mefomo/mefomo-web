import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        {
          error: "ENV_VARS_MISSING",
          detail: "Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body.customer_name || !body.email || !body.items) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/orders`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        customer_name: body.customer_name,
        email: body.email,
        phone: body.phone || null,
        payment_method: body.payment_method,
        shipping_address: body.shipping_address || null,
        items: body.items,
        total_amount: body.total_amount || null,
        notes: body.notes || null,
      }),
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "SUPABASE_ERROR",
          detail: text,
        },
        { status: res.status }
      );
    }

    const data = JSON.parse(text);
    return NextResponse.json({ success: true, order: data[0] }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        error: "INTERNAL_ERROR",
        detail: String(err),
      },
      { status: 500 }
    );
  }
}