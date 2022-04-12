import { Form } from 'antd';

import { Input, Button } from '../../components';

const Unlock = () => {
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
      >
        <Form.Item name='password' >
          <Input type='password' id='password' placeholder='Enter Password' label='Enter Password'/>
        </Form.Item>

        <Form.Item className='ce-unlock-form__controls'>
          <Button type='primary' htmlType='submit' text='Unlock' gradient />
        </Form.Item>
      </Form>
    </div>
  )
};

export default Unlock;