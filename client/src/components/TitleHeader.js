import React from 'react';
import PropTypes from 'prop-types';

import Group from 'components/Group';

import styles from './TitleHeader.module.scss';

function TitleHeader({ title, name }) {
  return (
    <Group fullWidth className={styles.TitleHeader}>
      <Group className={styles.LeftContainer}>
        <h1 className={styles.TitleText}>{title}</h1>
      </Group>
      <Group className={styles.RightContainer} fullWidth>
        <div className={styles.Divider} />
        <Group className={styles.NameContainer} centeredContent>
          <p className={styles.Name}>{name}</p>
        </Group>
        <Group className={styles.UserImageContainer}>
          <img className={styles.UserImage} src={`https://avatars.dicebear.com/api/identicon/${name}.svg`} alt="User profile" />
        </Group>
      </Group>
    </Group>
  );
}

TitleHeader.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default TitleHeader;
