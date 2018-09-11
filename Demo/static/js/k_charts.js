/*
 * @Author: K.LEE 
 * @Date: 2018-05-18 19:22:14 
 * @Last Modified by: K.LEE
 * @Last Modified time: 2018-05-18 19:22:35
 */

//  index.html 综合评分
var myChart = echarts.init(document.getElementById('user_rating'), 'macarons');

var option = {
    color: ['#1e87f0', '#faa05a'],
    grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    tooltip: {},
    radar: {
        indicator: [{
                name: 'KPI1',
                max: 6500
            },
            {
                name: 'KPI2',
                max: 16000
            },
            {
                name: 'KPI3',
                max: 30000
            },
            {
                name: 'KPI4',
                max: 38000
            },
            {
                name: 'KPI5',
                max: 52000
            },
            {
                name: 'KPI6',
                max: 25000
            },
            {
                name: 'KPI7',
                max: 62000
            },
            {
                name: 'KPI8',
                max: 25000
            }
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
                value: [4300, 10000, 28000, 35000, 50000, 19000, 50000, 19000],
                name: '个人'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000, 50000, 19000],
                name: '平均'
            }
        ]
    }]
};

myChart.setOption(option);