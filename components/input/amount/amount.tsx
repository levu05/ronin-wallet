import { Input as AntdInput } from 'antd';
import { Currency } from '../../../lib/definition/asset';

interface IProps {
  availableAmount: number,
  assetType: Currency
  label?: string,
  id?: string,
  placeholder?: string,
}

const AmountInput = ({ availableAmount, assetType, label, id, placeholder }: IProps) => {
  return (
    <div className='c-input c-input--amount'>
      {label &&
        <label className='c-input__label' htmlFor={id}>
          {label}
          <span className='ce-extra'>{`Available: ${availableAmount} ${assetType}`}</span>
        </label>}
      <AntdInput
        type='number'
        className='c-input__input'
        name={id}
        placeholder={placeholder}
        max={availableAmount}
      />

      <button className='ce-max-btn'>Max</button>
    </div>
  )
};

export default AmountInput;