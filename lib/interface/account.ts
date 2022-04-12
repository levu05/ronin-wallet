import { Currency } from '../definition';
import { IAsset } from './asset';

export interface IAccountDetails {
  walletNumber,
  defaultCurrency: Currency
}

export interface IAccount {
  accountDetails: IAccountDetails,
  assets: IAsset[]
}