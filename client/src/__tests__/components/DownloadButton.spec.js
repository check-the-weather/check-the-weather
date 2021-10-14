import { shallow } from 'enzyme';
import React from 'react';

import DownloadButton from "components/DownloadButton";
import DownloadModal from 'components/DownloadModal';
import { ReactComponent as DownloadIcon } from 'components/icons/download.svg'


describe('DownloadButton', () =>{
  function render() {
    return shallow(<DownloadButton />);
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