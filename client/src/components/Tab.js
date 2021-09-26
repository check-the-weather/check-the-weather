import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Tab.module.scss';

function Tab(props) {
  const commonProps = {
    role: 'tab',
    className: clsx(styles.Tab, {
      [styles['Tab--Selected']]: props.isSelected,
    }),
    'aria-label': props['aria-label'],
    'aria-controls': props['aria-controls'],
    'aria-selected': props.isSelected,
    id: props.id,
    tabIndex: !props.isSelected ? '-1' : undefined,
  };

  if (props.isDivider) {
    return <div className={styles.Divider} />
  }

  if (props.to) {
    return (
      <Link to={props.to} {...commonProps} >
        {props.svg} {props.id}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} {...commonProps}>
      {props.svg} {props.id}
    </button>
  );
}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  svg: PropTypes.object,
  to: PropTypes.string,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string,
  'aria-controls': PropTypes.string,
};

export default Tab;