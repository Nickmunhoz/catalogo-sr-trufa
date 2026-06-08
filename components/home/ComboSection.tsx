import { useState } from "react";
import { Check } from "lucide-react";
import { combos, type Combo } from "@/data/combos";
import { formatBRL } from "@/lib/whatsapp";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { ComboModal } from "@/components/combo/ComboModal";

export function ComboSection() {
  const [open, setOpen] = useState<Combo | null>(null);

  return (
    <section id="combos" className="bg-creme py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-dourado/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-marrom-soft">
            Edição Namorados
          </span>
          <h2 className="mt-4 font-display text-3xl text-marrom sm:text-4xl">
            Os combos do Dia dos Namorados
          </h2>
          <p className="mt-3 text-marrom-soft">
            Escolha o combo, monte as 3 trufas do seu jeito e personalize a caneca. A gente
            embala com laço e entrega o resto.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {combos.map((c) => (
            <article
              key={c.id}
              className="overflow-hidden rounded-2xl border border-dourado/30 bg-creme-soft shadow-sm shadow-marrom/5 transition hover:shadow-lg hover:shadow-marrom/10"
            >
              <ProductCarousel images={c.fotos} alt={c.nome} />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-marrom sm:text-3xl">
                    Combo {c.nome}
                  </h3>
                  <span className="whitespace-nowrap font-display text-2xl font-bold text-dourado">
                    {formatBRL(c.preco)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-marrom-soft">{c.curto}</p>
                <ul className="mt-5 space-y-2 text-sm text-marrom">
                  {c.inclui.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-dourado" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setOpen(c)}
                  className="mt-7 w-full rounded-full bg-laranja px-6 py-3.5 text-sm font-semibold text-creme shadow-md shadow-marrom/15 transition hover:scale-[1.01] hover:bg-laranja-deep sm:text-base"
                >
                  Montar Meu Combo
                </button>
                <p className="mt-3 text-center text-xs text-marrom-soft">
                  Personalização com foto até quinta, 11/06 (17h). Depois, frase ou arte pronta.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && <ComboModal combo={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
