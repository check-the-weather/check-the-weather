import React from 'react';
import { shallow } from 'enzyme';

import VGroup from 'components/VGroup';

describe('VGroup', () => {
  test('renders children', () => {
    const rendered = shallow(
      <VGroup>A child</VGroup>,
    );

    expect(rendered.text()).toBe('A child');
  });

  describe('classes', () => {
    test('flexNone should add a FlexNone class', () => {
      const rendered = shallow(<VGroup flexNone />);
      expect(rendered.hasClass('VGroup--FlexNone')).toBe(true);
    });

    test('flex1 should add a Flex1 class', () => {
      const rendered = shallow(<VGroup flex1 />);
      expect(rendered.hasClass('VGroup--Flex1')).toBe(true);
    });

    test('fullHeight should add a FullHeight class', () => {
      const rendered = shallow(<VGroup fullHeight />);
      expect(rendered.hasClass('VGroup--FullHeight')).toBe(true);
    });

    test('fullWidth should add a FullWidth class', () => {
      const rendered = shallow(<VGroup fullWidth />);
      expect(rendered.hasClass('VGroup--FullWidth')).toBe(true);
    });

    test('centeredContent should add a CenteredContent class', () => {
      const rendered = shallow(<VGroup centeredContent />);
      expect(rendered.hasClass('VGroup--CenteredContent')).toBe(true);
    });

    test('custom className is passed through', () => {
      const rendered = shallow(<VGroup className="my-custom-class" />);
      expect(rendered.hasClass('my-custom-class')).toBe(true);
    });
  });

  describe('styles', () => {
    test('width should set a width style', () => {
      const rendered = shallow(<VGroup width={100} />);
      expect(rendered.props().style.width).toBe(100);
    });

    test('custom style is passed through', () => {
      const rendered = shallow(<VGroup style={{ lineHeight: 1 }} />);
      expect(rendered.props().style.lineHeight).toBe(1);
    });
  });

  describe('attributes', () => {
    test('role is passed through', () => {
      const rendered = shallow(<VGroup role="tablist" />);
      expect(rendered.props().role).toBe('tablist');
    });

    test('id is passed through', () => {
      const rendered = shallow(<VGroup id="id" />);
      expect(rendered.props().id).toBe('id');
    });

    test('aria-labelledby is passed through', () => {
      const rendered = shallow(<VGroup aria-labelledby="something" />);
      expect(rendered.props()['aria-labelledby']).toBe('something');
    });

    test('tabIndex is passed through', () => {
      const rendered = shallow(<VGroup tabIndex="0" />);
      expect(rendered.props().tabIndex).toBe('0');
    });
  });
});