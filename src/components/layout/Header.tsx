import { Instagram } from "lucide-react";
import { config } from "@/data/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-dourado/40 bg-marrom/95 backdrop-blur supports-[backdrop-filter]:bg-marrom/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20">
        <a
          href={config.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Instagram ${config.instagramHandle}`}
          className="rounded-full p-2 text-creme transition hover:bg-creme/10"
        >
          <Instagram className="h-5 w-5" />
        </a>

        <a
          href="#topo"
          aria-label="Sr. Trufa — início"
          className="flex flex-col items-center leading-none"
        >
          <span className="font-display text-xl tracking-wide text-creme sm:text-2xl">
            Sr. Trufa
          </span>
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-dourado-soft sm:text-[10px]">
            Artesanal
          </span>
        </a>

        <a
          href={`https://wa.me/${config.whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full bg-laranja px-3 py-2 text-xs font-semibold text-creme shadow-sm transition hover:bg-laranja-deep sm:px-4 sm:text-sm"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
