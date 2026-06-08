import { Heart } from "lucide-react";
import { config } from "@/data/config";

export function ScarcityBar() {
  const total = config.estoqueCanecaCoracao;
  const esgotado = total <= 0;
  return (
    <div className="bg-azul text-creme animate-pulse-scarcity">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-semibold sm:text-sm">
        <Heart className="h-4 w-4 fill-creme" />
        {esgotado ? (
          <span>
            Edição de coração esgotada — fale no WhatsApp para entrar na lista de espera.
          </span>
        ) : (
          <span>
            Restam apenas <strong>{total}</strong> canecas de coração desta edição. Garanta
            antes que esgote!
          </span>
        )}
      </div>
    </div>
  );
}
