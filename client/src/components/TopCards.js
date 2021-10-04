import React from 'react'

import Group from 'components/Group'
import TopCard from 'components/TopCard'

import styles from './TopCards.module.scss'

function TopCards({ data }) {
  const temp = data?.weatherApiData?.current?.temp_c ?? ''
  const feelsLike = data?.weatherApiData?.current?.feelslike_c ?? ''
  const humidity = data?.owmData?.main?.humidity ?? ''
  const rainfallChance = data?.weatherApiData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain ?? ''
  const pressure = data?.owmData?.main?.pressure ?? ''

  return (
    <Group className={styles.TopCards}>
      <TopCard title="Temperature" value={temp} unit="°"/>
      <TopCard title="Feels like" value={feelsLike} unit="°"/>
      <TopCard title="Humidity" value={humidity} unit="%"/>
      <TopCard title="Chance of ranfall" value={rainfallChance} unit="%"/> 
      <TopCard title="Pressure" value={pressure} unit=" hPa"/>      
    </Group>
  )
}

export default TopCards
