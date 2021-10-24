import React from 'react';
import PropTypes from 'prop-types';

import Group from 'components/Group';
import DownloadButton from 'components/DownloadButton'

import styles from './TitleHeader.module.scss';

function TitleHeader({ title, name, download }) {
  return (
    <Group fullWidth className={styles.TitleHeader}>
      <Group className={styles.LeftContainer}>
        <h1 className={styles.TitleText}>{title}</h1>
      </Group>
      <Group className={styles.RightContainer} fullWidth>
        {!!download && <DownloadButton data={download} />}
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
  download: PropTypes.array,
};

export default TitleHeader;
