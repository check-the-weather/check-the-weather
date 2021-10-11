import { shallow } from 'enzyme';
import React from 'react';

import DownloadButton from "components/DownloadButton";
import { ReactComponent as DownloadIcon } from 'components/icons/download.svg'

describe('DownloadButton', () =>{
  let MOCK_ON_CLICK;

  beforeEach(() => {
    MOCK_ON_CLICK = jest.fn();
  });


  function render() {
    return shallow(<DownloadButton onClick={MOCK_ON_CLICK} />);
  }

    test('it should be a button', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <button
        className="DownloadButton"
      >
        <DownloadIcon />
      </button>,
    )).toBe(true);
  });

  describe('onClick', () => {
    test('calls the onClick prop', () => {
      const rendered = render();

      rendered.simulate('click');

      expect(MOCK_ON_CLICK).toHaveBeenCalledTimes(1);
    });
  });
});