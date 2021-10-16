import React from 'react'
import PropTypes from 'prop-types'

import Group from 'components/Group'
import VGroup from 'components/VGroup'
import TabsMenu from 'components/TabsMenu'
import getTabs from 'helpers/getTabs'
import TitleHeader from 'components/TitleHeader'
import Chatroom from 'components/Chatroom'


// import styles from './Community.module.scss'

function Community({ name, logout }) {
  const tabs = getTabs('Community', logout)

  return (
    <Group fullHeight fullWidth>
      <TabsMenu tabs={tabs} />
      <VGroup fullHeight fullWidth>
        <TitleHeader title="Community" name={name} />
        <Chatroom name={name} />
      </VGroup>
    </Group>
  )
}

Community.propTypes = {
  name: PropTypes.string,
  logout: PropTypes.func,
}

export default Community
