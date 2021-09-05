import React, { useEffect, useState } from 'react'
import wretch from 'wretch'

import Sidebar from '../../components/Sidebar'

import styles from './Overview.module.css'

function Overview({name, logout}) {
  const [owmData, setOwmData] = useState({})
  const [weatherApiData, setweatherApiData] = useState({})


  async function getOwmWeatherData() {
    const response = await wretch('https://api.openweathermap.org/data/2.5/weather?q=townsville&appid=6f49c873dc46ce7c2d7f8040239c3e7f').get().json()
    setOwmData(response)
  }

  async function getWeatherApiData() {
    const response = await wretch('http://api.weatherapi.com/v1/forecast.json?key=f0b89dbb299f43f4986102826210509&q=Townsville&days=1&aqi=no&alerts=no').get().json()
    setweatherApiData(response)
  }


  useEffect(() => {
    getOwmWeatherData()
    getWeatherApiData()
  }, [])

  function kelvinToCelsius(kelvin) {
    if (kelvin) {
      return `${Math.round(( kelvin - 273.15))}°`
    }
  }
  
  return (
    <div className={styles.PageContainer}>
      <Sidebar logout={logout} />
      <div className={styles.Overview}>
        <div className={styles.TitleRow}>
          <h1>{name}'s Overview</h1>
        </div>
        <div className={styles.Cards}>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Temperature</p>
            <p className={styles.CardText}>{kelvinToCelsius(owmData?.main?.temp)}</p>
          </div>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Feels like</p>
            <p className={styles.CardText}>{`${kelvinToCelsius(owmData?.main?.feels_like)}%`}</p>
          </div>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Humidity</p>
            <p className={styles.CardText}>{`${owmData?.main?.humidity}%`}</p>
          </div>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Chance of ranfall</p>
            <p className={styles.CardText}>{`${weatherApiData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;