import React from 'react';
import { Bar } from 'react-chartjs-2';
import './info.css'

export default function BarChart({ data: { TotalConfirmed, TotalDeaths, TotalRecovered, Country } }) {
  // console.log(Country)
  const bar = {
    labels: ['Infected', 'Deaths', 'Recovered'],
    datasets: [
      {
        label: 'people',
        backgroundColor: ['blue', 'red', 'green'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [TotalConfirmed, TotalDeaths, TotalRecovered]
      },


    ]
  };
  if (!TotalConfirmed) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 >Loading...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className='barChart_div'>

        <Bar
          data={bar}

          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'People'
            },
            legend: {
              display: false,
            }
          }


          }
        />
      </div>
    </div>
  );
}