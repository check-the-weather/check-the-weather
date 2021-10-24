import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Group from './Group'

import styles from './BottomCard.module.scss'

function BottomCard({ title, titleColor, subtitle, rows, status }) {

  return (
    <div className={styles.BottomCard}>
      <Group className={styles.BottomCardRow}>
        <p className={clsx(styles.BottomCardTitle, titleColor === 'blue' && styles.Blue, titleColor === 'orange' && styles.Orange)}>{title}</p>
        <p className={clsx(styles.Status, status.code === 'bad' && styles.Red, status.code === 'medium' && styles.Yellow, status.code === 'good' && styles.Green)}>{status.message}</p>
        </Group>
      <p className={styles.BottomCardSubTitle}>{subtitle}</p>
      {rows.map((row, index) => {
        return (
        <Group className={styles.BottomCardRow} key={index}>
          <div className={styles.BottomCardTextLeft}>
            <p>{row.name}</p>
          </div>
          <div className={styles.BottomCardTextRight}>
            <p>{row.value}</p>
          </div>
          { (index + 1) !== rows.length && <div className={styles.Divider} />}
        </Group>
        )
      })}
    </div>
  )
}

BottomCard.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  rows: PropTypes.array,
  status: PropTypes.object
};

export default BottomCard
