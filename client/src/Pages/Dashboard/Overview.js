import React, { useEffect, useState } from 'react'
import wretch from 'wretch'

import Sidebar from 'components/Sidebar'

import styles from './Overview.module.css'

const box = () => (
  <div className={styles.BottomCards}> </div>
);

function Overview({ name, logout }) {
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

  function BuildTable(){
    return(
      <div className={styles.BottomCard}>
            <p className={styles.BottomCardTitle}>Out On The Water</p>
            <p className={styles.BottomCardSubTitle}>Boating and Fishing</p>
            <div className={styles.BottomCardRow}>
            <div className={styles.BottomCardTextLeft}>
              <p>Next High Tide</p> </div>
            <div className={styles.BottomCardTextRight}>
              <p>4</p></div>
            </div>
            <div className={styles.Divider}></div>
            <div className={styles.BottomCardRow}>
            <div className={styles.BottomCardTextLeft}> <p>Next Low Tide</p> </div>
            <div className={styles.BottomCardTextRight}>
              <p>3</p></div>
            </div>
            <div className={styles.Divider}></div>
            <div className={styles.BottomCardRow}>
            <div className={styles.BottomCardTextLeft}> <p>Wind Speed</p> </div>
            <div className={styles.BottomCardTextRight}>
              <p>2</p></div>
            </div>
            <div className={styles.Divider}></div>
            <div className={styles.BottomCardRow}>
            <div className={styles.BottomCardTextLeft}> <p>Wind Direction</p> </div>
            <div className={styles.BottomCardTextRight}>
              <p>1</p></div>
            </div>
          </div>
    )
  }
  useEffect(() => {
    // getOwmWeatherData() // Commented out as we got temporarily blocked for exceeding daily API requests limit
    getWeatherApiData()
  }, [])
  console.log(weatherApiData)
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
        <div className={styles.BottomCards}>
          <BuildTable/>
      </div>
      </div>
    </div>
  )
}

export default Overview;