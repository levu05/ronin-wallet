import { InputNumber } from 'antd';
import { Currency } from '../../../lib/definition/asset';

interface IProps {
  availableAmount: number,
  assetType: Currency
  label?: string,
  id?: string,
  placeholder?: string,
  onChange?: (value: number) => void, // Form Item change handler
  value?: number// Form Item value
  [key: string]: any
}

const AmountInput = ({ availableAmount, assetType, label, id, placeholder, onChange, value, ...rest }: IProps) => {
  return (
    <div className='c-input c-input--amount'>
      {label &&
        <label className='c-input__label' htmlFor={id}>
          {label}
          <span className='ce-extra'>{`Available: ${availableAmount} ${assetType}`}</span>
        </label>}
      <InputNumber
        className='c-input__input'
        name={id}
        placeholder={placeholder}
        value={value}
        max={availableAmount}
        onChange={onChange}
        controls={false}
        {...rest}
      />

      <button type='button' className='ce-max-btn' onClick={() => onChange(availableAmount)}>Max</button>
    </div>
  )
};

export default AmountInput;