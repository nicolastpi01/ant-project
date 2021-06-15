import React, { useEffect, useState } from "react"
import { Button, Col, Row, Image, Avatar, Space } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, MailOutlined, AppstoreOutlined, SettingOutlined
  } from '@ant-design/icons';
import Group from "antd/lib/input/Group";
import SubMenu from "antd/lib/menu/SubMenu";
import { withAuth0 } from "@auth0/auth0-react";

//const { Header} = Layout;
//const { SubMenu } = Menu;

type NavProps = {
    collapsed: boolean;
    handle: (_: any) => void;
}

const NavBar:React.FC<any> = (props) => {

    const { isAuthenticated, user, isLoading, logout, loginWithRedirect } = props.auth0;
   
    return (
        <>
        <Row justify="space-between">
          <Col style={{ display: 'flex', flex: 1 }}>
              
            <Col>
              {props.collapsed ? (
                <MenuUnfoldOutlined
                  className={'trigger'}
                  onClick={() => props.handle(false)}
                  style={{ fontSize: '22px' }}
                />
              ) : (
                <MenuFoldOutlined
                  className={'trigger'}
                  onClick={() => props.handle(true)}
                  style={{ fontSize: '22px' }}
                />
              )}
            </Col>
            
            <Col style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>      
                <span className="ellipsis" style={{ marginRight: '30px' }}>
                {
                    isAuthenticated ?  
                    <Space>
                        <Avatar src={user.picture} shape={"circle"}/>
                        <strong>
                            {`Usuario: ${user.name} ${"(" + user.email + ")"}`}
                        </strong>
                    
                        <Button ghost onClick={()=>logout({ returnTo: window.location.origin })} loading={isLoading}>
                            <strong>Salir</strong>
                        </Button>
                    </Space>
                    :
                    <Button ghost onClick={()=>loginWithRedirect()} loading={isLoading}>
                        <strong>Entrar</strong>
                    </Button>
                }
                </span>
            </Col>
          </Col>
        </Row>
      </>       
    )
}

export default withAuth0(NavBar);