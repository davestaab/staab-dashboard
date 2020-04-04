export interface AppState {
  now: number;
  quotes: Array<Quote>;
}
export const THIRTY_SECONDS = 30 * 1000;
export interface Quote {
  quote: string,
  source: string,

}
