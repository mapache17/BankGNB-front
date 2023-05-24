import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber, notification} from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
const { Title, Text } = Typography;
const { Content } = Layout;
  

const DepositMoney = () => {
  const [api, contextHolder] = notification.useNotification();
  const [depositItems, setDepositItems] = useState(null);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  async function onFinish(values) {
    console.log('Success:', values);
    const { moneyAmount, accountNumber} = values;

    const body = {
      moneyAmount, 
      accountNumber
    };

    console.log(body.moneyAmount);

    const client = axios.create({
      baseURL: 'http://localhost:9090',

    });
    const response = await client.post(
      "/transaction/deposit-money", body

    );
    console.log("Hola", response);
if (response.data!=null) {
  
    api.info({
      message: `Notification `,
      description:  `Deposit to ${accountNumber} was successful!`,
    });
    setDepositItems(response.data);

  }
  };


  return (
    <div>
    {contextHolder}
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
  {depositItems?(
          <>
          <div>
          <Title level={4}>Deposit information: </Title>
          </div>
          <div>
          <Text>Money amount: {depositItems.moneyAmount}</Text>
          </div>
          <div>
          <Text>account number: {depositItems.accountNumber}</Text>
          </div>
          </>
        ):null}
    </Content>
    </div>
  )
};
export default DepositMoney;

