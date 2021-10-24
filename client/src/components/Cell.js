import React from 'react'
import VGroup from './VGroup'
import styles from './Cell.module.scss'

function Cell({title, value, unit}){
  return (
    <VGroup className={styles.Cell}>
       <p className={styles.Title}>{title}</p>
       <p className={styles.Value}>{value}{unit}</p>
    </VGroup>

  )
}

export default Cell