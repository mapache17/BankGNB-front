import { Layout, theme, Typography} from 'antd';
import { Button, Form, InputNumber, notification } from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
const { Title, Text } = Typography;
const { Content } = Layout;


const TransferMoney = () => {
  const [api, contextHolder] = notification.useNotification();
  const [transferenceItems, setTransferenceItems] = useState(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  async function onFinish(values) {
    console.log('Success:', values);
    const { id, origen, destination, amount } = values;

    const body = {
      id, 
      origen, 
      destination, 
      amount
    };

    console.log(body.id);

    const client = axios.create({
      baseURL: 'https://reqres.in/',

    });
    const response = await client.post(
      "/api/users", body

    );
    console.log("Hola", response);
if (response.data!=null) {
  
    api.info({
      message: `Notification `,
      description:  `Transference ${id} was made correctly!`,
    });
    setTransferenceItems(response.data);

  }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    {contextHolder}
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
  {transferenceItems?(
          <>
          <div>
          <Title level={4}>Transference items: </Title>
          </div>
          <div>
          <Text>id: {transferenceItems.id}</Text>
          </div>
          <div>
          <Text>origin: {transferenceItems.origen}</Text>
          </div>
          <div>
          <Text>destination: {transferenceItems.destination}</Text>
          </div>
          <div>
          <Text>amount: {transferenceItems.amount}</Text>
          </div>
          </>
        ):null}
    </Content>
    </div>
  )
};
export default TransferMoney;

