import React from 'react';
import { Collapse, Menu, Space, Typography } from 'antd';
import {
    InboxOutlined, HomeOutlined, FileOutlined, ShoppingCartOutlined
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';

const { Text } = Typography;

type SideProps = {
    collapsed: boolean;
}

const SideNav = (props: SideProps) => {
    const history = useHistory();

    const handleUserClick = () => {
        history.push('/');
    }

  return (
    <div>
    <div style={{height: "64px", background: "#FFA233"}}>
        {
            props.collapsed ?
            <Space direction="vertical" style={{marginTop: "20px"}}>
                {/* 
                <Text strong style={{color:"white", fontSize:"20px", marginLeft: "30px"}}>SLV</Text>
                */}
            </Space>
            :
            <Space direction="vertical" style={{marginTop: "20px"}}>
                {/* 
                <Text strong style={{color:"white", fontSize:"20px", marginLeft: "15px"}}>Seguros La Vuelta</Text>
                */}
            </Space>
        }
        
    </div>
        <div>
            <Menu theme="light" mode="inline" style={{marginTop: "10px"}}>
                <Menu.Item key="1" onClick={handleUserClick}>
                    <HomeOutlined title="Inicio" style={{ fontSize: '30px' }} />
                    {
                        !props.collapsed && <strong> Inicio</strong> 
                    }
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
            </Menu>
        </div>
    </div>
  );
}


export default SideNav;
