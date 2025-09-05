// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const ORDER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeksuRChUSMi9aaoHl_KuOroKx0f55guDjmGdSd_s7zOKKU2w/viewform?usp=header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="me fomo" width={36} height={36} className="rounded" priority />
            <span className="text-lg font-semibold tracking-wide">me fomo</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#productos" className="opacity-80 hover:opacity-100">Productos</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
            <a href={ORDER_FORM_URL} target="_blank" className="rounded-full bg-white px-4 py-2 font-medium text-black hover:bg-white/90">Hacer pedido</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Streetwear limitado de <span className="italic">me fomo</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70">
              Lanyards, camisetas y sudaderas diseñadas por nosotros. Ediciones pequeñas, foco en calidad.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href={ORDER_FORM_URL} target="_blank" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">Hacer pedido</Link>
              <a href="#productos" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white/40">Ver productos</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image src="/hero.jpg" alt="Colección me fomo" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section id="productos" className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Productos</h2>
            <p className="mt-2 text-white/60">Primer drop disponible. Pide a través del formulario.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="relative aspect-square">
                  <Image src="/camiseta.jpg" alt="Camiseta" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Camiseta</h3>
                  <p className="mt-1 text-sm text-white/60">Colores y tallas S–XL.</p>
                  <Link href={ORDER_FORM_URL} target="_blank" className="mt-4 inline-block rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-white/40">Pedir</Link>
                </div>
              </article>

              <article className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="relative aspect-square">
                  <Image src="/sudadera.jpg" alt="Sudadera" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Sudadera</h3>
                  <p className="mt-1 text-sm text-white/60">Ajuste cómodo. Unisex.</p>
                  <Link href={ORDER_FORM_URL} target="_blank" className="mt-4 inline-block rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-white/40">Pedir</Link>
                </div>
              </article>

              <article className="group overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="relative aspect-square">
                  <Image src="/lanyard.jpg" alt="Lanyard" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Lanyard</h3>
                  <p className="mt-1 text-sm text-white/60">Accesorio diario.</p>
                  <Link href={ORDER_FORM_URL} target="_blank" className="mt-4 inline-block rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-white/40">Pedir</Link>
                </div>
              </article>
            </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-medium">¿Cómo hago un pedido?</h3>
              <p className="mt-2 text-white/60">Rellena el formulario y te confirmamos por email/Instagram al recibir el pago.</p>
            </div>
            <div>
              <h3 className="font-medium">¿Qué métodos de pago aceptáis?</h3>
              <p className="mt-2 text-white/60">Bizum y transferencia.</p>
            </div>
            <div>
              <h3 className="font-medium">¿Hacéis envíos?</h3>
              <p className="mt-2 text-white/60">Sí. También recogida local.</p>
            </div>
            <div>
              <h3 className="font-medium">Tallas y cambios</h3>
              <p className="mt-2 text-white/60">Consulta la guía en el formulario o pregúntanos por DM.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} me fomo</p>
          <div className="flex items-center gap-4">
            <a href="mailto:mefomo.brand@gmail.com" className="hover:text-white">mefomo.brand@gmail.com</a>
            <a href="https://instagram.com/" target="_blank" className="hover:text-white" rel="noreferrer">Instagram</a>
            <Link href={ORDER_FORM_URL} target="_blank" className="rounded-md border border-white/20 px-3 py-1 hover:border-white/40">Pedir ahora</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}