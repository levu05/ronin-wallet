import { useContext } from 'react';

import { AccountContext } from '../../../../context';
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

  const { accountDetails } = useContext(AccountContext);
  const { defaultCurrency } = accountDetails || {};

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
          {assets.map((asset) =>
            <AssetItem
              key={asset.currency}
              className='ce-asset-item'
              asset={asset}
              onClick={() => onSelect(asset)}
              defaultCurrency={defaultCurrency}
            />)}
        </div>
      </div>
    </Modal>
  )
};

export default AssetSelectModal;