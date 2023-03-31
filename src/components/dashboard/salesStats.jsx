import React from "react";
import { Badge } from "./badge";
import ReactECharts from 'echarts-for-react';


export const SalesStats = ({filter}) => {
    const option = {
        grid: {
            left: '5%',
            top: '5%',
            right: '5%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['24.03', '25.03', '26.03', '27.03', '28.03', '29.03', '30.03']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [0, 18, 0, 16, 30, 29, 50],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                color: 'rgb(59 130 246)',
                width: 0,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(59 130 246 / .8)' // color at 0%
                    }, {
                        offset: 1, color: 'rgb(59 130 246 / .5)' // color at 100%
                    }],
                    global: false // default is false
                  }
            }
          }
        ]
      };
    return(
        <Badge title="Динамика продаж" filterOptions={filter}>
            <ReactECharts className="w-full" option={option}/>
        </Badge>
    )
}