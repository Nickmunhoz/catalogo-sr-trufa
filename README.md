# Sr. Trufa — Catálogo Digital

Landing single-page (Vite + React + TypeScript + Tailwind v4) para vender combos de caneca + trufas artesanais. Sem backend: o "checkout" gera uma mensagem formatada para o **WhatsApp**.

## Rodar localmente

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera /dist para produção
npm run preview  # pré-visualiza o build
```

## Como atualizar o conteúdo (sem painel — edita-se o código)

Tudo fica em `src/data/`:

| Arquivo | O que controla |
|---|---|
| `data/config.ts` | WhatsApp, Instagram, cidade, estoque da caneca de coração, prazo da foto, e a flag `CAMPANHA_NAMORADOS` (liga/desliga o layout de Namorados) |
| `data/truffles.ts` | Os 16 sabores: nome, categoria, preço, estoque (0 = aparece "ESGOTADO") |
| `data/combos.ts` | Os 2 combos: preço, descrição, fotos do carrossel |
| `data/mugs.ts` | Canecas avulsas e as peças únicas |

Imagens dos produtos: `src/assets/img/{combos,caixa,canecas,trufas}`.

> **Encerrar a campanha de Namorados:** em `config.ts`, troque `CAMPANHA_NAMORADOS` para `false` e faça novo deploy. O Hero romântico, a barra de escassez e a vitrine de combos somem; o catálogo permanente (trufas e canecas) continua.

## Pendências antes do go-live

- Número real do **WhatsApp** e **Instagram** em `config.ts`.
- **Preço** das canecas avulsas (`mugs.ts`, hoje "Sob consulta").
- **Estoque/preço** dos 4 sabores novos (Café, Chocolate Branco, Creme de Avelã, Leite em Pó) em `truffles.ts` (hoje com estoque 0).
- (Opcional) Substituir o wordmark do header por um logo e trocar o `public/favicon.svg`.

## Estrutura

```
src/
├── components/
│   ├── layout/   Header, Footer, WhatsappFab
│   ├── home/     Hero, ScarcityBar, ComboSection, TruffleSection,
│   │             MugsAvulsasSection, SpecialMugsSection, HowItWorks
│   ├── combo/    ComboModal
│   ├── truffle/  TrufflePickerModal
│   └── ui/       ProductCarousel
├── data/         config, truffles, combos, mugs
├── lib/          whatsapp, utils
└── assets/img/   fotos dos produtos
```

O dump original do Lovable foi preservado em `_backup_lovable/` (pode apagar quando quiser).
