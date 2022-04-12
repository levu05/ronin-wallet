import { createContext } from 'react';
import { IAccount } from '../lib';


const AccountContext = createContext<IAccount>({
  accountDetails: {
    walletNumber: null,
    defaultCurrency: null
  },
  assets: [],
});

AccountContext.displayName = 'AuthContext';

export default AccountContext;
