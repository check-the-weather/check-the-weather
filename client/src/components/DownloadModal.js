import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Group from 'components/Group';

import styles from './DownloadModal.module.scss';

function DownloadModal({ setIsOpen, data }) {
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

  function downloadData() {
    const { Parser } = require('json2csv');
    const exportedFileName = 'exportedForcast.csv';

    const fields = ['field1', 'field2', 'field3'];
    const opts = { fields };

    // Convert JSON to CSV
    try {
      const parser = new Parser(opts);
      var csv = parser.parse(data);
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
        <p className={styles.ConfirmText}>Are you sure you want to download the daily forecast?</p>
        <Group className={styles.BtnContainer}>
          <button onClick={downloadData} className={styles.ConfirmDownload}>Yes</button>
          <button onClick={closeModal} className={styles.DenyDownload}>No</button>
        </Group>
      </div>
    );
}

DownloadModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default DownloadModal;