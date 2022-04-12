import { Form } from 'antd';
import Router from 'next/router';
import { useState } from 'react';

import { AmountInput, AssetSelect, Button, Input, SuccessModal } from '../../components';
import { Currency } from '../../lib';

const Send = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const assets = [
    {
      currency: Currency.Usd,
      amount: 1000
    },
    {
      currency: Currency.Eur,
      amount: 50
    },
    {
      currency: Currency.Yen,
      amount: 10000
    }
  ];

  const handleSendAsset = (data) => {
    setShowSuccessModal(true);
  }

  const onGoBack = () => {
    Router.push('/')
  }

  const handleFinishSending = () => {
    setShowSuccessModal(false);
    onGoBack()
  }

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
        >
          <Form.Item name='From' >
            <Input type='text' id='from' label='from'/>
          </Form.Item>
          <Form.Item name='to' >
            <Input type='text' id='to' label='To'/>
          </Form.Item>

          <Form.Item name='asset' >
            <AssetSelect
              type='number'
              id='asset'
              label='Asset'
              assets={assets}
            />
          </Form.Item>

          <Form.Item name='amount' >
            <AmountInput
              id='amount'
              label='Amount'
              assetType={Currency.Eur}
              availableAmount={50}
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
              Your EUR has been sent! <br/>
              Thank you for using our service
            </p>
          }
        />
      </div>
    </div>
  )
};

export default Send;