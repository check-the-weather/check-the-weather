import React from 'react'
import Group from './Group'
import BottomCard from './BottomCard'
import styles from './BottomCards.module.scss' 

function BottomCards({ data }) {
    const hightide = data?.weatherApiData?.current?.tide ?? ''
    const lowtide = data?.weatherApiData?.current?.feelslike_c
    const windspeed = data?.weatherApiData?.current?.wind_kph ?? '' 
    const winddirection = data?.weatherApiData?.current?.wind_dir ??''
    const sunrisetime = data?.owmData?.main?.pressure ?? ''
    const sunsettime = data?.owmData?.main?.pressure ?? ''
    const uvindex = data?.weatherApiData?.current?.uv ?? '' 

  
  const FISHING_ROWS = [
    { name: 'Next High Tide', value: '21:00 (5m)'},
    { name: 'Next Low Tide', value: '13:00 (0.85m)'},
    { name: 'Wind Speed', value: windspeed + " km/h"},
    { name: 'Wind Direction', value: winddirection},
  ];

  const SUN_ROWS = [
    { name: 'Sunrise', value: '05:00'},
    { name: 'Best Sunrise Photo Opportunity', value: '05:15'},
    { name: 'Sunset', value: '17:15'},
    { name: 'Best Sunset Photo Opportunity', value: '17:55'},
  ];

  
  function getWaterStatus(windspeed) {
    console.log(windspeed)
    if (windspeed >= 20) {
      return { code: 'bad', message: 'Poor Conditions'}
    } 
    
    else if (windspeed > 15 && windspeed <= 20) {
      return { code: 'medium', message: 'Fair Conditions'}
    }

    else if (windspeed <= 15){
      return { code: 'good', message: 'Good Conditions'}
    }
    else {
      return {code: 'unknown', message: ''}
    }
  }

  function updateSunStatus(uvindex){
    console.log(uvindex)
    if (uvindex > 5) {
      return { code: 'bad', message: `UV Index of ${uvindex}`}
    }
    else if (uvindex >= 3 && uvindex < 6) {
      return { code: 'medium', message: `UV Index of ${uvindex}`} 
    }

    else if (uvindex <= 2){
      return { code: 'good', message: `UV Index of ${uvindex}`}
    }
    else {
      return {code: 'unknown', message: ''}
    }
  }

  const waterStatus = getWaterStatus(windspeed)
  const sunStatus = updateSunStatus(uvindex)

  return (
    <Group className={styles.BottomCards}>
      <BottomCard title="Out on the water" titleColor="blue" subtitle="Boating and Fishing" rows={FISHING_ROWS} status={waterStatus} /> 
      <BottomCard title="Up in the sky" titleColor="orange" subtitle="Sunrise and Sunset" rows={SUN_ROWS} status={sunStatus} />
    </Group>
  )
}

export default BottomCards
