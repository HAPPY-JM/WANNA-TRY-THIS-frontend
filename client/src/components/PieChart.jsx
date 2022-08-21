import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as chartJS} from 'chart.js/auto'


const nationData = [
    {
        id: 1,
        name: "한식",
        num:2
    },
    {
        id: 2,
        name: '중식',
        num:1
    },
    {
        id: 3,
        name: '일식',
        num:4
    },
    {
        id: 4,
        name: '양식',
        num:6
    },
    {
        id: 5,
        name: '잡식',
        num:2
    }

]


const PieChart = () => {
    const [chartData,] = useState({
        labels: nationData.map((data) => data.name),
        datasets: [{
            label: " 니가 고른거닷!",
            data:nationData.map((data)=> data.num)
        }]
    })

    return (<Pie data={chartData} />)
}


export default PieChart;