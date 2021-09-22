import React from 'react'

import styles from './Sidebar.module.css'

function Sidebar({logout}) {

  return (
    <div className={styles.SideBar}>
      <div className={styles.TitleContainer}>
        <div className={styles.CheckThe}>checkthe</div>
        <div className={styles.Weather}>weather</div>
      </div>
      <div className={styles.Item}>
        Overview
      </div>
      <div className={styles.Item}>
        Favourites
      </div>
      <div className={styles.Divider}>
      </div>
      <div className={styles.Item} onClick={e => logout(e)}>
        Sign out
      </div>
    </div>
  )
}

export default Sidebar;