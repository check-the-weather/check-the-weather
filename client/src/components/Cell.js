import React from 'react'
import PropTypes from 'prop-types'

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

Cell.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  unit: PropTypes.string,
}

export default Cell