import { ReactElement } from 'react';
import Modal from '..';
import Button from '../../button';

interface IProps {
  active: boolean,
  onOK: () => void,
  title: ReactElement | string,
  message: ReactElement | string
}

const SuccessModal = ({ active, title, message, onOK }: IProps) => {
  if (!active) return <></>

  return (
    <Modal active={active}>
      <div className='c-success-modal'>
        <div className='c-success-modal__header'>
          <h1 className='ce-title'>{title}</h1>
        </div>
        <div className='c-success-modal__content'>
          {message}
        </div>
        <div className='c-success-modal__footer'>
          <Button className='ce-ok-btn' type='primary' text='OK' onClick={onOK} />
        </div>
      </div>
    </Modal>
  )
};

export default SuccessModal;