import React, { useState } from 'react';
import Layout from '@theme/Layout';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout as Layout1, Menu } from 'antd';
import defaultdata from './data/boost1.json';
const { Header, Content, Sider } = Layout1;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path?: any,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    path,
    label: <Link to={path}>{label}</Link>
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Clever Booster Program', 'bp', '/booster', <PieChartOutlined />, [
    getItem('10/22/2022', 'bp1', '/booster/program/bp1'),
    getItem('11/22/2022', 'bp2', '/booster/program/bp2'),
    getItem('12/22/2022', 'bp3', '/booster/program/bp3')
  ]),
  getItem('Aladdin Core Team', 'sub2', '/booster/team', <TeamOutlined />, [
    getItem('Developers', 'aladdindao', '/booster/team/aladdindao'),
    getItem('Chiaki', 'xeezee6', '/booster/team/xeezee6'),
    getItem('Lllanero', 'iamllanero', '/booster/team/iamllanero')
  ]),
  getItem('Community User', 'sub3', '/booster/users', <UserOutlined />, [
    getItem('Tao', 'taowang1', '/booster/users/taowang1')
  ])
];

export default function Booster({ data = defaultdata }) {
  const [collapsed, setCollapsed] = useState(false);
  const dataSource = data;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name'
    },
    {
      title: 'Profile',
      dataIndex: 'Profile',
      key: 'Profile'
    },
    {
      title: 'Twitter URL',
      dataIndex: 'Twitter URL',
      key: 'Twitter URL',
      render: (text) => <a href={text}>{text}</a>
    },
    {
      title: 'Contribution URL',
      dataIndex: 'Contrib URL',
      key: 'Contrib URL',
      render: (text) => <a href={text}>{text}</a>
    }
  ];
  return (
    <>
      <Layout title='Booster' description='Booster Program Page'>
        <Layout1 style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{ paddingTop: '55px' }}
          >
            <div className='logo' />
            <Menu
              theme='dark'
              defaultSelectedKeys={['bp1']}
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
                <Table
                  dataSource={dataSource}
                  rowKey='Name'
                  columns={columns}
                  pagination={{ pageSize: 50 }}
                />
              </div>
            </Content>
          </Layout1>
        </Layout1>
      </Layout>
    </>
  );
}
