/**
 * Configuração central da loja (catálogo padrão).
 * Para atualizar a página, edite estes valores e faça um novo deploy.
 */
export const config = {
  /** WhatsApp do vendedor — formato internacional, só números (DDI+DDD+numero). */
  whatsapp: "5517996212158",

  /** Instagram. */
  instagramUrl: "https://instagram.com/srtrufa.oficial",
  instagramHandle: "@srtrufa.oficial",

  /** Cidade de operação. */
  cidade: "Barretos/SP",
};

/**
 * Personalização com foto disponível o ano todo no catálogo padrão.
 * (O prazo de produção por sublimação é combinado no WhatsApp.)
 */
export function fotoPersonalizadaDisponivel(): boolean {
  return true;
}
