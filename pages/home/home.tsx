const Home = () => {
  return (
    <div className='p-home'>
      <div className='ce-header'>
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
            <span className='ce-title__wallet-number'>(7300 3777 3888 3334)</span>
          </div>
          <button className='ce-copy-btn'>
            <img src='/static/icons/copy.png' alt='Copy'/>
          </button>
        </div>
        <div className='ce-wallet-details__devider' />
        <div className='ce-wallet-details__content'>
          <div className='ce-balance'>
            <div className='ce-balance__usd'>
              1,000 USD
            </div>
            <div className='ce-balance__vnd'>
              23,046,000 VND
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
          <button>
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
          <div className='ce-asset'>
            <div className='ce-asset__logo'>
              <img src='/static/icons/euro.png' />
            </div>
            <div className='ce-asset__value'>
              <div className='ce-quatity'>
                50 EUR
              </div>
              <div className='ce-value'>
                1,531,972 VND
              </div>
            </div>
          </div>

          <div className='ce-asset'>
            <div className='ce-asset__logo'>
              <img src='/static/icons/yen.png' />
            </div>
            <div className='ce-asset__value'>
              <div className='ce-quatity'>
                10,000 YEN
              </div>
              <div className='ce-value'>
                2,103,317 VND
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;