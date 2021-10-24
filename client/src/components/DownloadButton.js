import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DownloadModal from 'components/DownloadModal';
import { ReactComponent as DownloadIcon } from 'components/icons/download.svg'

import styles from './DownloadButton.module.scss';

function DownloadButton({ data }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.DownloadButton} data={data} ><DownloadIcon /></button>
      {modalIsOpen && <DownloadModal setIsOpen={setIsOpen} data={data}/>}
    </>
  );
}

DownloadButton.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DownloadButton;