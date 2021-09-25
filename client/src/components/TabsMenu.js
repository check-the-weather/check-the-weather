import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Group from './Group';
import VGroup from './VGroup';
import Tab from './Tab';

import styles from './TabsMenu.module.scss';

function TabsMenu(props) {
  return (
    <VGroup role="tablist" className={clsx(styles.TabsMenu, props.className)} fullHeight flexNone>
      <Group className={styles.TitleContainer} centeredContent>
        <Group className={styles.CheckThe}>checkthe</Group>
        <Group className={styles.Weather}>weather</Group>
      </Group>
      {props.tabs.map(tab => (
        <Tab key={tab.id} id={tab.id} isSelected={tab.isSelected} to={tab.to} onClick={tab.onClick} aria-label={tab['aria-label']} aria-controls={tab['aria-controls']} svg={tab.svg} isDivider={tab.isDivider} />
      ))}
    </VGroup>
  );
}

TabsMenu.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
    'aria-label': PropTypes.string,
    'aria-controls': PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
  isDivider: PropTypes.bool,
};

export default TabsMenu;