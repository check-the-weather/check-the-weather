import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Tab from 'components/Tab'
import { ReactComponent as TestIcon } from "components/icons/overview.svg";

describe('Tab', () => {
  let MOCK_ON_CLICK;

  beforeEach(() => {
    MOCK_ON_CLICK = jest.fn();
  });

  function render(extraProps = {}) {
    return shallow(
      <Tab
        id="id" svg={<TestIcon />} isSelected={false}
        onClick={MOCK_ON_CLICK} aria-label="aria-label" aria-controls="aria-controls"
        {...extraProps}
      />,
    );
  }

  test('it should be a button if the to prop is not provided', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <button
        role="tab"
        className="Tab"
        aria-label="aria-label"
        aria-controls="aria-controls"
        id="id"
        tabIndex="-1"
      >
        <TestIcon /> id
      </button>,
    )).toBe(true);
  });

  test('it should be a Link if the to prop is not provided', () => {
    const rendered = render({ to: '/test'});

    expect(rendered.matchesElement(
      <Link
        to="/test"
        role="tab"
        className="Tab"
        aria-label="aria-label"
        aria-controls="aria-controls"
        id="id"
        tabIndex="-1"
      >
        <TestIcon /> id
      </Link>,
    )).toBe(true);
  });

  test('it should be a divider if isDivider true', () => {
    const rendered = render({ isDivider: true });

    expect(rendered.matchesElement(
      <div className="Divider" />
    )).toBe(true);
  });

  describe('classes', () => {
    test('has Tab--Selected class if selected', () => {
      const rendered = render({ isSelected: true });

      expect(rendered.hasClass('Tab--Selected')).toBe(true);
    });
  });

  describe('onClick', () => {
    test('calls the onClick prop', () => {
      const rendered = render();

      rendered.simulate('click');

      expect(MOCK_ON_CLICK).toHaveBeenCalledTimes(1);
    });
  });

  describe('aria-selected', () => {
    test('set based on selected state', () => {
      let rendered = render();

      expect(rendered.props()['aria-selected']).toBe(false);

      rendered = render({ isSelected: true });

      expect(rendered.props()['aria-selected']).toBe(true);
    });
  });

  describe('tabindex', () => {
    test('should NOT have tabindex="-1" if IS selected', () => {
      const rendered = render({ isSelected: true });

      expect(rendered.props().tabIndex).toBeUndefined();
    });
  });
});