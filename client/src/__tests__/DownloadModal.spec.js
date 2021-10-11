import { shallow } from 'enzyme';
import React, { useState } from 'react';

import DownloadModal from 'components/DownloadModal';

describe('DownloadModal', () =>{
  function Render(extraProps = {}) {
    const [setIsOpen] = useState(false)

    return shallow(<DownloadModal setIsOpen={setIsOpen} {...extraProps} />);
  }
  
  test('it should be a modal', () => {
    const rendered = Render();

    expect(rendered.matchesElement(
      <div className="DownloadModal" />
    )).toBe(true);
  });
});