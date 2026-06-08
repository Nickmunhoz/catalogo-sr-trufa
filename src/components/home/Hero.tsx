import heroBg from "@/assets/img/brand/hero-kit.jpg";

export function Hero({ campanha }: { campanha: boolean }) {
  return (
    <section id="topo" className="relative overflow-hidden bg-creme">
      {/* Imagem de fundo do kit */}
      <img
        src={heroBg}
        alt="Kit Sr. Trufa: caneca personalizada e trufas artesanais"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        width={1376}
        height={768}
      />
      {/* Degradês na cor da página revelando a imagem */}
      <div className="absolute inset-0 bg-gradient-to-r from-creme via-creme/85 to-creme/30 sm:from-creme sm:via-creme/45 sm:via-45% sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-creme via-creme/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-16 sm:min-h-[80vh] lg:min-h-[82vh]">
        <div className="max-w-xl animate-fade-up">
          {campanha ? (
            <>
              <span className="inline-block rounded-full border border-dourado/50 bg-creme-soft/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-marrom-soft">
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
                <span className="rounded-full bg-creme/70 px-3 py-1 text-xs text-marrom-soft backdrop-blur-sm sm:bg-transparent sm:px-0 sm:text-sm">
                  Sem pagamento online — você fecha tudo no WhatsApp.
                </span>
              </div>
              <p className="mt-4 text-xs text-marrom-soft/90">
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
      </div>
    </section>
  );
}
