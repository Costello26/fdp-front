import React from "react";
import { Breadcrumb, Table } from "antd";
import { Link } from "react-router-dom";
import { ListItemActions } from "../../charter/charterList/listItemActions";

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: 'Туры'
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
        title: 'Тур',
        dataIndex: 'tour',
        key: 'tour',
        width: '15%'
      },
      {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        width: '15%'
      },
      {
        title: 'Цена(эконом / бизнес)',
        dataIndex: 'price',
        key: 'price',
        width: '15%'
      },
      {
        title: 'В продаже/продано(турпакетов)',
        dataIndex: 'sales',
        key: 'sales',
        width: '15%'
      },
      {
        title: 'Отель',
        dataIndex: 'hotel',
        key: 'hotel',
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
      tour: 'Гастрономический тур по Франции',
      date: '12.06.2023 - 12.08.2023',
      price: 975,
      sales: '28/482',
      hotel: 'Marriott 3*',
      actions: <ListItemActions/>
    },
    {
      num: 2,
      tour: 'Сафари в Южной Африке',
      date: '10.06.2023 - 4.09.2023',
      price: 587,
      sales: '32/374',
      hotel: 'Four Seasons 5*',
      actions: <ListItemActions/>
    },
    {
      num: 3,
      tour: 'Поход на Эверест',
      date: '23.08.2023 - 27.01.2023',
      price: 555,
      sales: '41/259',
      hotel: 'Marriott 4*',
      actions: <ListItemActions/>
    },
    {
      num: 4,
      tour: 'Экскурсионный тур по Италии',
      date: '23.03.2023 - 16.06.2023',
      price: 755,
      sales: '55/815',
      hotel: 'Ritz Carlton 4*',
      actions: <ListItemActions/>
    },
    {
      num: 5,
      tour: 'Сафари в Южной Африке',
      date: '13.09.2023 - 11.03.2023',
      price: 216,
      sales: '81/397',
      hotel: 'Marriott 3*',
      actions: <ListItemActions/>
    },
    {
      num: 6,
      tour: 'Гастрономический тур по Франции',
      date: '13.04.2023 - 15.05.2023',
      price: 387,
      sales: '24/149',
      hotel: 'Hilton 3*',
      actions: <ListItemActions/>
    },
    {
      num: 7,
      tour: 'Пляжный отдых в Греции',
      date: '12.02.2023 - 26.06.2023',
      price: 566,
      sales: '32/288',
      hotel: 'Hilton 3*',
      actions: <ListItemActions/>
    },
    {
      num: 8,
      tour: 'Круиз по Средиземному морю',
      date: '28.07.2023 - 5.04.2023',
      price: 810,
      sales: '41/865',
      hotel: 'Four Seasons 3*',
      actions: <ListItemActions/>
    },
    {
      num: 9,
      tour: 'Тур в Таиланд',
      date: '19.03.2023 - 5.03.2023',
      price: 372,
      sales: '50/911',
      hotel: 'Four Seasons 4*',
      actions: <ListItemActions/>
    },
    {
      num: 10,
      tour: 'Сафари в Южной Африке',
      date: '28.04.2023 - 11.07.2023',
      price: 420,
      sales: '42/981',
      hotel: 'Sheraton 3*',
      actions: <ListItemActions/>
    }
];

export const ToursList = () => {
    return(
        <section className="tour-list w-full h-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 font-semibold text-xl">Все туры</h2>
            <Table className="px-5" columns={cols} dataSource={dataSource}/>
        </section>
    );
};