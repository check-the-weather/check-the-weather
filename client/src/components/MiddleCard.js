import React from 'react'
import Group from './Group'
import VGroup from './VGroup'
import styles from './MiddleCard.module.scss' 

function MiddleCard({data}){
  

  return(
    <Group className={styles.MiddleCard}>
      <Group className={styles.MiddleCardRow}>
        <p className={styles.Title}>Today's Temperature</p>
        </Group>
        <Group className={styles.Graph}></Group>
        <Group className={styles.VerticalDivider}></Group>
        <VGroup></VGroup>

    </Group>
  )
}


export default MiddleCard