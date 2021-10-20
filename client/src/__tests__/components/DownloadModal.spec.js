import { shallow } from 'enzyme';
import React from 'react';

import Group from 'components/Group';

import DownloadModal from 'components/DownloadModal';

describe('DownloadModal', () =>{
  let MOCK_SET_IS_OPEN;

  beforeEach(() => {
    MOCK_SET_IS_OPEN = jest.fn();
  });

  function render() {
    return shallow(<DownloadModal setIsOpen={MOCK_SET_IS_OPEN} />);
  }
  
  test('it should be a modal', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <div className="DownloadModal" >
        <p className="ConfirmText">Are you sure you want to download your favourites?</p>
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