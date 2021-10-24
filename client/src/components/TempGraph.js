import React from 'react'
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types'

import Group from './Group';
import styles from './TempGraph.module.scss'

function TempGraph({ hourlyData }) {
  hourlyData = hourlyData?.map(data => data.temp_c)

  const data = {
    labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
    datasets: [
      {
        data: hourlyData,
        borderColor: 'rgba(55, 81, 255, 1)',
        pointBorderColor: 'rgba(55, 81, 255, 1)',
        backgroundColor: 'rgba(55, 81, 255, 0.1)',
        fill: true,
        lineTension: 0.4,
      }
      
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'rgba(159, 162, 180, 1',
          font: {
            size: 10,
            family: "'Mulish', sans-serif",
          }
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: 'rgba(159, 162, 180, 1',
          font: {
            size: 10,
            family: "'Mulish', sans-serif",
          }
        },
        grid: {
          display: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    },
  }

  return (
    <Group className={styles.TempGraph}>
      <Line data={data} options={options}/>
    </Group>
  )
}

TempGraph.propTypes = {
  hourlyData: PropTypes.array,
}

export default TempGraph;
