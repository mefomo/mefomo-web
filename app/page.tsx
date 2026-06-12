// app/page.tsx
import Image from "next/image";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3eadc] text-[#111111]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b-2 border-black bg-[#f3eadc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="me fomo"
              width={42}
              height={42}
              className="rounded-sm border border-black"
              priority
            />
            <span className="text-xl font-black tracking-tight">me fomo</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide md:flex">
            <a href="#story" className="hover:underline">Story</a>
            <a href="#productos" className="hover:underline">Products</a>
            <a href="#pedido" className="rounded-full border-2 border-black bg-[#f4b6d2] px-5 py-2 shadow-[4px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Order now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero editorial */}
      <section className="relative overflow-hidden border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-5 inline-block w-fit border-2 border-black bg-[#14532d] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#f3eadc] shadow-[4px_4px_0px_#000]">
              Drop #001
            </p>

            <h1 className="max-w-2xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              Real ones
              <br />
              <span className="italic text-[#c2185b]">show up.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
              Lanyards, camisetas y sudaderas para quienes aparecen, se quedan y hacen ruido sin pedir permiso.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pedido"
                className="rounded-full border-2 border-black bg-[#f4c400] px-6 py-3 font-black uppercase shadow-[5px_5px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Hacer pedido
              </a>
              <a
                href="#productos"
                className="rounded-full border-2 border-black bg-white px-6 py-3 font-black uppercase shadow-[5px_5px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Ver drop
              </a>
            </div>

            <p className="mt-10 max-w-xs rotate-[-2deg] border-2 border-black bg-white px-4 py-3 font-mono text-xs shadow-[4px_4px_0px_#000]">
              “No mass drops. No fake hype. Just pieces for people who get it.”
            </p>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute left-3 top-8 z-10 rotate-[-6deg] border-2 border-black bg-white px-4 py-2 font-mono text-xs shadow-[4px_4px_0px_#000]">
              born from fomo
            </div>

            <div className="relative mx-auto aspect-[4/3] max-w-2xl rotate-[2deg] overflow-hidden border-2 border-black bg-white p-3 shadow-[10px_10px_0px_#000]">
              <Image
                src="/hero.jpg"
                alt="Me Fomo Drop 001"
                fill
                className="object-cover p-3"
                priority
              />
            </div>

            <div className="absolute bottom-6 right-4 rotate-[8deg] rounded-full border-2 border-black bg-[#f4b6d2] px-6 py-4 text-2xl font-black shadow-[5px_5px_0px_#000]">
              001
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="border-b-2 border-black bg-[#f4b6d2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-5xl font-black leading-none md:text-7xl">
            Born from
            <br />
            the feeling
            <br />
            of missing out.
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <p className="border-2 border-black bg-[#f3eadc] p-5 font-medium shadow-[5px_5px_0px_#000]">
              ME FOMO nace de esa sensación de querer estar dentro de algo antes de que pase.
            </p>
            <p className="border-2 border-black bg-white p-5 font-medium shadow-[5px_5px_0px_#000]">
              Drop pequeño, piezas contadas y estética hecha para aparecer en la calle, en clase, en fiestas y donde surja.
            </p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="border-b-2 border-black bg-[#f3eadc]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em]">Drop catalogue</p>
              <h2 className="mt-2 text-5xl font-black md:text-7xl">Productos</h2>
            </div>
            <p className="max-w-sm font-medium">
              Primer drop disponible. Cantidades limitadas. Cuando se acaba, se acaba.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ProductCard
              number="01"
              title="Camiseta"
              price="25€"
              image="/camiseta.jpg"
              text="Colores y tallas S–XL."
            />
            <ProductCard
              number="02"
              title="Sudadera"
              price="30€"
              image="/sudadera.jpg"
              text="Ajuste cómodo. Unisex."
            />
            <ProductCard
              number="03"
              title="Lanyard"
              price="3€"
              image="/lanyard.jpg"
              text="Accesorio diario."
            />
          </div>
        </div>
      </section>

      {/* Pedido */}
      <section id="pedido" className="border-b-2 border-black bg-[#14532d] text-[#f3eadc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#f4c400]">
              Order form
            </p>
            <h2 className="mt-3 text-5xl font-black leading-none md:text-7xl">
              Haz tu
              <br />
              pedido.
            </h2>
            <p className="mt-5 max-w-md text-lg text-[#f3eadc]/80">
              Rellena tus datos y te confirmamos por email o Instagram al recibir el pago.
            </p>
          </div>

          <div className="rounded-none border-2 border-black bg-[#f3eadc] p-4 text-black shadow-[10px_10px_0px_#000]">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f3eadc]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-5xl font-black">FAQ</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FaqItem
              question="¿Cómo hago un pedido?"
              answer="Rellena el formulario y te confirmamos por email/Instagram al recibir el pago."
            />
            <FaqItem
              question="¿Qué métodos de pago aceptáis?"
              answer="Bizum y transferencia."
            />
            <FaqItem
              question="¿Hacéis envíos?"
              answer="Sí. También recogida local."
            />
            <FaqItem
              question="Tallas y cambios"
              answer="Consulta la guía o pregúntanos por DM."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-[#f3eadc]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
          <p className="font-mono">© {new Date().getFullYear()} me fomo</p>
          <div className="flex items-center gap-5">
            <a href="mailto:mefomo.brand@gmail.com" className="hover:text-[#f4c400]">
              mefomo.brand@gmail.com
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#f4c400]">
              Instagram
            </a>
            <a href="#pedido" className="rounded-full border border-[#f3eadc] px-4 py-2 hover:bg-[#f3eadc] hover:text-black">
              Pedir ahora
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({
  number,
  title,
  price,
  image,
  text,
}: {
  number: string;
  title: string;
  price: string;
  image: string;
  text: string;
}) {
  return (
    <article className="group relative border-2 border-black bg-white p-3 shadow-[8px_8px_0px_#000] transition hover:-rotate-1">
      <div className="absolute -right-4 -top-4 z-10 rounded-full border-2 border-black bg-[#f4c400] px-4 py-3 text-xl font-black shadow-[4px_4px_0px_#000]">
        {price}
      </div>

      <div className="relative aspect-square overflow-hidden border-2 border-black bg-[#ddd]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em]">{number}</p>
          <h3 className="mt-1 text-3xl font-black">{title}</h3>
          <p className="mt-2 text-sm font-medium text-black/70">{text}</p>
        </div>
      </div>

      <a
        href="#pedido"
        className="mt-5 inline-block rounded-full border-2 border-black bg-[#f4b6d2] px-5 py-2 text-sm font-black uppercase shadow-[4px_4px_0px_#000] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        Pedir
      </a>
    </article>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-2 border-black bg-white p-5 shadow-[5px_5px_0px_#000]">
      <h3 className="text-lg font-black">{question}</h3>
      <p className="mt-2 font-medium text-black/70">{answer}</p>
    </div>
  );
}