"use client";
import { useState } from "react";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const data = {
      customer_name: form.customer_name.value,
      email: form.email.value,
      phone: form.phone.value,
      payment_method: form.payment_method.value,
      items: [{ product: "camiseta", size: "M", qty: 1 }], // prueba inicial
    };

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMessage("✅ Pedido enviado con éxito.");
      form.reset();
    } else {
      const err = await res.json();
      setMessage("❌ Error: " + err.error + " — " + (err.detail || ""));
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-900 p-6 rounded-xl">
      <input type="text" name="customer_name" placeholder="Tu nombre" required className="w-full p-2 rounded" />
      <input type="email" name="email" placeholder="Tu email" required className="w-full p-2 rounded" />
      <input type="tel" name="phone" placeholder="Teléfono" className="w-full p-2 rounded" />
      <select
        name="payment_method"
        required
        className="w-full rounded px-3 py-2 bg-white text-black border border-white/10"
        >
        <option value="">Método de pago</option>
        <option value="bizum">Bizum</option>
        <option value="transferencia">Transferencia</option>
        </select>

      <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black p-2 rounded">
        {loading ? "Enviando..." : "Hacer pedido"}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
