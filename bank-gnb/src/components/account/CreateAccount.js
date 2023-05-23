import { Layout, theme, Typography} from 'antd';
import { Button, Form, Select,InputNumber, DatePicker} from 'antd';
import React from 'react';
const { Title } = Typography;
const { Content } = Layout;


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


const CreateAcc = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Title level={2}>Crear una cuenta</Title>
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
    <Form.Item label="Account ID" name="id" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item label="Account Type" name="type" rules={[{ required: true }]}>
        <Select>
        <Select.Option value="demo">Cuenta corriente</Select.Option>
        <Select.Option value="demo">Cuenta de ahorros</Select.Option>
        </Select>
    </Form.Item>

    <Form.Item label="Money" name="money" rules={[{ required: true }]}>
        <InputNumber />
    </Form.Item>

    <Form.Item label="Date created" name="dateCreated" rules={[{ required: true }]}>
          <DatePicker />    
    </Form.Item>

    <Form.Item label="User" name="user" rules={[{ required: true }]}>
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
export default CreateAcc;

