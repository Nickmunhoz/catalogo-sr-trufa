import heroProduto from "@/assets/img/combos/combo-amor-premium-01.jpeg";
import heroProdutoAlt from "@/assets/img/combos/combo-especial-namorados-01.jpeg";

export function Hero({ campanha }: { campanha: boolean }) {
  const img = campanha ? heroProduto : heroProdutoAlt;

  return (
    <section id="topo" className="relative overflow-hidden bg-creme">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Texto */}
        <div className="order-2 max-w-xl animate-fade-up lg:order-1">
          {campanha ? (
            <>
              <span className="inline-block rounded-full border border-dourado/50 bg-creme-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-marrom-soft">
                Edição Dia dos Namorados · 12/06
              </span>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-marrom sm:text-5xl lg:text-6xl">
                Esse ano, o “eu te amo” vem com casca de chocolate.
              </h1>
              <p className="mt-5 max-w-lg text-base text-marrom-soft sm:text-lg">
                Canecas personalizadas com a foto de vocês + trufas artesanais feitas à
                mão. Um presente que se bebe, se come e não se esquece.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#combos"
                  className="rounded-full bg-laranja px-7 py-3.5 text-sm font-semibold text-creme shadow-md shadow-marrom/20 transition hover:scale-[1.02] hover:bg-laranja-deep sm:text-base"
                >
                  Montar meu presente
                </a>
                <span className="text-xs text-marrom-soft sm:text-sm">
                  Sem pagamento online — você fecha tudo no WhatsApp.
                </span>
              </div>
              <p className="mt-4 text-xs text-marrom-soft/80">
                Edição limitada · Estoque pequeno e feito à mão.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-4xl leading-[1.05] text-marrom sm:text-5xl lg:text-6xl">
                Trufas artesanais e canecas que contam histórias.
              </h1>
              <p className="mt-5 max-w-lg text-base text-marrom-soft sm:text-lg">
                Sabores feitos à mão, canecas personalizáveis e peças únicas. Cada pedido
                sai com cuidado de quem coleciona detalhes.
              </p>
              <div className="mt-7">
                <a
                  href="#trufas"
                  className="rounded-full bg-laranja px-7 py-3.5 text-sm font-semibold text-creme shadow-md shadow-marrom/20 transition hover:scale-[1.02] hover:bg-laranja-deep sm:text-base"
                >
                  Ver nossos sabores
                </a>
              </div>
            </>
          )}
        </div>

        {/* Produto — centralizado, completo, com respiro */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-creme-soft shadow-sm" />
            <div className="absolute inset-3 rounded-[1.6rem] border border-dourado/20" />
            <img
              src={img}
              alt="Combo Sr. Trufa: caneca personalizada e trufas artesanais"
              width={900}
              height={900}
              className="relative h-full w-full object-contain p-6 drop-shadow-[0_18px_30px_rgba(44,26,20,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
