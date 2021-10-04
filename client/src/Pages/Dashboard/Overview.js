import React, { useEffect, useState } from 'react'
import BottomCards from 'components/BottomCards'
import PropTypes from 'prop-types'

import Group from 'components/Group'
import VGroup from 'components/VGroup'
import TabsMenu from 'components/TabsMenu'
import getTabs from 'helpers/getTabs'
import { unauthedRequester } from 'helpers/requesters'
import TitleHeader from 'components/TitleHeader'
import TopCards from 'components/TopCards'

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

  const topCardsData = { owmData, weatherApiData }

  return (
    <Group fullHeight fullWidth>
      <TabsMenu tabs={tabs}/>
      <VGroup fullHeight fullWidth>
        <TitleHeader title="Overview" name={name} />
        <TopCards data={topCardsData} />
        <BottomCards />
      </VGroup>
    </Group>
  )
}

Overview.propTypes = {
  name: PropTypes.string,
  logout: PropTypes.func,
}

export default Overview;