import React, { useEffect, useState } from 'react'
import wretch from 'wretch'

import Sidebar from '../../components/Sidebar'
import TitleHeader from '../../components/TitleHeader'

import styles from './Overview.module.css'

function Overview({name, logout}) {
  // const [owmData, setOwmData] = useState({})
  const [weatherApiData, setweatherApiData] = useState({})


  // async function getOwmWeatherData() {
  //   const response = await wretch('https://api.openweathermap.org/data/2.5/weather?q=townsville&appid=6f49c873dc46ce7c2d7f8040239c3e7f').get().json()
  //   setOwmData(response)
  // }

  async function getWeatherApiData() {
    const response = await wretch('https://api.weatherapi.com/v1/forecast.json?key=f0b89dbb299f43f4986102826210509&q=Townsville&days=1&aqi=no&alerts=no').get().json()
    setweatherApiData(response)
  }


  useEffect(() => {
    // getOwmWeatherData() // Commented out as we got temporarily blocked for exceeding daily API requests limit
    getWeatherApiData()
  }, [])

  return (
    <div className={styles.PageContainer}>
      <Sidebar logout={logout} />
      <div className={styles.Overview}>
        <TitleHeader title={"Overview"} name={name} />
        <div className={styles.Cards}>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Temperature</p>
            <p className={styles.CardText}>{`${weatherApiData?.current?.temp_c}°`}</p>
          </div>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Feels like</p>
            <p className={styles.CardText}>{`${weatherApiData?.current?.feelslike_c}°`}</p>
          </div>
          <div className={styles.Card}>
            <p className={styles.CardTitle}>Humidity</p>
            <p className={styles.CardText}>{`${weatherApiData?.current?.humidity}%`}</p>
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