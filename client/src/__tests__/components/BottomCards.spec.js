import React from 'react';
import { shallow } from 'enzyme';

import Group from 'components/Group'
import BottomCards from 'components/BottomCards';
import BottomCard from 'components/BottomCard';

describe('BottomCards', () => {
  let MOCK_TITLE;
  let MOCK_TITLE_COLOR;
  let MOCK_SUBTITLE;
  let MOCK_DATA;
  let EXPECTED_FISHING_ROWS;
  let EXPECTED_WATER_STATUS;
  let EXPECTED_SUN_STATUS;
  let EXPECTED_SUN_ROWS;

  beforeEach(() => {
    MOCK_TITLE = 'Out on the water';
    MOCK_TITLE_COLOR = 'blue';
    MOCK_SUBTITLE = 'Boating and Fishing';
    EXPECTED_WATER_STATUS = { code: 'good', message: 'Good Conditions' };
    EXPECTED_SUN_STATUS = { code: 'medium', message: `UV Index of ${5}` };
    MOCK_DATA = {
      weatherApiData: {
        current: {
          wind_kph: 11, wind_dir: 'NE', uv: 5
        },
        forecast: {
          forecastday: [{ astro: { sunset: '05:55 PM', sunrise: '06:00 AM' } }]
        }
      }
    }
  });

  function render() {
    return shallow(<BottomCards data={MOCK_DATA} />);
  }

  test('it should render', () => {
    const rendered = render()
    const nextHighTide = rendered.childAt(0).prop('rows')[0].value
    const nextLowTide = rendered.childAt(0).prop('rows')[1].value
    const sunsetPhotoTime = rendered.childAt(1).prop('rows')[3].value
    const sunrisePhotoTime = rendered.childAt(1).prop('rows')[1].value


    EXPECTED_FISHING_ROWS = [
      { name: 'Next High Tide', value: nextHighTide }, 
      { name: 'Next Low Tide', value: nextLowTide }, 
      { name: 'Wind Speed', value: '11 km/h'}, 
      { name: 'Wind Direction', value: 'NE' }
    ]

    EXPECTED_SUN_ROWS = [
      { name: 'Sunrise', value: '06:00 AM' }, 
      { name: 'Best Sunrise Photo Opportunity', value: sunrisePhotoTime }, 
      { name: 'Sunset', value: '05:55 PM' },
      { name: 'Best Sunset Photo Opportunity', value: sunsetPhotoTime }
    ]

    console.log(rendered.childAt(1).prop('status'))

    expect(rendered.matchesElement(
      <Group className= "BottomCards">
        <BottomCard title="Out on the water" titleColor="blue" subtitle="Boating and Fishing" rows={EXPECTED_FISHING_ROWS} status={EXPECTED_WATER_STATUS} />
        <BottomCard title="Up in the sky" titleColor="orange" subtitle="Sunrise and Sunset" rows={EXPECTED_SUN_ROWS} status={EXPECTED_SUN_STATUS} />
      </Group>
    )).toBe(true)
  })
})