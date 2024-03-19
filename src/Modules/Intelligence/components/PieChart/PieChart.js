import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22, 37, 40, 33, 27],
    options: {
      chart: {
        type: 'donut',
      },
     
    
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#20B2AA','#CD853F','#D8BFD8','#FFE4B5','#F08080'],
      labels: ['CoreX', 'Vendormate', 'Data connect', 'Supply chain analytics', 'Fusion', 'Nuvia', 'E-pay', 'Curate', 'CCXpert'],
     
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center'
          }
        }
      }]
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut"  labels ={chartData.labels}
    colors={chartData.colors}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
export default PieChart;