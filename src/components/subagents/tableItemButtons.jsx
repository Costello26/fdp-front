import React from "react";
import { useState } from "react";
import { Button, Modal, notification, Input, Checkbox } from "antd";

export const TableItemButtons = () => {
    const [checked, setChecked] = useState(false);
    console.log(checked)
    const blockSubagent = () => {
        Modal.confirm({
            title: 'Подтвердите действие',
            content: <>Вы действительно хотите заблокировать субагента <b>Asia Luxe Travel</b>?</>,
            onOk: (close) => { setTimeout(() => {
                notification.success({
                    message: 'Успешно',
                    description: 'Субагент был заблокирован'
                });
                close();
            }, 1000);},
        });
    };

    const updateBalance = () => {
        Modal.confirm({
            title: 'Пополнение депозита субагента',
            okText: 'Пополнить депозит',
            cancelText: 'Назад',
            content: 
            <>
                <span className="text-black/[.5] inline-block mb-5">
                    Перед подтверждением действия <b>внимательно</b> перепроверьте данные! <br/>
                    <b>Субагент: Asia Luxe Travel</b>
                </span>
                <Input type="number" min={0} max={10000} placeholder="Введите сумму"/>
                <Checkbox value={checked} onChange={e => setChecked(e.target.checked)} className="mt-3">Подтверждаю выполнение действия</Checkbox>
            </>,
            onOk: (close) => { 
                setTimeout(() => {
                    notification.success({
                        message: 'Успешно',
                        description: 'Депозит субагента успешно пополнен'
                    }); 
                    close();           
            }, 1000);},
            });
    };
    return(
        <>
            <Button type="link" className="pr-[10px]" onClick={updateBalance}>Пополнить депозит</Button>
            <Button type="link" className="" onClick={blockSubagent}>Ограничить доступ</Button>
        </>
    );
};