import React from "react";
import { Select, Radio } from "antd";

export const DirectionInfo = ({ticketType, setTicketType}) => {
    const opts = [
        { value: 'KUL-TAS 18.05.23'},
        { value: 'WRS-JFK 02.08.23'},
        { value: 'DME-TAS 30.06.23'},
    ];
    return(
        <div className="w-1/3 border rounded-xl block p-3 flex flex-col justify-between">
                    <div className="direction">
                        <h3 className="mb-3 font-semibold text-xl opacity-[.5]">Направление</h3>
                        <span className="mb-3 block">Тип продажи: 
                            <Radio.Group 
                                className="ml-3 font-semibold" 
                                value={ticketType} 
                                defaultValue={'avia'} 
                                onChange={e => setTicketType(e.target.value)}>
                                <Radio.Button value="avia">Авиабилет</Radio.Button>
                                <Radio.Button value="tour">Тур.пакет</Radio.Button>
                            </Radio.Group>
                        </span>
                        <span className="mb-3 block">
                            {`Выберите ${ticketType === 'avia' ? 'авиарейс' : 'тур'}:`}
                            <Select className="w-1/2 ml-3" defaultValue={opts[0].value} options={opts}/>
                        </span>
                        { ticketType === 'avia' && <span className="mb-3 block">Направление: 
                            <Radio.Group 
                                className="ml-3 font-semibold"
                                defaultValue={'2'}
                            >
                                <Radio.Button value="2">Туда-Обратно</Radio.Button>
                                <Radio.Button value="0">Туда</Radio.Button>
                                <Radio.Button value="1">Обратно</Radio.Button>
                            </Radio.Group>
                        </span>}
                        <span className="mb-3 pt-5 block">Воздушное судно: Boeing 787 Dreamliner</span>
                        <span className="mb-3 block">Дата: 18.05.2023 - 29.05.2023</span>
                        <span className="mb-3 block">Авиакомпания: Qatar Airways</span>
                    </div>
                    <div className="overall">
                        <span className="text-lg text-black/[.5] block mb-3">
                            Мест в продаже:&nbsp; 
                            <p className="inline font-bold">45</p>
                        </span>
                        <span className="text-2xl text-black/[.5] block border-t py-2">
                            Итого к оплате:&nbsp; 
                            <p className="inline font-bold text-green-700">1020$ / 11,614,607.40 сум</p>
                        </span>
                    </div>
                </div>
    );
};