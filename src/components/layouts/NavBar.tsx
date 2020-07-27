import React, { useEffect, useState } from "react"
import { Layout, Menu, Space, Typography } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, MailOutlined, AppstoreOutlined, SettingOutlined
  } from '@ant-design/icons';
import Group from "antd/lib/input/Group";
import SubMenu from "antd/lib/menu/SubMenu";

//const { Header} = Layout;
//const { SubMenu } = Menu;
const { Text } = Typography;

type NavProps = {
    collapsed: boolean;
    handle: (_: any) => void;
}

export const NavBar = (props: NavProps) => {
   
    return <>
    
    <Space direction="horizontal">
    
        <div className="col">      
        {React.createElement(props.collapsed ? MenuUnfoldOutlined  : MenuFoldOutlined, {
                className: 'trigger',
                onClick: props.handle,
                style: {color: "#FFFFF", fontSize:"30px"}
            })}
        </div>
        {/* 
        <div className="col-sm-2" style={{alignContent:"left", alignItems: "left", textAlign:"left", marginRight: "100%", float: "left"}}>
            <Text strong>PUDA</Text>
        </div>
        */}
        
    </Space>
    
              
    </>
}