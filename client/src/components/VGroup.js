import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './VGroup.module.scss';

function VGroup(props) {
  const style = useMemo(() => Object.assign(
    props.width ? { width: props.width } : {},
    props.style,
  ), [props.width, props.style]);

  return (
    <div
      className={clsx(styles.VGroup, props.className, {
        [styles['VGroup--FlexNone']]: props.flexNone,
        [styles['VGroup--Flex1']]: props.flex1,
        [styles['VGroup--FullHeight']]: props.fullHeight,
        [styles['VGroup--CenteredContent']]: props.centeredContent,
      })}
      style={style}
      role={props.role}
      id={props.id}
      aria-labelledby={props['aria-labelledby']}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </div>
  );
}

VGroup.propTypes = {
  'aria-labelledby': PropTypes.string,
  centeredContent: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  flexNone: PropTypes.bool,
  flex1: PropTypes.bool,
  fullHeight: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VGroup;