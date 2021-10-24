import React from 'react';
import { shallow } from 'enzyme';

import VGroup from 'components/VGroup';
import Chatroom from 'components/Chatroom';
import ChatroomInput from 'components/ChatroomInput';

describe('Chatroom', () =>{
  let MOCK_NAME;

  beforeEach(() => {
    MOCK_NAME = 'test name'
  });

  function render() {
    return shallow(<Chatroom name={MOCK_NAME} />);
  }
  
  test('it should render', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <VGroup className="Chatroom">
        <VGroup className="ChatContainer" />
        <ChatroomInput value="" />
      </VGroup>
    )).toBe(true);
  });
});