import React from 'react'
import Group from './Group'
import BottomCard from './BottomCard'
import styles from './BottomCards.module.scss' 

function BottomCards({ data }) {
    const windSpeed = data?.weatherApiData?.current?.wind_kph ?? '' 
    const windDirection = data?.weatherApiData?.current?.wind_dir ?? ''
    const sunRiseTime = data?.weatherApiData?.forecast?.forecastday[0]?.astro?.sunrise ?? '' 
    const sunSetTime = data?.weatherApiData?.forecast?.forecastday[0]?.astro?.sunset ?? '' 
    const uvIndex = data?.weatherApiData?.current?.uv ?? '' 

  
  const FISHING_ROWS = [
    { name: 'Next High Tide', value: '21:00 (5m)'},
    { name: 'Next Low Tide', value: '13:00 (0.85m)'},
    { name: 'Wind Speed', value: windSpeed + " km/h"},
    { name: 'Wind Direction', value: windDirection},
  ];

  const SUN_ROWS = [
    { name: 'Sunrise', value: sunRiseTime},
    { name: 'Best Sunrise Photo Opportunity', value:sunRiseTime },
    { name: 'Sunset', value: sunSetTime },
    { name: 'Best Sunset Photo Opportunity', value: sunSetTime},
  ];

  
  function getWaterStatus(windSpeed) {
    if (windSpeed >= 20) {
      return { code: 'bad', message: 'Poor Conditions'}
    } 
    
    else if (windSpeed > 15 && windSpeed <= 20) {
      return { code: 'medium', message: 'Fair Conditions'}
    }

    else if (windSpeed <= 15){
      return { code: 'good', message: 'Good Conditions'}
    }
    else {
      return {code: 'unknown', message: ''}
    }
  }

  function updateSunStatus(uvIndex){
    if (uvIndex > 5) {
      return { code: 'bad', message: `UV Index of ${uvIndex}`}
    }
    else if (uvIndex >= 3 && uvIndex < 6) {
      return { code: 'medium', message: `UV Index of ${uvIndex}`} 
    }

    else if (uvIndex <= 2){
      return { code: 'good', message: `UV Index of ${uvIndex}`}
    }
    else {
      return {code: 'unknown', message: ''}
    }
  }

  const waterStatus = getWaterStatus(windSpeed)
  const sunStatus = updateSunStatus(uvIndex)

  return (
    <Group className={styles.BottomCards}>
      <BottomCard title="Out on the water" titleColor="blue" subtitle="Boating and Fishing" rows={FISHING_ROWS} status={waterStatus} /> 
      <BottomCard title="Up in the sky" titleColor="orange" subtitle="Sunrise and Sunset" rows={SUN_ROWS} status={sunStatus} />
    </Group>
  )
}

export default BottomCards
