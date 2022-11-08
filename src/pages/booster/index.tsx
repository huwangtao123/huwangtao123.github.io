import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout as Layout1, Menu } from 'antd';
import data from './data.json';

const { Header, Content, Footer, Sider } = Layout1;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Clever Booster Program', 'sub1', <PieChartOutlined />, [
    getItem('10/22/2022 - Done', '1'),
    getItem('11/22/2022 - On going', '2'),
    getItem('12/22/2022', '3')
  ]),
  getItem('Aladdin Core Team', 'sub2', <TeamOutlined />, [
    getItem('Developers', 'aladdindao'),
    getItem('Chiaki', 'xeezee6'),
    getItem('Lllanero', 'iamllanero')
  ]),
  getItem('Community User', 'sub3', <UserOutlined />, [
    getItem('Tao', 'taowang1')
  ])
];

const dataSource = data;

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: 'Twitter Handle',
    dataIndex: 'Twitter Handle',
    key: 'Twitter Handle'
  },
  {
    title: 'Twitter URL',
    dataIndex: 'Twitter URL',
    key: 'Twitter URL'
  },
  {
    title: 'Profile',
    dataIndex: 'Profile',
    key: 'Profile'
  },
  {
    title: 'Contribution URL',
    dataIndex: 'Contrib URL',
    key: 'Contrib URL',
    render: (text) => <a href={text}>{text}</a>
  }
];

export default function Hello() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout title='Hello' description='Hello React Page'>
        <Layout1 style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className='logo' />
            <Menu
              theme='dark'
              defaultSelectedKeys={['1']}
              mode='inline'
              items={items}
            />
          </Sider>
          <Layout1 className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <div
                className='site-layout-background'
                style={{ padding: 24, minHeight: 360 }}
              >
                <Table dataSource={dataSource} columns={columns} />
              </div>
            </Content>
          </Layout1>
        </Layout1>
      </Layout>
    </>
  );
}
