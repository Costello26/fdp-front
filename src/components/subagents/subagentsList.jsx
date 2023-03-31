import React from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";
import { TableItemButtons } from "./tableItemButtons";
import { SubagentFilters } from "./subagentsFilters";

export const SubagentsList = () => {
    const items = [
        {
            title: <Link to='/'>Дэшборд</Link>
        },
        {
            title: 'Субагенты'
        },
    ];
    const cols = [
        { 
            title: '№',
            dataIndex: 'id',
            width: 1,
        },
        { 
            title: 'Название субагента',
            dataIndex: 'name'
        },
        { 
            title: 'Контактный номер',
            dataIndex: 'contact'
        },
        { 
            title: 'Баланс депозита',
            dataIndex: 'deposit'
        },
        { 
            title: 'Статус',
            dataIndex: 'status'
        },
        { 
            title: 'Дата регистрации',
            dataIndex: 'registeredAt'
        },
        { 
            title: 'Кол-во аккаунтов',
            dataIndex: 'linkedAccounts',
            width: 1
        },
        { 
            title: 'Действия',
            dataIndex: 'actions'
        },
    ];
    return (
        <section className="w-full">
                <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
                <h2 className="text-xl px-5 pb-3 text-xl font-semibold">Список зарегистрированных в системе субагентов </h2>
                <SubagentFilters />
                <Table className="p-5" columns={cols} dataSource={data} bordered={true}/>
            </section>
    );
};


var data = [
    {
        id: 1,
        name: <b>FlyinUp(головная организация)</b>,
        contact: '+998991234567',
        deposit: '12,000',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '12.03.2023',
        linkedAccounts: '4',
        actions: <TableItemButtons/>,
    },
    {
        id: 2,
        name: 'Asia Luxe Travel',
        contact: '+998578626511',
        deposit: '7,640',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '01.01.2023',
        linkedAccounts: '1',
        actions: <TableItemButtons/>,
    },
    {
        id: 3,
        name: 'Easy Booking',
        contact: '+998762572452',
        deposit: '54,644',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '20.03.2023',
        linkedAccounts: '4',
        actions: <TableItemButtons/>,
    },
    {
        id: 4,
        name: 'Salambo travel',
        contact: '+998533179938',
        deposit: '700',
        status: <b className="text-red-500">заблокирован</b>,
        registeredAt: '29.03.2023',
        linkedAccounts: '8',
        actions: <TableItemButtons/>,
    },
    {
        id: 5,
        name: 'Fun&Sun travel',
        contact: '+998711144865',
        deposit: '10,877',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '28.02.2023',
        linkedAccounts: '8',
        actions: <TableItemButtons/>,
    },
    {
        id: 6,
        name: 'Teztour',
        contact: '+998757842032',
        deposit: '5,400',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '04.03.2023',
        linkedAccounts: '1',
        actions: <TableItemButtons/>,
    },
    {
        id: 7,
        name: 'Sayana travel',
        contact: '+998354187932',
        deposit: '2,300',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '02.01.2023',
        linkedAccounts: '2',
        actions: <TableItemButtons/>,
    },
    {
        id: 8,
        name: 'InApp Travel',
        contact: '+998307846915',
        deposit: '4,300',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '31.03.2023',
        linkedAccounts: '6',
        actions: <TableItemButtons/>,
    },
    {
        id: 9,
        name: 'Mandarin Tour',
        contact: '+998287954197',
        deposit: '0',
        status: <b className="text-red-500">заблокирован</b>,
        registeredAt: '10.02.2023',
        linkedAccounts: '1',
        actions: <TableItemButtons/>,
    },
    {
        id: 10,
        name: 'CentralTur',
        contact: '+998711144865',
        deposit: '80,344',
        status: <b className="text-green-500">активный</b>,
        registeredAt: '01.03.2023',
        linkedAccounts: '1',
        actions: <TableItemButtons/>,
    },
];