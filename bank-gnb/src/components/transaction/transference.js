import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber, } from 'antd';
import React from 'react';
const { Title } = Typography;
const { Content } = Layout;


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


const TransferMoney = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Realizar una transferencia</Title>
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
    <Form.Item label="Transaction ID" name="id" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item label="Origin Account" name="origen" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>
    
    <Form.Item label="Destination Account" name="destination" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
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
export default TransferMoney;

