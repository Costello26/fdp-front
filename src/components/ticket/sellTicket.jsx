import React from "react";
import { useState } from "react";
import { Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { PersonalInfo } from "./personalInfo";
import { DirectionInfo } from "./DirectionInfo";

export const SellTicket = () => {
    const items = [
        {
            title: <Link to='/'>Дэшборд</Link>
        },
        {
            title: <Link to='/charters'>Билеты</Link>
        },
        {
            title: 'Продажа билета'
        },
    ];

    const [ticketType, setTicketType] = useState('avia');

    return(
        <section className="single-charter w-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-4 text-2xl font-semibold">Продажа билета</h2>

            <section className="sell-ticket px-5 flex gap-1">
                <DirectionInfo ticketType={ticketType} setTicketType={setTicketType} />
                <PersonalInfo/>
            </section>
            <div className="controlsp p-5">
                <Button type='primary' className="mr-3 bg-blue-600 cursor-pointer">Подтвердить продажу</Button>
                <Button className="cursor-pointer" danger={true}>Вернуться назад</Button>
            </div>
        </section>
    );
};