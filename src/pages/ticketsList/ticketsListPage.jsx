import React from "react";
import { PageWrap } from "../../components/wrap/wrap";
import { List } from "../../components/list/list";
import { Link } from "react-router-dom";
import { cols, mockData, tourCols } from "./cols";
import { Button } from "antd";

export const TicketsListPage = ({title, filters, type}) => {
    const reformedData = mockData.map(item => ({ ...item, actions: <>
        <Button className=" mr-2" danger="true" type="default">Возврат</Button>
        <Button className="" type="default">Информация</Button>
    </>}));
    const breadcrumbs = [
        {
            title: <Link to='/'>Дэшборд</Link>
        },
        {
            title: title
        }
    ];
    return(
        <PageWrap>
            <List 
                title={title}
                breadcrumbs={breadcrumbs} 
                cols={type === 'avia' ? cols : tourCols}
                content={reformedData}
                filters={filters}
            />
        </PageWrap>
    );
};