export const FIVE_SECONDS = 5 * 1000;
export const THIRTY_SECONDS = 30 * 1000;

export interface AppState {
  quotes: Array<Quote>;
}

export interface Quote {
  quote: string;
  source: string;
}
