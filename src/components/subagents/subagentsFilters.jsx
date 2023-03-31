import React from "react";
import { Button, Input, Select } from "antd";

export const SubagentFilters = () => {
    return (
        <div className="px-5">
            <Input className="inline-block w-[320px] mr-2" placeholder="Поиск по названию"/>
            <Select className="inline-block w-[220px] mr-2" placeholder='Статус' options={[{ value: 'Все' }, { value: 'Активный' }, { value: 'Заблокирован'}]}/>
            <Select className="inline-block w-[320px] mr-2" placeholder="Порядок сортировки" options={
                [{ value: 'По умолчанию(порядковый номер)'}, { value: 'По алфавиту(A-Z)'}, { value: 'По алфавиту(Z-A)'}, { value: 'Депозит(по возрастанию)'}, { value: 'Депозит(по убыванию)'}, { value: 'Дата регистрации(новейшие)'}, { value: 'Дата регистрации(самые давние)'}]
            }/>
            <Button type="default">Сбросить фильтры</Button>
        </div>
    );
};