import React, { useEffect, useState } from 'react'

import TabsMenu from 'components/TabsMenu'
import getTabs from 'helpers/getTabs'
import { unauthedRequester } from 'helpers/requesters'

import styles from './Overview.module.scss'

function Overview({ name, logout }) {
  const [owmData, setOwmData] = useState({})
  const [weatherApiData, setweatherApiData] = useState({})


  async function getOwmWeatherData() {
    const response = await unauthedRequester('https://api.openweathermap.org/data/2.5/weather?q=townsville&appid=6f49c873dc46ce7c2d7f8040239c3e7f').get().json()
    setOwmData(response)
  }

  async function getWeatherApiData() {
    const response = await unauthedRequester('https://api.weatherapi.com/v1/forecast.json?key=f0b89dbb299f43f4986102826210509&q=Townsville&days=1&aqi=no&alerts=no').get().json()
    setweatherApiData(response)
  }


  useEffect(() => {
    getOwmWeatherData()
    getWeatherApiData()
  }, [])
  
  const tabs = getTabs('Overview', logout)

  return (
    <div className={styles.PageContainer}>
      <TabsMenu tabs={tabs}/>
      <div className={styles.Overview}>
        <div className={styles.TitleRow}>
          <h1>{name}'s Overview</h1>
        </div>
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