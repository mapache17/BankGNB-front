import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber} from 'antd';
import React from 'react';
const { Title } = Typography;
const { Content } = Layout;


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


const DepositMoney = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Realizar un depósito</Title>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius:14,
      }}
    >
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item label="Money amount" name="moneyAmount" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item label="Account number" name="accountNumber" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>
    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      
    </Content>
    </div>
  )
};
export default DepositMoney;

