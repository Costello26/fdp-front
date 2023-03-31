import { Badge } from "./badge";
import React from "react";
import { Table } from "antd";
import ReactECharts from 'echarts-for-react';

export const LoadStats = ({filter}) => {
    const columns = [
        { 
            title: 'Boeing 787 Dream Liner',
            dataIndex: 'title',
        }, 
        { 
            title: 'Всего',
            dataIndex: 'seats',
        }, 
        { 
            title: 'Бизнес',
            dataIndex: 'business',
        }, 
        { 
            title: 'Эконом',
            dataIndex: 'economy',
        }
    ];
    const data =[
        {
            title: 'Всего мест на борту',
            seats: '334',
            business: '40',
            economy: '294',
        },
        {
            title: 'Выделено для субагентов',
            seats: '50',
            business: '-',
            economy: '-',
        },
        {
            title: <b>Продано мест(туда-обратно)</b>,
            seats: '138',
            business: '20',
            economy: '118',
        },
        {
            title: 'Продано мест(туда)',
            seats: '13',
            business: '2',
            economy: '11',
        },
        {
            title: 'Продано мест(обратно)',
            seats: '17',
            business: '5',
            economy: '12',
        },
    ]; 

    const option = {
        tooltip: {
            trigger: 'item'
          },
        color: [
            '#e483fc',
            '#ff3863',
            'rgba(0,0,0, .25)',
            'rgba(0,0,0, .25)'
        ],
        legend: {
            show: true,
            bottom: '5%'
        },
        title: {
            text: 'Продано мест  \n 138/334',
            left: 'center',
            top: 'center',
            textStyle: {
                //fontFamily: 'Nunito',
                fontSize: '18px',
                fontWeight: 500
            }
        },
        series: [
          {
            name: 'В обе стороны',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 2
            },
            legend: {
                show: true,
                bottom: '5%'
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 20, name: 'Бизнес класс' },
              { value: 118, name: 'Эконом класс' },
            ]
          },
        ]
      };
    return(
        <Badge title="Загрузка по рейсам" filterOptions={filter} className='flex flex-row'>
            <Table className="w-2/3" columns={columns} dataSource={data} pagination={false} bordered={true}/>
            <ReactECharts style={{ height: 340 }} className="w-1/3" option={option}/>
            <h4 className="text-xl font-semibold inline-block text-black/[.65] w-full pb-3">Доступно к продаже</h4>
            <Table className="w-2/3" columns={[
                { 
                    title: 'Класс',
                    dataIndex: 'class',
                },
                { 
                    title: 'Туда-обратно',
                    dataIndex: 'twoDir',
                },
                { 
                    title: 'Туда',
                    dataIndex: 'toDir',
                }, 
                { 
                    title: 'Обратно',
                    dataIndex: 'fromDir',
                }, 
            ]} pagination={false} bordered={true} dataSource={[
                {
                    class: 'Эконом класс',
                    twoDir: <span className="text-green-500 font-bold">152</span>,
                    toDir: '18',
                    fromDir: '164'
                },
                {
                    class: 'Бизнес класс',
                    twoDir: <span className="text-green-500 font-bold">13</span>,
                    toDir: '20',
                    fromDir: '55'
                }
            ]}/>
        </Badge>
    );
};