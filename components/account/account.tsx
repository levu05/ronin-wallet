import React, { ReactElement, useEffect, useState } from 'react';

import { AccountContext } from '../../context';
import { Currency, IAccount } from '../../lib';

interface IProps {
  children: ReactElement
}

const mockAssets = [
  {
    currency: Currency.Usd,
    amount: 1000,
    default: true,
  },
  {
    currency: Currency.Eur,
    amount: 50
  },
  {
    currency: Currency.Yen,
    amount: 10000
  }
];

const mockAccountDetails = {
  walletNumber: '7300 3777 3888 3334',
  defaultCurrency: Currency.VND
}

const mockAccount = {
  accountDetails: mockAccountDetails,
  assets: mockAssets,
}

const mockExchangeRate = {
  [Currency.Usd]: 22862,
  [Currency.Eur]: 18067.80,
  [Currency.Yen]: 182.16
}

const Account = ({ children }: IProps): ReactElement => {
  const [account, setAccount] = useState<IAccount>({} as IAccount);

  const asyncGetExchangeRate = async (_targetCurrency: Currency) => {
    return Promise.resolve(mockExchangeRate)
  }

  const asyncGetAccountDetails = async () => {
    const account = await Promise.resolve(mockAccount)

    const { accountDetails, assets } = account;
    const { defaultCurrency } = accountDetails;

    const exchangeRate = await asyncGetExchangeRate(defaultCurrency);

    setAccount({
      ...account,
      assets: assets.map(asset => ({
        ...asset,
        value: exchangeRate[asset.currency] * asset.amount
      }))
    });
  };

  useEffect(() => {
    asyncGetAccountDetails();
  }, []);

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  );
};

export default Account;
