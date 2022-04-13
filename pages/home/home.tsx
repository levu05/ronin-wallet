import { useContext } from 'react';
import commaNumber from 'comma-number';
import Router from 'next/router';

import { AssetItem } from '../../components';
import { AccountContext } from '../../context';

const Home = () => {
  const { assets = [], accountDetails } = useContext(AccountContext);
  const { walletNumber, defaultCurrency } = accountDetails || {};

  const { currency, amount, value } = assets.find(asset => asset.default) || {};

  const goToSendAsset = () => {
    Router.push('/send')
  };

  return (
    <div className='p-home'>
      <div className='ce-page-header'>
        <div className='ce-wallet-name'>
          Ronin Wallet
        </div>
        <button className='ce-user-btn'>
          <img src='/static/icons/user.png' alt='User Icon'/>
        </button>
      </div>

      <div className='ce-wallet-details'>
        <div className='ce-wallet-details__header'>
          <div className='ce-title'>
            <span className='ce-title__name'>My Wallet</span>
            <span className='ce-title__wallet-number'>({walletNumber})</span>
          </div>
          <button className='ce-copy-btn'>
            <img src='/static/icons/copy.png' alt='Copy'/>
          </button>
        </div>
        <div className='ce-wallet-details__devider' />
        <div className='ce-wallet-details__content'>
          <div className='ce-balance'>
            <div className='ce-balance__usd'>
              {commaNumber(amount)} {currency}
            </div>
            <div className='ce-balance__vnd'>
              {commaNumber(value)} {defaultCurrency}
            </div>
          </div>

          <div className='ce-wallet-logo'>
            <img src='/static/images/ronin-white.png' alt='Logo'/>
          </div>
        </div>
      </div>

      <div className='ce-wallet-controls'>
        <div className='ce-wallet-controls__item ce-wallet-controls__item--disabled'>
          <button disabled>
            <img src='/static/icons/card.png'/>
          </button>
          <label>Deposit</label>
        </div>
        <div className='ce-wallet-controls__item'>
          <button onClick={goToSendAsset}>
            <img src='/static/icons/plane.png'/>
          </button>
          <label>Send</label>
        </div>
        <div className='ce-wallet-controls__item ce-wallet-controls__item--disabled'>
          <button disabled>
            <img src='/static/icons/swap.png'/>
          </button>
          <label>Swap</label>
        </div>
      </div>

      <div className='ce-wallet-assets'>
        <h1 className='ce-wallet-assets__title'>
          Assets
        </h1>

        <div className='ce-wallet-assets__container'>
          {assets.map((asset, index) => <AssetItem key={`${currency}_${index}`} className='ce-asset-item' asset={asset} defaultCurrency={defaultCurrency} />)}
        </div>
      </div>
    </div>
  )
};

export default Home;