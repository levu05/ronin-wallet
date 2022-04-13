import { Input as AntdInput } from 'antd';

interface IProps {
  type: string,
  label?: string,
  placeholder?: string,
  id?: string,
  labelExtra?: string,
  [key: string]: any
}

const Input = ({ type, label, id, placeholder, ...rest }: IProps) => {
  const inputProps = {
    type,
    placeholder,
    name: id,
    ...rest
  };

  return (
    <div className='c-input'>
      {label &&
        <label className='c-input__label' htmlFor={id}>
          {label}
        </label>}
      <AntdInput
        className='c-input__input'
        {...inputProps}
      />
    </div>
  )
};

export default Input;