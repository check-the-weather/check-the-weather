import React from 'react'
import PropTypes from 'prop-types'

import Group from './Group'
import BottomCard from './BottomCard'

import styles from './BottomCards.module.scss' 

import { addHoursToDate, addMinutesToDate, subtractMinutesFromDate } from 'helpers/time'
import { getRandomInt,getRandomFloat } from 'helpers/random'

function BottomCards({ data }) {
    const windSpeed = data?.weatherApiData?.current?.wind_kph ?? '' 
    const windDirection = data?.weatherApiData?.current?.wind_dir ?? ''
    const sunriseTime = data?.weatherApiData?.forecast?.forecastday[0]?.astro?.sunrise ?? '' 
    const sunsetTime = data?.weatherApiData?.forecast?.forecastday[0]?.astro?.sunset ?? '' 
    const uvIndex = data?.weatherApiData?.current?.uv ?? '' 
    const nextLowTideHeight = getRandomFloat(-1.2, -1.5).toFixed(2)
    const nextHighTideHeight = getRandomFloat(1.5, 1.9).toFixed(2)

    const today = new Date()
    const sunsetTimeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), sunsetTime.substring(0, 2), sunsetTime.substring(3, 5))
    const sunsetTimeDateConverted = addHoursToDate(sunsetTimeDate, 12)
    const sunriseTimeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), sunsetTime.substring(0, 2), sunriseTime.substring(3, 5))

    const sunsetPhotoTime = subtractMinutesFromDate(sunsetTimeDateConverted, getRandomInt(15, 30)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    const sunrisePhotoTime = subtractMinutesFromDate(sunriseTimeDate, getRandomInt(15, 30)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

    let nextLowTide = addHoursToDate(new Date(), getRandomInt(5, 7))
    nextLowTide = addMinutesToDate(new Date(nextLowTide), getRandomInt(0, 60)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    let nextHighTide = addHoursToDate(new Date(), getRandomInt(10, 14))
    nextHighTide = addMinutesToDate(new Date(nextHighTide), getRandomInt(0, 60)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    
  const FISHING_ROWS = [
    { name: 'Next High Tide', value: `${nextHighTide} (${nextHighTideHeight}m)`},
    { name: 'Next Low Tide', value: `${nextLowTide} (${nextLowTideHeight}m)`},
    { name: 'Wind Speed', value: windSpeed + ' km/h'},
    { name: 'Wind Direction', value: windDirection},
  ];

  const SUN_ROWS = [
    { name: 'Sunrise', value: sunriseTime},
    { name: 'Best Sunrise Photo Opportunity', value: sunrisePhotoTime },
    { name: 'Sunset', value: sunsetTime },
    { name: 'Best Sunset Photo Opportunity', value: sunsetPhotoTime},
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

BottomCards.propTypes = {
  data: PropTypes.object,
}

export default BottomCards
