import React from 'react'

import Group from './Group'
import BottomCard from './BottomCard'
import styles from './BottomCards.module.scss' 

function BottomCards(data) {
  const FISHING_ROWS = [
    { name: 'Next High Tide', value: '21:00 (5m)'},
    { name: 'Next Low Tide', value: '13:00 (0.85m)'},
    { name: 'Wind Speed', value: '8 km/h'},
    { name: 'Wind Direction', value: 'NE'},
  ];

  const SUN_ROWS = [
    { name: 'Sunrise', value: '05:00'},
    { name: 'Best Sunrise Photo Opportunity', value: '05:15'},
    { name: 'Sunset', value: '17:15'},
    { name: 'Best Sunset Photo Opportunity', value: '17:55'},
  ];

  const windSpeed = 21;

  const uvLevel = 10;
  
  function getWaterStatus(windSpeed) {
    if (windSpeed >= 20) {
      return { code: 'bad', message: 'Poor Conditions'}
    } 
    
    else if (windSpeed >= 16 && windSpeed <= 20) {
      return { code: 'medium', message: 'Fair Conditions'}
    }

    else if (windSpeed <= 15){
      return { code: 'good', message: 'Good Conditions'}
    }
  }

  function updateSunStatus(uvLevel){
    if (uvLevel > 5) {
      return { code: 'bad', message: `UV Index of ${uvLevel}`}
    }
    else if (uvLevel >= 3 && uvLevel < 6) {
      return { code: 'medium', message: `UV Index of ${uvLevel}`} 
    }

    else if (uvLevel <= 2){
      return { code: 'good', message: `UV Index of ${uvLevel}`}
    }
  }

  const waterStatus = getWaterStatus(windSpeed)
  const sunStatus = updateSunStatus(uvLevel)

  return (
    <Group className={styles.BottomCards}>
      <BottomCard title="Out on the water" titleColor="blue" subtitle="Boating and Fishing" rows={FISHING_ROWS} status={waterStatus} /> 
      <BottomCard title="Up in the sky" titleColor="orange" subtitle="Sunrise and Sunset" rows={SUN_ROWS} status={sunStatus} />
    </Group>
  )
}

export default BottomCards
