import React from "react";
import { useState } from "react";
import { Input, Radio, DatePicker } from "antd";

export const PersonalInfo = () => {
    const [passSerial, setPassSerial] = useState('');
    const setPassportSerial = (val) => {
        if(val.length > 2) return;
        return setPassSerial(val.toUpperCase());
    };
    return(
        <form className="w-1/3 border rounded-xl block p-3">
                        <h3 className="mb-3 font-semibold text-xl opacity-[.5]">Личная информация</h3>
                        <Input className="mb-2 text-xl font-semibold" placeholder="Фамилия*"/>
                        <Input className="mb-2 text-xl font-semibold" placeholder="Имя*"/>
                        <Input className="mb-2 text-xl font-semibold" placeholder="Отчество*"/>
                        <div className="flex gap-1">
                            <Input value={passSerial} className="mb-2 text-xl font-semibold w-2/12" onChange={(e) => setPassportSerial(e.target.value)} placeholder="AA*"/>
                            <Input className="mb-2 text-xl font-semibold w-10/12" placeholder="Номер паспорта/ID карты*"/>
                        </div>
                        
                        <div className="mb-2 flex flex-col">
                            <span className="mr-3 mb-2 block">Пол*:<Radio.Group className="text-xl font-semibold ml-3" buttonStyle="outline">
                                <Radio.Button value='male'>Мужчина</Radio.Button>
                                <Radio.Button value='female'>Женщина</Radio.Button>
                            </Radio.Group></span>
                            <span className="mr-3 mb-2 block">Вид пассажира*:<Radio.Group className="text-xl font-semibold ml-3" buttonStyle="outline">
                                <Radio.Button value='adult'>Взрослый</Radio.Button>
                                <Radio.Button value='infant'>Infant</Radio.Button>
                                <Radio.Button value='child'>Child</Radio.Button>
                            </Radio.Group>
                            </span>
                            <span className="mr-3 mb-2 block">Дата рождения*:<DatePicker className="font-semibold w-[35%] ml-3" placeholder="Дата рождения" /></span>
                        </div>
                        <Input type="text" pattern="/^\d+$/" className="mb-2 text-xl font-semibold w-2/3" placeholder="Контактный номер*"/>
                        <Input className="mb-2 text-xl font-semibold w-2/3" placeholder="Эл.почта"/>
                        <span className="block text-sm opacity-[.5] ml-1">* - обязательные поля</span>
        </form>
    );
};