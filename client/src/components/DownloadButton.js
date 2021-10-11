import React, { useState } from 'react';

import DownloadModal from 'components/DownloadModal';
import { ReactComponent as DownloadIcon } from 'components/icons/download.svg'

import styles from './DownloadButton.module.scss';

function DownloadButton() {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.DownloadButton}><DownloadIcon /></button>
      {modalIsOpen && <DownloadModal setIsOpen={setIsOpen} />}
    </>
  );
}

export default DownloadButton;