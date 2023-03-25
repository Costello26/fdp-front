import React from "react";

export const ModalInfo = () => {
    return(
        <div>
            <span className="block mb-1 p-1 border rounded">
                Заголовок:&nbsp;
                <span className="font-bold">Дубай 8 дней / 7 ночей</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Отель:&nbsp;
                <span className="font-bold">Al Mamzar JBR 5*</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Связанный рейс:&nbsp;
                <span className="font-bold">MH-17 TAS-KUL-TAS</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Опции:&nbsp;
                <span className="font-bold">Трансфер, завтраки, визовый сбор, мед.страховка</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Кол-во тур.пакетов к продаже(эконом класс):&nbsp;
                <span className="font-bold">120 мест</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Кол-во тур.пакетов к продаже(бизнес класс):&nbsp;
                <span className="font-bold">40 мест</span>
            </span>
            <span className="block mb-1 p-1 border rounded">
                Субагентам (эконом класс):&nbsp;
                <span className="font-bold">120 мест</span>
            </span>
            <span className="block mb-3 p-1 border rounded">
                Субагентам (бизнес класс):&nbsp;
                <span className="font-bold">20 мест</span>
            </span>
            
            <span className="block mb-1 p-1 border border-purple-500 rounded">
                Цена билета (эконом класс):&nbsp;
                <span className="font-bold text-purple-600">1200$</span>
            </span>
            <span className="block mb-1 p-1 border-pink-500 border rounded">
                Infant (эконом класс):&nbsp;
                <span className="font-bold text-pink-700">400$</span>
            </span>
            <span className="block mb-3 p-1 border-rose-500 border rounded">
                Child (эконом класс):&nbsp;
                <span className="font-bold text-rose-700">0$</span>
            </span>
            <span className="block mb-1 p-1 border border-purple-500 rounded">
                Цена билета (бизнес класс):&nbsp;
                <span className="font-bold text-purple-600">1400$</span>
            </span>
            <span className="block mb-1 p-1 border border-pink-500 rounded">
                Infant (бизнес класс):&nbsp;
                <span className="font-bold text-pink-600">400$</span>
            </span>
            <span className="block mb-1 p-1 border border-rose-500 rounded">
                Child (бизнес класс):&nbsp;
                <span className="font-bold text-rose-700">0$</span>
            </span>
        </div>
    );
};