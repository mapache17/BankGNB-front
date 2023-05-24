import { Layout, theme, Typography} from 'antd';
import { Button} from 'antd';
import React from 'react';
import axios from "axios";
import { useState } from 'react';

const { Title , Text} = Typography;
const { Content } = Layout;



const AllUsers = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [users, setUsers] = useState(null);

  async function getAllUsers (){
    const client = axios.create({
      baseURL: 'http://localhost:9090',
    });
    const response = await client.get(
      "/user/all-Users"
    );
    setUsers(response.data);
    console.log("User data", response.data);
  };
  return (
    <div>
      
    <Title level={2}>Visualizar usuarios</Title>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius:14,
      }}
    >
    <Button type="primary" onClick={getAllUsers}>Ver usuarios</Button>
    <div>
    <Text>Users:{users?users.data.color:"Null"}</Text>
    </div>
    </Content>
    
    </div>
  )
};
export default AllUsers;

