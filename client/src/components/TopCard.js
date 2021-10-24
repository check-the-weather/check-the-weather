import React from 'react'
import PropTypes from 'prop-types'

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

TopCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  unit: PropTypes.string,
}

export default TopCard
