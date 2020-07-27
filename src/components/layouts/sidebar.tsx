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
        history.push('/list');
    }

    const handleVideosClick = () => {
        history.push('/videos');
    }

    const handleFileClick = () => {
        history.push('/files');
    }

  return (
    <div>
    <div style={{height: "64px", background: "#FFA233"}}>
        {
            props.collapsed ?
            <Space direction="vertical" style={{marginTop: "20px"}}>
                <Text strong style={{color:"white", fontSize:"20px", marginLeft: "15px"}}>PUDA</Text>
            </Space>
            :
            <Space direction="vertical" style={{marginTop: "20px"}}>
                <Text strong style={{color:"white", fontSize:"20px", marginLeft: "15px"}}>Proyecto PUDA</Text>
            </Space>
        }
        
    </div>
        <div>
            <Menu theme="light" mode="inline">
                <Menu.Item key="1" onClick={handleUserClick}>
                    <HomeOutlined style={{ fontSize: '30px' }} />
                    <span><strong> Inicio</strong></span>
                </Menu.Item>
                <Menu.Divider></Menu.Divider>

                <Menu.ItemGroup>
                    
                    <Menu.Item key="2">
                        <FileOutlined style={{ fontSize: '30px' }} />
                            <span><strong> Documentos</strong></span>
                    </Menu.Item>
                    
                    <Menu.Item key="3">
                    Buscar Legajo
                    </Menu.Item>
                    
                </Menu.ItemGroup>
                <Menu.Divider></Menu.Divider>


                <Menu.ItemGroup>
                    
                    <Menu.Item key="4">
                    <InboxOutlined style={{ fontSize: '34px' }} />
                        <span><strong> Cajas</strong></span>
                    </Menu.Item>

                    <Menu.Item key="5">
                        Buscar Caja
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="6">
                        Ingresar Caja
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="7">
                        Retirar Caja
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                </Menu.ItemGroup>
                <Menu.Divider></Menu.Divider>

                <Menu.ItemGroup>
                    
                    <Menu.Item key="8">
                    <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                    
                        <span><strong> Pedidos</strong></span>
                    </Menu.Item>

                    <Menu.Item key="9">
                        Buscar Caja
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="10">
                        Buscar Legajo / Doc
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="11">
                        Buscar Pedidos
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                </Menu.ItemGroup>

            </Menu>
        </div>
    </div>
  );
}


export default SideNav;
