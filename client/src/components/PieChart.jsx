import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const nationData = [
  {
    id: 1,
    name: '한식',
    num: 8,
  },
  {
    id: 2,
    name: '중식',
    num: 1,
  },
  {
    id: 3,
    name: '일식',
    num: 4,
  },
  {
    id: 4,
    name: '양식',
    num: 6,
  },
  {
    id: 5,
    name: 'etc',
    num: 88,
  },
];

const PieChart = () => {
  const [cookies] = useCookies(['jwtToken']);
  const token = cookies.jwtToken;
  const [nation, setNation] = useState();

  axios
    .get('http://localhost:5000/api/user/6309f2ca439242c9a34d4fb1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res));
  // console.log()

  const [chartData] = useState({
    labels: nationData.map((data) => data.name),
    datasets: [
      {
        label: 'pie setting',
        data: nationData.map((data) => data.num),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
      },
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1,
  });

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
