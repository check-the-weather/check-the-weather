import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Group from 'components/Group';

import styles from './DownloadModal.module.scss';

const { Parser } = require('json2csv');

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

  const dataToDownload = data.map(data => {
    return {
      time: data.time,
      temperature_degees: data.temp_c,
      is_day_time: !!data.is_day,
      wind_speed_kph: data.wind_kph,
      wind_direction: data.wind_dir,
      pressure_pascals: data.pressure_mb * 100,
      precipitation_mm: data.precip_mm,
      humidity: data.humidity,
      dewpoint_degrees: data.dewpoint_c,
      cloud_coverage: data.cloud,
      chance_of_rain: data.chance_of_rain,
      uv_index: data.uv,
      gust_kph: data.gust_kph,
    }
  });

  function downloadData() {
    const exportedFileName = 'todays_forecast.csv';

    // Convert JSON to CSV
    let csv;

    try {
      const parser = new Parser();
      csv = parser.parse(dataToDownload);
    } catch (err) {
      console.error(err);
    }

    // Convert to Blob
    const blob = new Blob([csv], { type: 'text/csv;' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFileName);
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