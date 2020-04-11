import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Typography } from 'antd';

import './App.css';
import TranslateBox from './items/translate-box';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="Ant-Header">
          <Title>Translate</Title>
        </Header>
        <Content>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary">Learn React</Button>
            </a>
            <div className="BoxLayout">
              <TranslateBox /><TranslateBox />
            </div>
          </header>
        </Content>
        <Footer className="Ant-Footer">
          Sample © 2020 with Ant Design
        </Footer>
      </Layout>
      
    </div>
  );
}

export default App;
