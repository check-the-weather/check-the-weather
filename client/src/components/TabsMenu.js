import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Group from './Group';
import VGroup from './VGroup';
import Tab from './Tab';
import Routes from 'helpers/Routes';

import styles from './TabsMenu.module.scss';

function TabsMenu(props) {
  return (
    <VGroup role="tablist" className={clsx(styles.TabsMenu, props.className)} fullHeight flexNone>
      <Link className={styles.TitleContainer} to={Routes.overview().link()}>
        <Group className={styles.CheckThe}>checkthe</Group>
        <Group className={styles.Weather}>weather</Group>
      </Link>
      {props.tabs.map(tab => (
        <Tab key={tab.id} id={tab.id} isSelected={tab.isSelected} to={tab.to} onClick={tab.onClick} aria-label={tab['aria-label']} aria-controls={tab['aria-controls']} svg={tab.svg} isDivider={tab.isDivider} />
      ))}
    </VGroup>
  );
}

TabsMenu.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    svg: PropTypes.object,
    to: PropTypes.string,
    onClick: PropTypes.func,
    'aria-label': PropTypes.string,
    'aria-controls': PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
  isDivider: PropTypes.bool,
};

export default TabsMenu;