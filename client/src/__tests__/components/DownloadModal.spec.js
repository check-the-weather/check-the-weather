import { shallow } from 'enzyme';
import React from 'react';

import Group from 'components/Group';

import DownloadModal from 'components/DownloadModal';

describe('DownloadModal', () =>{
  let MOCK_SET_IS_OPEN;
  let MOCK_DATA;

  beforeEach(() => {
    MOCK_SET_IS_OPEN = jest.fn();
    MOCK_DATA = [{time: "19/10/2021  12:00:00 AM", temp_c: 23.1, is_day: 0, wind_kph: 2.9, wind_dir: "WSW", pressure_mb: 1014, precip_mm: 0, humidity: 91, dewpoint_c: 21.5, 
                cloud: 15, chance_of_rain: 0, uv: 1, gust_kph: 5}, {time: "19/10/2021  12:00:00 AM", temp_c: 23.1, is_day: 0, wind_kph: 2.9, wind_dir: "WSW", pressure_mb: 1014, precip_mm: 0, humidity: 91, dewpoint_c: 21.5, 
                cloud: 15, chance_of_rain: 0, uv: 1, gust_kph: 5}];
  });

  function render() {
    return shallow(<DownloadModal setIsOpen={MOCK_SET_IS_OPEN} data={MOCK_DATA}/>);
  }
  
  test('it should be a modal', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <div className="DownloadModal" >
        <p className="ConfirmText">Are you sure you want to download the daily forecast?</p>
        <Group className="BtnContainer">
          <button className="ConfirmDownload">Yes</button>
          <button className="DenyDownload">No</button>
        </Group>
      </div>
    )).toBe(true);
  });

  test('it should call setIsOpen when click deny button', () =>{
    const rendered = render();

    rendered.childAt(1).childAt(1).simulate('click');

    expect(MOCK_SET_IS_OPEN).toHaveBeenCalledWith(false); // if this passes then closeModal function was called
  });
});