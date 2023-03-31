import React from "react";
import { Select, Input, Button } from "antd";

export const AviaFilters = () => {
    const directions = [
        {value: 'Все'},
        {value: 'Туда'},
        {value: 'Обратно'},
        {value: 'Туда-Обратно'},
    ];
    const classes = [
        {value: 'все классы'},
        {value: 'бизнес'},
        {value: 'эконом'},
    ];
    const sortBy = [
        { value: 'Дата продажи(самые новые)'},
        { value: 'Дата продажи(самые давние)'},
        { value: 'Имя(А-Я)'},
        { value: 'Имя(Я-А)'},
    ];
    const tours = [
        { value: 'Все рейсы' },
        { value: 'TAS-KUL MH-117' },
        { value: 'DME-DXB ETH-20200' },
        { value: 'JED-JFK HY-331' }
    ];
    const passengerTypes = [
        { value: 'Все типы' },
        { value: 'ADULT' },
        { value: 'INFANT' },
        { value: 'CHILD' }
    ];
    return(
        <>
            <Select className="inline-block mr-2 w-2/12" placeholder="Сортировать по" options={sortBy}/>
            <Select className="inline-block mr-2 w-1/12" placeholder="Направление" options={directions}/>
            <Select className="inline-block mr-2 w-1/12" placeholder="Класс" options={classes}/>
            <Select className="inline-block mr-2 w-2/12" placeholder="Рейс" options={tours}/>
            <Input className="inline-block w-2/12 mr-2" placeholder="Искать по id, имени, номеру паспорта, контакту"/>
            <Select className="inline-block mr-2 w-2/12" placeholder="Сортировать по типу пассажира" options={passengerTypes}/>
            <Button className="my-2" type="link">Сбросить фильтры</Button>
            <Button type="default">Скачать xls</Button>
        </>
    );
};
