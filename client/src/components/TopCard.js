import React from 'react'

import VGroup from 'components/VGroup'

import styles from './TopCard.module.scss'

function TopCard({ title, value, unit}) {
  const valueWithUnit = value || value === 0 ? `${value}${unit}` : ''
  return (
    <VGroup className={styles.TopCard}>
      <p className={styles.Title}>{title}</p>
      <p className={styles.Value}>{`${valueWithUnit}`}</p>
    </VGroup>
  )
}

export default TopCard
