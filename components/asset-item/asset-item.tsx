import commaNumber from 'comma-number';

import { Currency, IAsset } from '../../lib';

interface IProps {
  asset: IAsset
  className?: string,
  defaultCurrency: Currency
  onClick?: () => void
}

const AssetItem = ({asset, defaultCurrency, className: classes, onClick}: IProps) => {
  const { currency, amount, value: valueInDefaultCurrency } = asset;
  return(
    <div className={`c-asset ${classes}`} onClick={onClick}>
      <div className='c-asset__logo'>
        <img src={`/static/icons/currency/${currency}.png`} />
      </div>
      <div className='c-asset__value'>
        <div className='ce-amount'>
          {commaNumber(amount)} {currency}
        </div>
        <div className='ce-value'>
          {commaNumber(valueInDefaultCurrency)} {defaultCurrency}
        </div>
      </div>
    </div>
  )
}

export default AssetItem;