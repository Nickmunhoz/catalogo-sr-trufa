export type Truffle = {
  id: string;
  nome: string;
  categoria: "regular" | "especial";
  preco: number;
  estoque: number;
  desc: string;
};

/**
 * 16 sabores. Regra: 'especial' (Gourmet) = máx. 1 por combo; 'regular' = livre.
 * Os 4 últimos foram identificados nas embalagens das fotos — ajuste preço/estoque
 * antes do go-live (estão com estoque 0 = aparecem como ESGOTADO).
 */
export const truffles: Truffle[] = [
  { id: "brigadeiro", nome: "Brigadeiro Gourmet", categoria: "regular", preco: 7.5, estoque: 20, desc: "O clássico que nunca falha: chocolate e granulado, do jeito brasileiro." },
  { id: "oreo", nome: "Oreo", categoria: "especial", preco: 7.5, estoque: 20, desc: "Creme branco com pedaços de biscoito. Crocância e nostalgia." },
  { id: "nutella", nome: "Nutella", categoria: "especial", preco: 7.0, estoque: 20, desc: "Avelã e chocolate cremoso. O pedido número 1." },
  { id: "ninho", nome: "Ninho", categoria: "regular", preco: 7.5, estoque: 15, desc: "Leite Ninho cremoso, doce na medida. Conforto em forma de trufa." },
  { id: "maracuja", nome: "Maracujá", categoria: "regular", preco: 7.5, estoque: 15, desc: "O azedinho que equilibra o doce. Refrescante." },
  { id: "sensacao", nome: "Sensação", categoria: "especial", preco: 7.5, estoque: 10, desc: "Morango e chocolate, o casal que deu certo." },
  { id: "prestigio", nome: "Prestígio", categoria: "regular", preco: 7.5, estoque: 10, desc: "Coco com chocolate. Tropical e irresistível." },
  { id: "ourobranco", nome: "Ouro Branco", categoria: "especial", preco: 7.0, estoque: 10, desc: "Chocolate branco aveludado. Sofisticação em cada gole." },
  { id: "limao", nome: "Limão", categoria: "regular", preco: 7.5, estoque: 6, desc: "Cítrico e cremoso. Acorda o paladar." },
  { id: "pistache", nome: "Pistache", categoria: "especial", preco: 7.0, estoque: 6, desc: "O sabor da moda, encorpado e nobre." },
  { id: "frutasverm", nome: "Frutas Vermelhas", categoria: "especial", preco: 7.5, estoque: 6, desc: "Doce e levemente ácido. Vibrante." },
  { id: "abacaxi", nome: "Abacaxi", categoria: "regular", preco: 7.5, estoque: 4, desc: "Surpreendente e tropical. Para os corajosos." },
  { id: "cafe", nome: "Café", categoria: "especial", preco: 7.0, estoque: 0, desc: "Intenso e aromático, para quem ama um bom café. Amargor na medida certa." },
  { id: "chocbranco", nome: "Chocolate Branco", categoria: "especial", preco: 7.0, estoque: 0, desc: "Doçura aveludada e delicada. Pura indulgência." },
  { id: "cremeavela", nome: "Creme de Avelã", categoria: "especial", preco: 7.0, estoque: 0, desc: "Avelã encorpada com casca crocante. Sofisticado e viciante." },
  { id: "leiteempo", nome: "Leite em Pó", categoria: "regular", preco: 7.5, estoque: 0, desc: "Aquele docinho de leite em pó da infância. Aconchego em cada mordida." },
];
