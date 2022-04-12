import { Currency } from '../../lib';

interface IProps {
  currency: Currency,
  amount: number,
  className?: string,
  onClick?: () => void
}

const AssetItem = ({currency, amount, className: classes, onClick}: IProps) => {
  return(
    <div className={`c-asset ${classes}`} onClick={onClick}>
      <div className='c-asset__logo'>
        <img src={`/static/icons/currency/${currency}.png`} />
      </div>
      <div className='c-asset__value'>
        <div className='ce-amount'>
          {amount} {currency}
        </div>
        <div className='ce-value'>
          2,103,317 VND
        </div>
      </div>
    </div>
  )
}

export default AssetItem;