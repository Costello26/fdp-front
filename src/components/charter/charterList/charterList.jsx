import React from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";
import { ListItemActions } from "./listItemActions";

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: 'Рейсы'
    }
];

const cols = [
    {
        title: '№',
        dataIndex: 'num',
        key: 'num',
        width: '5%'
      },
      {
        title: 'Рейс',
        dataIndex: 'charter',
        key: 'charter',
        width: '15%'
      },
      {
        title: 'Авиакомпания',
        dataIndex: 'airline',
        key: 'airline',
        width: '15%'
      },
      {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        width: '15%'
      },
      {
        title: 'Загрузка(мест)',
        dataIndex: 'load',
        key: 'load',
        width: '15%'
      },
      {
        title: 'Публичная продажа(мест)',
        dataIndex: 'sale',
        key: 'sale',
        width: '15%'

      },
      {
        title: 'Действия',
        dataIndex: 'actions',
        key: 'actions',
        width: '15%'
      },
];

const dataSource = [
    {
        num: 1,
        charter: 'TAS-KUL MH1855',
        date: '15.03.2023 - 25.03.2023',
        airline: 'Malaysia Airways',
        load: '120/334',
        sale: '56',
        actions: <ListItemActions/>
    },
    {
      num: 2,
      charter: 'TAS-KUL MH1855',
      date: '15.03.2023 - 25.03.2023',
      airline: 'Malaysia Airways',
      load: '120/334',
      sale: '56',
      actions: <ListItemActions/>
    },
    {
      num: 3,
      charter: 'TAS-KUL MH1855',
      date: '15.03.2023 - 25.03.2023',
      airline: 'Malaysia Airways',
      load: '120/334',
      sale: '56',
      actions: <ListItemActions/>
    },
    {
      num: 4,
      charter: 'TAS-KUL MH1855',
      date: '15.03.2023 - 25.03.2023',
      airline: 'Delta Airlines',
      load: '120/334',
      sale: '56',
      actions: <ListItemActions/>
    },
    {
      num: 5,
      charter: 'TAS-KUL MH1855',
      date: '15.03.2023 - 25.03.2023',
      airline: 'British Airways',
      load: '120/334',
      sale: '56',
      actions: <ListItemActions/>
    },
    {
      num: 6,
      charter: 'TAS-KUL MH1855',
      date: '15.03.2023 - 25.03.2023',
      airline: 'Air France',
      load: '120/334',
      sale: '56',
      actions: <ListItemActions/>
    },
];

export const CharterList = () => {
    return (
        <section className="charter-list w-full h-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 font-semibold text-xl">Все рейсы</h2>
            <Table className="px-5" columns={cols} dataSource={dataSource}/>
        </section>
    );
};