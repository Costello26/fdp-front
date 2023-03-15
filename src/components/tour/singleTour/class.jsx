import { InputNumber } from "antd"

export const ClassOfTour = ({title}) => {
    return(
        <div className="class__item flex flex-col gap-1">
            <h2 className="w-full font-semibold">{title}</h2>
            <div className="w-12/12">
                <span className="flex items-center justify-between mb-2">Кол-во тур.пакетов(всего): <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={400} defaultValue={''} placeholder="0" addonAfter="итого"/></span>
                <span className="flex items-center justify-between mb-2">К продаже субагентами: <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={400} defaultValue={''} placeholder="0" addonAfter="мест"/></span>
                <span className="flex items-center justify-between mb-2">Багаж: <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={100} defaultValue={''} placeholder="0" addonAfter="кг"/></span>
                <span className="flex items-center justify-between mb-2">Цена: <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={15000} defaultValue={''} placeholder="0" addonAfter="$"/></span>
                <span className="flex items-center justify-between mb-2">Цена(infant): <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={15000} defaultValue={''} placeholder="0" addonAfter="$"/></span>
                <span className="flex items-center justify-between mb-2">Цена(child): <InputNumber className="ml-[5px] w-7/12" controls={true} min={0} max={15000} defaultValue={''} placeholder="0" addonAfter="$"/></span>
            </div>
        </div>
    )
}