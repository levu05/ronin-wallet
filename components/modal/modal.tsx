import { ReactElement } from 'react';

interface IProps {
  active: boolean,
  children: ReactElement
  onClose?: () => void,
}

const Modal = ({ active, onClose, children }: IProps) => {
  if (!active) return <></>

  return (
    <div className='c-modal'>
      <div className='c-modal__content'>
       {children}
      </div>
      <div className='c-modal__backdrop' onClick={onClose}/>
    </div>
  )
};

export default Modal;