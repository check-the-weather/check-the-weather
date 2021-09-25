import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Tab.module.scss';

const REGULAR_THEME = 'regular';
const STRATUS_THEME = 'stratus';

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
  const imgElement = <img src={props.svg} aria-hidden="true" />;

  if (props.isDivider) {
    return <div className={styles.Divider} />
  }

  if (props.to) {
    return (
      <Link to={props.to} {...commonProps} >
        {imgElement} {props.text}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} {...commonProps}>
      {imgElement}
    </button>
  );
}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string,
  'aria-controls': PropTypes.string,
};

export default Tab;