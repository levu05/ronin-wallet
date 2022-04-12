import { Currency } from '../definition';

export interface IAsset {
  currency: Currency,
  amount: number,
  default?: boolean,
  value?: number
}
