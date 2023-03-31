import React from "react";
import { Breadcrumb, Table } from "antd";

export const List = ({title, breadcrumbs, cols, content, filters}) => {
    return (
        <section className="charter-list w-full h-full">
            <Breadcrumb className="p-5 pb-3" items={breadcrumbs} separator="-"/>
            <h2 className="px-5 pb-4 font-semibold text-xl">{title}</h2>
            <div className="filters px-5 pb-4">
                <h3 className="font-semibold text-black/[.65] pb-2">Фильтры</h3>
                {filters}
            </div>
            <Table 
                className="px-5" 
                columns={cols} 
                dataSource={content} 
                pagination={{
                    showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`,
                    showSizeChanger: true,
                    defaultPageSize: 15,
                    showQuickJumper: true
                }}
                bordered
                />
        </section>
    );
};