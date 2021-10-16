import React from 'react';
import { shallow } from 'enzyme';

import getTabs from 'helpers/getTabs'
import TabsMenu from 'components/TabsMenu';
import Group from 'components/Group';
import VGroup from 'components/VGroup';
import Community from 'Pages/Dashboard/Community';
import TitleHeader from 'components/TitleHeader';
import Chatroom from 'components/Chatroom';


describe('Community', () =>{
  let MOCK_NAME;
  let MOCK_LOGOUT;

  beforeEach(() => {
    MOCK_NAME = 'test name'
    MOCK_LOGOUT = jest.fn();
  });

  function render() {
    return shallow(<Community name={MOCK_NAME} logout={MOCK_LOGOUT} />);
  }
  
  test('it should render', () => {
    const rendered = render();

    const MOCK_TABS = getTabs('Community', MOCK_LOGOUT)

    expect(rendered.matchesElement(
      <Group fullHeight fullWidth>
      <TabsMenu tabs={MOCK_TABS} />
        <VGroup fullHeight fullWidth>
          <TitleHeader title="Community" name={MOCK_NAME} />
          <Chatroom name={MOCK_NAME} />
        </VGroup>
      </Group>
    )).toBe(true);
  });
});