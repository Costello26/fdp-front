import React from "react";
import { Menu, Modal } from "antd";
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
            label: 'Список проданных авиабилетов',
            key: 'sold-tickets',
            icon: <DollarOutlined />,
            onClick: () => navigate('/tickets/avia'),
          },
          {
            label: 'Список проданных турпакетов',
            key: 'sold-tour-tickets',
            icon: <FileDoneOutlined />,
            onClick: () => navigate('/tickets/tour'),
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
            icon: <DesktopOutlined />,
            onClick: () => navigate('/subagents/list'),
          },
          {
            label: 'Добавить офис-субагент',
            key: 'add-subagent-office',
            icon: <PlusOutlined />,
            onClick: () => navigate('/subagents/add'),
          },
          {
            label: 'Список пользователей-субагентов',
            key: 'subagent-users',
            icon: <TeamOutlined />,
            onClick: () => navigate('/subagents/users/'),
          },
          {
            label: 'Добавить пользователя-субагента',
            key: 'add-subagent-user',
            icon: <UserAddOutlined />,
            onClick: () => navigate('/subagents/users/add'),
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
        onClick: () => Modal.confirm({
          title: 'Подтвердите действие',
          content: 'Вы действительно хотите выйти из системы?',
          keyboard: true,
          onOk: () => navigate('/login'),
          okType: 'danger'
        }),
      },
    ];
    return(
      <Menu style={{ minHeight: window.innerHeight }} className={`w-[20%] p-2`} items={menuItems} mode='inline'></Menu>
    );
};