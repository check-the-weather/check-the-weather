import React, { useRef, useEffect } from 'react';

import Group from 'components/Group';

import styles from './DownloadModal.module.scss';

function DownloadModal({ setIsOpen }) {
  const ModalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ModalRef.current || !ModalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });


  function closeModal() {
    setIsOpen(false);
  }

  function downloadData(userFavourites) {
    const { Parser } = require('json2csv');
    const exportedFileName = 'exportedFavourites.csv';

    // Convert JSON to CSV
    try {
      const parser = new Parser();
      var csv = parser.parse(userFavourites);
      console.log(csv);
    } catch (err) {
      console.error(err);
    }

    // Convert to Blob
    const blob = new Blob([csv], { type: 'text/csv;' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFileName);
    } else {
        var link = document.createElement('a');
      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

    return (
      <div className={styles.DownloadModal} ref={ModalRef} >
        <p className={styles.ConfirmText}>Are you sure you want to download your favourites?</p>
        <Group className={styles.BtnContainer}>
          <button onClick={downloadData} className={styles.ConfirmDownload}>Yes</button>
          <button onClick={closeModal} className={styles.DenyDownload}>No</button>
        </Group>
      </div>
    );
}

export default DownloadModal;