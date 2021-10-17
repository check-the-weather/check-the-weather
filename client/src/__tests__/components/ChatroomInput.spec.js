import { shallow } from 'enzyme';
import React from 'react';

import Group from 'components/Group';
import ChatroomInput from 'components/ChatroomInput';

describe('ChatroomInput', () =>{
  let MOCK_VALUE;
  let MOCK_ON_CHANGE;
  let MOCK_ON_SUBMIT;
  let MOCK_ON_KEY_DOWN;

  beforeEach(() => {
    MOCK_VALUE = 'test value'
    MOCK_ON_CHANGE = jest.fn();
    MOCK_ON_SUBMIT = jest.fn();
    MOCK_ON_KEY_DOWN = jest.fn();
  });

  function render() {
    return shallow(<ChatroomInput value={MOCK_VALUE} onChange={MOCK_ON_CHANGE} onSubmit={MOCK_ON_SUBMIT} onKeyDown={MOCK_ON_KEY_DOWN} />);
  }
  
  test('it should render', () => {
    const rendered = render();
    
    expect(rendered.matchesElement(
      <Group className="ChatroomInputRow">
        <input
          value={MOCK_VALUE}
          onChange={MOCK_ON_CHANGE}
          onKeyDown={MOCK_ON_KEY_DOWN}
          placeholder='Type a message...'
          className="ChatroomInput"
        />
        <button onClick={MOCK_ON_SUBMIT} className="ChatroomInputButton">Send</button>
      </Group>
    )).toBe(true);

    rendered.childAt(0).simulate('change', { target: { value: 'new test value' } });
    expect(MOCK_ON_CHANGE).toHaveBeenCalledWith({ target: { value: 'new test value' } });
    MOCK_ON_CHANGE.mockReset();

    rendered.childAt(0).simulate('keydown', { keyCode: 13 });
    expect(MOCK_ON_KEY_DOWN).toHaveBeenCalledWith({ keyCode: 13 });
    MOCK_ON_KEY_DOWN.mockReset();

    rendered.childAt(1).simulate('click');
    expect(MOCK_ON_SUBMIT).toHaveBeenCalled();
    MOCK_ON_SUBMIT.mockReset();
  });
});