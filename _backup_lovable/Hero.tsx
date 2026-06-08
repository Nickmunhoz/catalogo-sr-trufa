import banner from "@/assets/img/banner-namorados.jpg";

export function Hero({ campanha }: { campanha: boolean }) {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="relative isolate">
        <img
          src={banner}
          alt="Caneca de coração e trufas artesanais Sr. Trufa"
          width={1920}
          height={1080}
          className="h-[78vh] min-h-[520px] w-full object-cover sm:h-[86vh]"
        />
        {/* Gradient overlays — readable text on left, soft blend into page on bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-creme via-creme/85 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-creme via-creme/40 via-30% to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-creme" />


        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="max-w-xl animate-fade-up">
              {campanha ? (
                <>
                  <span className="inline-block rounded-full border border-dourado/50 bg-creme-soft/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-marrom-soft">
                    Edição Dia dos Namorados · 12/06
                  </span>
                  <h1 className="mt-4 font-display text-4xl leading-[1.05] text-marrom sm:text-5xl lg:text-6xl">
                    Esse ano, o “eu te amo” vem com casca de chocolate.
                  </h1>
                  <p className="mt-5 max-w-lg text-base text-marrom-soft sm:text-lg">
                    Canecas personalizadas com a foto de vocês + trufas artesanais feitas
                    à mão. Um presente que se bebe, se come e não se esquece.
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
                  <h1 className="mt-4 font-display text-4xl leading-[1.05] text-marrom sm:text-5xl lg:text-6xl">
                    Trufas artesanais e canecas que contam histórias.
                  </h1>
                  <p className="mt-5 max-w-lg text-base text-marrom-soft sm:text-lg">
                    Sabores feitos à mão, canecas personalizáveis e peças únicas. Cada
                    pedido sai com cuidado de quem coleciona detalhes.
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
          </div>
        </div>
      </div>
    </section>
  );
}
