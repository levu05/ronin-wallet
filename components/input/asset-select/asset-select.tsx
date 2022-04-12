import { ReactElement, useState } from 'react';

import { IAsset } from '../../../lib';
import AssetSelectModal from './asset-select-modal';

interface IProps {
  type: string,
  label?: string,
  name?: string,
  placeholder?: string,
  id?: string,
  custom?: ReactElement,
  labelExtra?: string,
  assets: IAsset[],
  onChange?: (asset: IAsset) => void; // Form Item Change Handle
  value?: IAsset // Form Item value
}

const AssetSelect = ({ assets, label, id, onChange, value }: IProps) => {
  const [assetSelectModalOpen, setAssetSelectModalOpen] = useState(false);
  const { currency } = value || {};

  const openAssetSelectModal = () => {
    setAssetSelectModalOpen(true);
  };

  const closeAssetSelectModal = () => {
    setAssetSelectModalOpen(false);
  };

  const onSelect = (asset: IAsset) => {
    onChange(asset);

    closeAssetSelectModal();
  };

  return (
    <div className='c-input c-asset-select'>
      {label &&
        <label className='c-input__label' htmlFor={id}>
          {label}
        </label>}
      <div className='c-input__input c-asset-select__input' onClick={openAssetSelectModal} >
        {currency &&
          <>
            <div className='ce-currency-logo'><img src={`/static/icons/currency/${currency}.png`}/></div>
            <span className='ce-currency'>{currency}</span>
          </>}
        <button type='button' className='ce-layer-btn'><img src='/static/icons/layers.png' /></button>
      </div>

      <AssetSelectModal
        assets={assets}
        active={assetSelectModalOpen}
        onClose={closeAssetSelectModal}
        onSelect={onSelect}
      />
    </div>
  )
};

export default AssetSelect;