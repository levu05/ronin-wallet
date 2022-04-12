import { Input as AntdInput } from 'antd';

interface IProps {
  type: string,
  label?: string,
  placeholder?: string,
  id?: string,
  labelExtra?: string
}

const Input = ({ type, label, id, placeholder }: IProps) => {
  return (
    <div className='c-input'>
      {label &&
        <label className='c-input__label' htmlFor={id}>
          {label}
        </label>}
      <AntdInput
        type={type}
        className='c-input__input'
        name={id}
        placeholder={placeholder}
      />
    </div>
  )
};

export default Input;