import { Select, Input, Button } from "antd";
import React from "react";

export const TourFilters = () => {
    const sortBy = [
        { value: 'Дата продажи(самые новые)'},
        { value: 'Дата продажи(самые давние)'},
        { value: 'Имя(А-Я)'},
        { value: 'Имя(Я-А)'},
    ];
    const tours = [
        { value: 'Дубай 8 дней / 7 ночей' },
        { value: 'Мальдивы 12 дней / 12 ночей' },
        { value: 'Джидда 20 дней / 20 ночей' }
    ];
    const passengerTypes = [
        { value: 'ADULT' },
        { value: 'INFANT' },
        { value: 'CHILD' }
    ];
    const classes = [
        {value: 'все классы'},
        {value: 'бизнес'},
        {value: 'эконом'},
    ];
    return(
        <>
            <Select className="inline-block mr-2 w-2/12" placeholder="Сортировать по" options={sortBy}/>
            <Select className="inline-block mr-2 w-2/12" placeholder="Тур" options={tours}/>
            <Select className="inline-block mr-2 w-1/12" placeholder="Класс" options={classes}/>
            <Input className="inline-block w-2/12 mr-2" placeholder="Искать по id, имени, номеру паспорта, контакту"/>
            <Select className="inline-block mr-2 w-2/12" placeholder="Сортировать по типу пассажира" options={passengerTypes}/>
            <Button className="my-2" type="link">Сбросить фильтры</Button>
            <Button type="default">Скачать xls</Button>
        </>
    );
};
