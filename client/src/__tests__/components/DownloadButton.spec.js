import { shallow } from 'enzyme';
import React from 'react';

import DownloadButton from "components/DownloadButton";
import DownloadModal from 'components/DownloadModal';
import { ReactComponent as DownloadIcon } from 'components/icons/download.svg'


describe('DownloadButton', () => {
  let MOCK_DATA;

  beforeEach(() => {
    MOCK_DATA = [];
  })
  
  function render() {
    return shallow(<DownloadButton data={MOCK_DATA} />);
  }

  test('it should be a button', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <>
        <button className="DownloadButton"><DownloadIcon /></button>
      </>
    )).toBe(true);
  });

  test('should show modal when clicked', () => {
    const rendered = render();

    rendered.childAt(0).simulate('click');

    expect(rendered.matchesElement(
      <>
        <button className="DownloadButton"><DownloadIcon /></button>
        <DownloadModal />
      </>
    )).toBe(true)
  });
});