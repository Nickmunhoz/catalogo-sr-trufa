import { MessageCircle } from "lucide-react";
import { config } from "@/data/config";

export function WhatsappFab() {
  return (
    <a
      href={`https://wa.me/${config.whatsapp}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-laranja text-creme shadow-lg shadow-marrom/30 transition hover:scale-105 hover:bg-laranja-deep"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
