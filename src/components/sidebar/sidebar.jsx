import React from "react";
import { Menu } from "antd";
import { UserAddOutlined, DesktopOutlined, TeamOutlined,LogoutOutlined, SettingOutlined, OrderedListOutlined, BookOutlined, PlusOutlined, FileDoneOutlined, DollarOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
    
    const menuItems = [
      {
        label: 'Чартерные рейсы',
        type: 'group',
        key: 'sub1',
        children: [
          {
            label: 'Добавить новый',
            key: 'add-charter',
            icon: <PlusOutlined />,
            onClick: () => navigate('/charters/new'),
          },
          {
            label: 'Список рейсов',
            key: 'charters',
            icon: <OrderedListOutlined />,
            onClick: () => navigate('/charters'),
          },
          
        ]
      },
      {
        label: 'Туры',
        type: 'group',
        children: [
          {
            label: 'Добавить новый',
            key: 'add-tour',
            icon: <PlusOutlined />,
            onClick: () => navigate('/tours/new'),
          },
          {
            label: 'Список туров',
            key: 'tours',
            icon: <BookOutlined />,
            onClick: () => navigate('/tours'),
          },
        ]
      },
      {
        label: 'Продажи',
        type: 'group',
        children: [
          {
            label: 'Список проданных билетов',
            key: 'sold-tickets',
            icon: <DollarOutlined />
          },
          {
            label: 'Список проданных тур.пакетов',
            key: 'sold-tour-tickets',
            icon: <FileDoneOutlined />
          },
        ]
      },
      {
        label: 'Администратор',
        //type: 'group',
        children: [
          {
            label: 'Список офисов-субагентов',
            key: 'subagent-offices',
            icon: <DesktopOutlined />
          },
          {
            label: 'Добавить офис-субагент',
            key: 'add-subagent-office',
            icon: <PlusOutlined />
          },
          {
            label: 'Список пользователей-субагентов',
            key: 'subagent-users',
            icon: <TeamOutlined />
          },
          {
            label: 'Добавить пользователя-субагента',
            key: 'add-subagent-user',
            icon: <UserAddOutlined />
          },
        ]
      },
      {
        label: 'Настройки',
        key: 'settings',
        icon: <SettingOutlined />
      },
      {
        label: 'Выйти',
        key: 'logout',
        icon: <LogoutOutlined />,
        onClick: () => navigate('/login'),
      },
    ];
    return(
      <Menu className={`w-[20%] p-2`} items={menuItems} mode='inline'></Menu>
    );
};