import { Input as AntdInput } from 'antd';

interface IProps {
  label?: string,
  name?: string,
  placeholder?: string,
  id?: string
}

const Input = ({ label, id, placeholder }: IProps) => {
  return (
    <div className='c-input'>
      {label && <label className='c-input__label' htmlFor={id}>{label}</label>}
      <AntdInput.Password
        className='c-input__input'
        name={id}
        placeholder={placeholder}
        // iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </div>
  )
};

export default Input;