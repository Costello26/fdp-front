import React from "react";
import { Button } from "antd";
import { Badge } from "./badge";

export const CashStats = ({filter}) => {
    return (
        <Badge title="Выручка" filterOptions={filter}>
                <span className="w-full flex justify-between border-b pb-1 mb-1">Сумма продаж за сегодня: <t>$4,350</t></span>
                <span className="w-full flex justify-between border-b pb-1 mb-1">Сумма продаж за неделю: <t>$87,050</t></span>
                <span className="w-full flex justify-between border-b pb-1 mb-1">Сумма продаж за месяц: <t>$227,440</t></span>
                <span className="w-full flex justify-between">Сумма продаж за все время: <t>$9,883,000</t></span>
            <div className="sales_count mt-5 mx-auto">
                <Button type="default" className="mr-2">Список продаж</Button>
                <Button type="default" className="">Новая продажа</Button>
            </div>
        </Badge>
    );
};