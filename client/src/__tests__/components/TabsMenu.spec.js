import React from 'react';
import { shallow } from "enzyme";
import { Link } from 'react-router-dom';

import Routes from 'helpers/Routes';
import TabsMenu from "components/TabsMenu";
import Group from 'components/Group';
import VGroup from "components/VGroup";
import Tab from "components/Tab";
import { ReactComponent as TestIcon } from "components/icons/overview.svg";

describe('TabsMenu', () => {
  let MOCK_ON_CLICK_1;
  let MOCK_ON_CLICK_2;
  let MOCK_TO_PATH;
  let MOCK_TABS;

  beforeEach(() => {
    MOCK_ON_CLICK_1 = jest.fn();
    MOCK_ON_CLICK_2 = jest.fn();
    MOCK_TO_PATH = '/test';

    MOCK_TABS = [
      { id: 'id1', svg: <TestIcon />, isSelected: true, onClick: MOCK_ON_CLICK_1, 'aria-label': 'aria-label1', 'aria-controls': 'aria-controls1' },
      { id: 'id2', svg: <TestIcon />, isSelected: false, onClick: MOCK_ON_CLICK_2, 'aria-label': 'aria-label2', 'aria-controls': 'aria-controls2' },
      { id: 'id3', svg: <TestIcon />, isSelected: false, to: MOCK_TO_PATH, 'aria-label': 'aria-label3', 'aria-controls': 'aria-controls3' },
    ];
  });

  function render(extraProps = {}) {
    return shallow(<TabsMenu tabs={MOCK_TABS} {...extraProps} />);
  }

  test('is a VGroup with title and Tabs corresponding to `tabs` passed in', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <VGroup role="tablist" className="TabsMenu" fullHeight flexNone>
        <Link className="TitleContainer" to={Routes.overview().link()}>
          <Group className="CheckThe">checkthe</Group>
          <Group className="Weather">weather</Group>
        </Link>
        <Tab id="id1" svg={<TestIcon />} isSelected onClick={MOCK_ON_CLICK_1} aria-label="aria-label1" aria-controls="aria-controls1" />
        <Tab id="id2" svg={<TestIcon />} isSelected={false} onClick={MOCK_ON_CLICK_2} aria-label="aria-label2" aria-controls="aria-controls2" />
        <Tab id="id3" svg={<TestIcon />} isSelected={false} to={MOCK_TO_PATH} aria-label="aria-label3" aria-controls="aria-controls3" />
      </VGroup>,
    )).toBe(true);
  });

  test('if className is passed in, should be added as a class to the VGroup', () => {
    const rendered = render({ className: 'my-custom-class' });

    expect(rendered.props().className).toBe('TabsMenu my-custom-class');
  });
});
