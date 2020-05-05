export const FIVE_SECONDS = 5 * 1000;
export const THIRTY_SECONDS = 30 * 1000;
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const DEFAULT_INTERVAL = THIRTY_SECONDS;
// export const FIFTEEN_MINUTES = 15 * 1000;
// export const DEFAULT_INTERVAL = 15 * 1000;

export interface Quote {
  quote: string;
  source: string;
}

export type ItemLists = Array<ItemList>;

export interface ItemList {
  title: string;
  items: Array<Item>;
}

export interface Item {
  name: string;
  complete: boolean;
}

export interface Build {
  buildTime: number;
}
