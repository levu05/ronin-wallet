import { Form } from 'antd';
import Router from 'next/router';

import { Input, Button } from '../../components';

const Unlock = () => {
  const handleUnlock = (password: string) => {
    Router.push('/');
  }

  return (
    <div className='p-unlock'>
      <div className='ce-intro'>
        <div className='ce-intro__logo'>
            <img src='/static/images/logo.png'/>
        </div>
        <h1 className='ce-intro__title'>Ronin Wallet</h1>
        <h4 className='ce-intro__subtitle'>Your Digital Passport</h4>
      </div>

      <Form
        name='unlock-form'
        className='ce-unlock-form'
        autoComplete='off'
        onFinish={handleUnlock}
      >
        <Form.Item name='password'  rules={[{ required: true, message: 'Please enter password!' }]}>
          <Input type='password' id='password' placeholder='Enter Password' label='Enter Password'/>
        </Form.Item>

        <Form.Item className='ce-unlock-form__controls'>
          <Button type='primary' htmltype='submit' text='Unlock' gradient />
        </Form.Item>
      </Form>
    </div>
  )
};

export default Unlock;