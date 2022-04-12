import { IAsset } from '../../../../lib';
import AssetItem from '../../../asset-item';
import Modal from '../../../modal';

interface IProps {
  active: boolean,
  assets: IAsset[],
  onClose: () => void,
  onSelect: (asset: IAsset) => void
}

const AssetSelectModal = ({ assets, active, onClose, onSelect}: IProps) => {
  if (!active) return <></>;

  return (
    <Modal active={active} onClose={onClose}>
      <div className='c-asset-select-modal'>
        <div className='c-asset-select-modal__header'>
          <h1 className='ce-title'>
            Assets
          </h1>
          <button className='ce-close-btn' onClick={onClose}><img src='/static/icons/close.png'/></button>
        </div>
        <div className='c-asset-select-modal__content'>
          {assets.map(({currency, amount}) =>
            <AssetItem
              className='ce-asset-item'
              currency={currency}
              amount={amount}
              onClick={() => onSelect({currency, amount})}
            />)}
        </div>
      </div>
    </Modal>
  )
};

export default AssetSelectModal;