import React from 'react';
import { shallow } from 'enzyme';

import VGroup from 'components/VGroup';
import Cell from 'components/Cell';

describe('Cell', () =>{
  let MOCK_TITLE;
  let MOCK_VALUE;
  let MOCK_UNIT;

  beforeEach(() => {
    MOCK_TITLE = 'test title';
    MOCK_VALUE = 28;
    MOCK_UNIT = '°';
  });

  function render() {
    return shallow(<Cell title={MOCK_TITLE} value={MOCK_VALUE} unit={MOCK_UNIT} />);
  }
  
  test('it should render', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <VGroup className="Cell">
        <p className="Title">{MOCK_TITLE}</p>
        <p className="Value">{`${MOCK_VALUE}${MOCK_UNIT}`}</p>
      </VGroup>
    )).toBe(true);
  });
});