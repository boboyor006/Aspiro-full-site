import React from 'react'
import { Line } from 'react-chartjs-2';





const Charts = () => {


    const data = {
        labels: ['Yanvar', 'Fevral', 'Mart', 'April', 'May'],
        datasets: [
          {
            label: "O'qtuvhilar ",
            borderColor: 'orange',
            borderWidth: 2,
            data: [2,35, 59, 70, 81, 90],
          },
          {
            label: "O'quvchilar ",
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            data: [2, 28, 35, 50, 78],
          },
        ],
      };


      const options = {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            beginAtZero: true,
          },
        },
      };



     const myStayle = {
        height :"500px"
     }

  return (
    <div>
         <h2>O'quv markazimizni O'sish statika </h2>
      <Line  style={myStayle} data={data} options={options} />
    </div>
  )
}

export default Charts;