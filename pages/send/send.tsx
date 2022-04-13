import { Form } from 'antd';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { AmountInput, AssetSelect, Button, Input, SuccessModal } from '../../components';
import { AccountContext } from '../../context';

const Send = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { assets = [], accountDetails = {} } = useContext(AccountContext);
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);

  const { currency: selectedAssetCurrency, amount: selectedAssetAmount } = selectedAsset || {};
  const { walletNumber = '' } = accountDetails;

  const [form] = Form.useForm();

  const [first4Digits, , , last4Digits] = walletNumber.split(' ');

  const handleSendAsset = (data) => {
    setShowSuccessModal(true);
  }

  const onGoBack = () => {
    Router.push('/')
  }

  const handleFinishSending = () => {
    setShowSuccessModal(false);
    onGoBack()
  };

  const handleValuesChange = changedValues => {
    if (!isEmpty(changedValues.asset)) setSelectedAsset(changedValues.asset)
  }

  useEffect(() => {
    form.setFieldsValue({
      from: walletNumber,
      asset: assets[0]
    });
    if (assets[0] !== selectedAsset) setSelectedAsset(assets[0]);
  }, [walletNumber, assets]);

  return (
    <div className='p-send'>
      <div className='ce-page-header'>
        <button className='ce-back-btn' onClick={onGoBack}>
          <img src='/static/icons/chevron-left.png' alt='Back'/>
        </button>
        <h1 className='ce-title'>
          Send Assets
        </h1>
      </div>
      <div className='ce-page-content'>
        <Form
          name='send-form'
          className='ce-send-form'
          autoComplete='off'
          onFinish={handleSendAsset}
          form={form}
          onValuesChange={handleValuesChange}
        >
          <Form.Item name='from' >
            {/* <Input type='text' id='from' label='from' disabled/> */}
            <div className='ce-from-value-render'>
              <span className='ce-from-value-render__label'>From</span>
              <div className='ce-from-value-render__value'><span className='ce-wallet-name'>My Wallet</span> ({first4Digits}...{last4Digits})</div>
            </div>
          </Form.Item>
          <Form.Item name='to'  rules={[{ required: true, message: 'Please input receiving wallet!' }]}>
            <Input
              type='text'
              id='to'
              label='To'
            />
          </Form.Item>

          <Form.Item name='asset' onMetaChange={e => console.log({e})}>
            <AssetSelect
              type='number'
              id='asset'
              label='Asset'
              assets={assets}
            />
          </Form.Item>

          <Form.Item name='amount' rules={[{ required: true, message: 'Please input amount!' }]}>
            <AmountInput
              id='amount'
              label='Amount'
              assetType={selectedAssetCurrency}
              availableAmount={selectedAssetAmount}

            />
          </Form.Item>

          <Form.Item className='ce-send-form__controls'>
            <Button className='ce-control-item' type='secondary' htmltype='cancel' text='Cancel' />
            <Button className='ce-control-item' type='primary' htmltype='submit' text='Send' gradient />
          </Form.Item>
        </Form>

        <SuccessModal
          active={showSuccessModal}
          onOK={handleFinishSending}
          title='Successfully sent'
          message={
            <p>
              Your <b>EUR</b> has been sent! <br/>
              Thank you for using our service
            </p>
          }
        />
      </div>
    </div>
  )
};

export default Send;
