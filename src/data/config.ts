/**
 * Configuração central da loja.
 * Para atualizar a página, edite estes valores e faça um novo deploy.
 */
export const config = {
  /** Liga/desliga o layout sazonal de Dia dos Namorados (Hero romântico, escassez e combos). */
  CAMPANHA_NAMORADOS: true,

  /** WhatsApp do vendedor — formato internacional, só números (DDI+DDD+numero). */
  whatsapp: "5517996212158",

  /** Instagram. */
  instagramUrl: "https://instagram.com/srtrufa.oficial",
  instagramHandle: "@srtrufa.oficial",

  /** Cidade de operação. */
  cidade: "Barretos/SP",

  /** Estoque atual da caneca de coração (usado na barra de escassez). */
  estoqueCanecaCoracao: 11,

  /** Prazo-limite para pedidos com foto (sublimação). Editável para campanhas futuras. */
  limiteFoto: "2026-06-08T23:59:59",
};

/** Retorna true enquanto a personalização com foto ainda estiver dentro do prazo. */
export function fotoPersonalizadaDisponivel(): boolean {
  return new Date() <= new Date(config.limiteFoto);
}
