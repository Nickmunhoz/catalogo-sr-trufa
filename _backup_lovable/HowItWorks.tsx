import { Clock } from "lucide-react";
import mascoteAsset from "@/assets/img/mascote.png.asset.json";

const STEPS = [
  {
    n: "1",
    t: "Escolha",
    d: "O combo do Dia dos Namorados ou as trufas avulsas — você decide.",
  },
  {
    n: "2",
    t: "Monte",
    d: "Selecione as 3 trufas e personalize a caneca (foto, frase ou arte da loja).",
  },
  {
    n: "3",
    t: "Finalize",
    d: "No WhatsApp a gente confirma tudo, combina retirada ou entrega e o pagamento.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-creme py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Mascote caminhando sobre o título */}
        <div className="relative mx-auto h-20 max-w-2xl overflow-hidden sm:h-24">
          <img
            src={mascoteAsset.url}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-20 w-auto animate-walk drop-shadow-[0_8px_12px_rgba(44,26,20,0.3)] sm:h-24"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-marrom sm:text-4xl">
            Como o seu presente fica pronto
          </h2>
        </div>


        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-dourado/30 bg-creme-soft p-6 text-center shadow-sm"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-laranja font-display text-xl font-bold text-creme">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl text-marrom">{s.t}</h3>
              <p className="mt-2 text-sm text-marrom-soft">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border-2 border-dourado/60 bg-dourado-soft/30 p-5 sm:p-6">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-dourado" />
          <p className="text-sm text-marrom sm:text-base">
            <strong>Pedidos COM FOTO só até segunda-feira, 08/06.</strong> A sublimação
            leva tempo (impressão, secagem e prensagem a 200°C). Após essa data: frase
            especial ou arte pronta da loja.
          </p>
        </div>
      </div>
    </section>
  );
}
