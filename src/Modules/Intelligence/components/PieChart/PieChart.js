 import React, { useState } from 'react';
 import ReactApexChart from 'react-apexcharts';
import './PieChart.css';
 
 const PieChart = () => {
  const [s
    , setSelectedLabel] = useState('')
   const [chartData, setChartData] = useState({
     series: [44, 55, 13, 43, 22, 37, 40, 33, 27],
     options: {
 labels: ['CoreX', 'Vendormate', 'Data connect', 'Supply chain analytics', 'Fusion', 'Nuvia', 'E-pay', 'Curate', 'CCXpert'],
      theme: {
     monochrome: {
       enabled: false
     }
   },
      chart: {
         type: 'donut',
       },
       colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#20B2AA', '#CD853F', '#D8BFD8', '#FFE4B5', '#F08080'],
        events: {
         dataPointSelection: (event, chartContext, config) => {
           
           const label = chartContext.options.labels[config.dataPointIndex];
          setSelectedLabel(label);
       
           console.log("Selected Label:", label);
         },
       },
       legend: {
         position: 'right',
         horizontalAlign: 'right',
         itemMargin: {
           horizontal: 10, // Adjust the horizontal margin here
         },
         markers: {
           width: 12, // Set the width of the markers           height: 12, // Set the height of the markers
        },
       },
       dataLabels: {
         enabled: false, // Hide percentage labels
      },
       responsive: [
         {
           breakpoint: 480,
           options: {
            chart: {
               width: 200,
            },
             legend: {
               position: 'bottom',
               align: 'right',
             },
           },
         },
       ],
 chart: {
   events: {
     dataPointSelection: (event, chartContext, config) => {
       const label = config.w.config.labels[config.dataPointIndex];
       console.log(label)
     }
   } }
    },
   });
 
   return (
     <div className="chart-container">
       <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
     </div>
   );
 };
 
export default PieChart;




 
