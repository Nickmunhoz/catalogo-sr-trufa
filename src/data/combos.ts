import amor1 from "@/assets/img/combos/combo-amor-premium-01.jpeg";
import amor2 from "@/assets/img/combos/combo-amor-premium-02.jpeg";
import especial1 from "@/assets/img/combos/combo-especial-namorados-01.jpeg";
import especial2 from "@/assets/img/combos/combo-especial-namorados-02.jpeg";
import caixaFrente from "@/assets/img/caixa/caixa-fechada-frente.jpeg";
import caixaTag from "@/assets/img/caixa/caixa-fechada-tag.jpeg";
import caixaAbertaTop from "@/assets/img/caixa/caixa-aberta-top.jpeg";
import caixaAberta01 from "@/assets/img/caixa/caixa-aberta-01.jpeg";

export type Combo = {
  id: string;
  nome: string;
  preco: number;
  curto: string;
  inclui: string[];
  fotos: string[];
};

export const combos: Combo[] = [
  {
    id: "amor-premium",
    nome: "Amor Premium",
    preco: 75.0,
    curto:
      "A nossa peça-prima. Caneca de alça em coração e interior vermelho vivo — daquelas que a pessoa olha e já entende o recado. Dentro, 3 trufas artesanais com casca que estala e recheio cremoso, na caixinha “love” com laço e tag para você assinar.",
    inclui: [
      "1 caneca de coração personalizável",
      "3 trufas artesanais à sua escolha",
      "Caixa presente “love” + laço + tag",
    ],
    fotos: [amor1, amor2, caixaFrente, caixaAbertaTop],
  },
  {
    id: "especial-namorados",
    nome: "Especial Namorados",
    preco: 65.0,
    curto:
      "Clássico, elegante e 100% seu. A caneca branca premium vira tela para a foto ou a frase de vocês, com 3 trufas artesanais selecionadas a dedo. Vem na mesma caixinha “love” com laço e tag para presente.",
    inclui: [
      "1 caneca branca personalizável",
      "3 trufas artesanais à sua escolha",
      "Caixa presente “love” + laço + tag",
    ],
    fotos: [especial1, especial2, caixaTag, caixaAberta01],
  },
];
