import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Group.module.scss';

function Group(props) {
  const style = useMemo(() => Object.assign(
    props.backgroundColor ? { backgroundColor: props.backgroundColor } : {},
    props.height ? { height: props.height } : {},
    props.width ? { width: props.width } : {},
    props.style,
  ), [props.backgroundColor, props.height, props.width, props.style]);

  return (
    <div
      className={clsx(styles.Group, props.className, {
        [styles['Group--FlexNone']]: props.flexNone,
        [styles['Group--Flex1']]: props.flex1,
        [styles['Group--FullHeight']]: props.fullHeight,
        [styles['Group--FullWidth']]: props.fullWidth,
        [styles['Group--CenteredContent']]: props.centeredContent,
      })}
      style={style}
      id={props.id}
    >
      {props.children}
    </div>
  );
}

Group.propTypes = {
  backgroundColor: PropTypes.string,
  centeredContent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  flexNone: PropTypes.bool,
  flex1: PropTypes.bool,
  fullHeight: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Group;