import React from "react";
import { SalesStats } from "./salesStats";
import { CashStats } from "./cashStats";
import { LoadStats } from "./loadStats";


export const Dashboard = () => {
    const opts = [
        { value: 'Все' },
        { value: 'Субагенты' },
        { value: 'Головной офис' },
    ];

    const flights = [
        { value: 'TAS-KUL - MH-83556' },
        { value: 'TAS-JFK - HY-334' },
        { value: 'WRS-IST - LP-0087' },
    ];


    return(
        <section className="dashboard w-full p-5 flex flex-wrap">
            <h1 className="mb-3 text-2xl font-semibold w-full">
                Привет, Фирдавс! 
                <span className="text-sky-600/[.75] text-lg pl-[35px]">
                    &nbsp;Сегодня 30 марта, Четверг
                </span>
            </h1>
            <div className="w-1/3">
                <CashStats filter={opts}/>
                <SalesStats filter={opts}/>
            </div>
            <div className="w-2/3 pl-3">
                <LoadStats filter={flights}/>
            </div>
        </section>
    );
};
