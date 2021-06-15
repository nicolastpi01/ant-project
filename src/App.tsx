import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar  from './components/NavBar';
import SideNav from './components/sidebar';
import Home from './views/home';

const { Header, Sider, Content} = Layout;


const App :React.FC = () => {

  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

    const handleToggle = (event: any) => {
        //event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    
  return (
    <Router>
        <Layout>
          <Sider theme="light" trigger={null} collapsible collapsed={collapse}>
            <SideNav collapsed={collapse} />
          </Sider>
          <Layout>
            <Header className="header" style={{padding: 0, background: "#FFA233"}}>
              <NavBar collapsed={collapse} handle={handleToggle} />
            </Header>
              <Content 
                style={{
                  margin: '24px 16px', 
                  padding: 24, 
                  minHeight: "calc(100vh - 114px)", 
                  background: "#fff"
                }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
              </Content>
          </Layout>
        </Layout>
    </Router>
  );
}

export default App;
