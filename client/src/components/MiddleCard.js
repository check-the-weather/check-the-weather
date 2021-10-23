import React from 'react'
import Group from './Group'
import VGroup from './VGroup'
import styles from './MiddleCard.module.scss' 
import Cell from './Cell'

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
  const hottestTime = Date.parse(hourlyData?.reduce(hotReducer).time) ? new Date(Date.parse(hourlyData?.reduce(hotReducer).time)).toLocaleTimeString("en-AU", { hour: '2-digit', minute: '2-digit' }) : '';
  const coldestTime = Date.parse(hourlyData?.reduce(coldReducer).time) ? new Date(Date.parse(hourlyData?.reduce(coldReducer).time)).toLocaleTimeString("en-AU", { hour: '2-digit', minute: '2-digit' }) : '';

  return (
    <Group className={styles.MiddleCard}>
      <VGroup className={styles.Graph}>

      </VGroup>
      <VGroup className={styles.Cells}>
        <Cell title="Maximum Temperature" value={maxTemp} unit="°"/> 
        <Cell title="Minimum Temperature" value={minTemp} unit="°"/>
        <Cell title="Average Temperature" value={avgTemp} unit="°"/>
        <Cell title="Hottest Time Of The Day" value={hottestTime}/>
        <Cell title="Coldest Time Of The Day" value={coldestTime}/>
      </VGroup>
    </Group>
  )
}


export default MiddleCard