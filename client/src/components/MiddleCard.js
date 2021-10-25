import React from 'react'
import PropTypes from 'prop-types'

import Group from './Group'
import VGroup from './VGroup'
import Cell from './Cell'
import TempGraph from './TempGraph'

import styles from './MiddleCard.module.scss' 

function MiddleCard({ data }){
  function hotReducer(previous, current) {
    return previous.temp_c > current.temp_c ? previous : current;
  }

  function coldReducer(previous, current) {
    return previous.temp_c < current.temp_c ? previous : current;
  }

  const maxTemp = data?.weatherApiData?.forecast?.forecastday[0]?.day?.maxtemp_c ?? '' 
  const minTemp = data?.weatherApiData?.forecast?.forecastday[0]?.day?.mintemp_c ?? '' 
  const avgTemp = data?.weatherApiData?.forecast?.forecastday[0]?.day?.avgtemp_c ?? '' 
  const hourlyData = data?.weatherApiData?.forecast?.forecastday[0]?.hour
  const hottestTime = Date.parse(hourlyData?.reduce(hotReducer).time) ? new Date(Date.parse(hourlyData?.reduce(hotReducer).time)).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' }) : '';
  const coldestTime = Date.parse(hourlyData?.reduce(coldReducer).time) ? new Date(Date.parse(hourlyData?.reduce(coldReducer).time)).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' }) : '';
  const todayTime = new Date().toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  return (
    <Group className={styles.MiddleCard}>
      <VGroup className={styles.Graph}>
        <h2>Today's Temperature</h2>
        <p>as of {todayTime}</p>
        <TempGraph hourlyData={hourlyData} />
      </VGroup>
      <VGroup className={styles.Cells}>
        <Cell title="Maximum Temperature" value={maxTemp} unit="°"/> 
        <Cell title="Minimum Temperature" value={minTemp} unit="°"/>
        <Cell title="Average Temperature" value={avgTemp} unit="°"/>
        <Cell title="Hottest Time Of The Day" value={hottestTime}/>
        <Cell title="Coldest Time Of The Day" value={coldestTime} style={{ borderBottom: '0'}}/>
      </VGroup>
    </Group>
  )
}

MiddleCard.propTypes = {
  data: PropTypes.object
}

export default MiddleCard