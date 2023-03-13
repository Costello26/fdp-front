import { useState } from "react"
import { Menu, Modal } from "antd"
import { LogoutOutlined, SettingOutlined, OrderedListOutlined, BookOutlined, PlusOutlined, FileDoneOutlined, DollarOutlined } from '@ant-design/icons'

const menuItems = [
    {
      label: 'Чартерные рейсы',
      type: 'group',
      key: 'sub1',
      children: [
        {
          label: 'Добавить новый',
          key: 'add-charter',
          icon: <PlusOutlined />
        },
        {
          label: 'Список рейсов',
          key: 'charters',
          icon: <OrderedListOutlined />
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
          icon: <PlusOutlined />
        },
        {
          label: 'Список туров',
          key: 'tours',
          icon: <BookOutlined />
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
      label: 'Settings',
      key: 'settings',
      icon: <SettingOutlined />
    },
    {
      label: 'Log out',
      key: 'logout',
      icon: <LogoutOutlined />
    },
  ]

export const Sidebar = () => {
    const [ modalState, setModalState ] = useState(false);
    return(
        <>
            <Menu className='w-[20%] p-2 h-full' items={menuItems} mode='inline'></Menu>
            <Modal title="Basic Modal" open={modalState} onOk={() => console.log('ok')} onCancel={() => console.log('cancel')}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}