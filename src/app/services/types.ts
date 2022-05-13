export interface PokemonApiResponse<T> {
  data: T;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface PokemonQueryParams {
  name?: string;
  subtype?: string;
}

export interface Card {
  id: string;
  name: string;
  sypertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Abilities[];
  attacks: Attacks[];
  weaknesses: Weaknesses[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities[];
  images: Images;
  tcgplayer: TCGPlayer;
  cardmarket: CardMarket;
}

interface CardMarket {
  url: string;
  updatedAt: string;
  prices: CardMarketPrices;
}

interface CardMarketPrices {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: null;
  suggestedPrice: null;
  reverseHoloSell: null;
  reverseHoloLow: null;
  reverseHoloTrend: null;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: null;
  reverseHoloAvg7: null;
  reverseHoloAvg30: null;
}

interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

interface Prices {
  normal: PricesOptions;
  reverseHolofoil: PricesOptions;
}

interface PricesOptions {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

interface Attacks {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Abilities {
  name: string;
  text: string;
  type: string;
}

interface Weaknesses {
  type: string;
  value: string;
}

interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

interface Legalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

interface SetImages {
  symbol: string;
  logo: string;
}

interface Images {
  small: string;
  large: string;
}
