import React from 'react';
import { shallow } from 'enzyme';

import Group from 'components/Group';

describe('Group', () => {
  test('renders children', () => {
    const rendered = shallow(<Group>A child</Group>);

    expect(rendered.text()).toBe('A child');
  });

  describe('classes', () => {
    test('flexNone should add a FlexNone class', () => {
      const rendered = shallow(<Group flexNone />);
      expect(rendered.hasClass('Group--FlexNone')).toBe(true);
    });

    test('flex1 should add a Flex1 class', () => {
      const rendered = shallow(<Group flex1 />);
      expect(rendered.hasClass('Group--Flex1')).toBe(true);
    });

    test('fullHeight should add a FullHeight class', () => {
      const rendered = shallow(<Group fullHeight />);
      expect(rendered.hasClass('Group--FullHeight')).toBe(true);
    });

    test('fullWidth should add a FullWidth class', () => {
      const rendered = shallow(<Group fullWidth />);
      expect(rendered.hasClass('Group--FullWidth')).toBe(true);
    });

    test('centeredContent should add a CenteredContent class', () => {
      const rendered = shallow(<Group centeredContent />);
      expect(rendered.hasClass('Group--CenteredContent')).toBe(true);
    });

    test('custom className is passed through', () => {
      const rendered = shallow(<Group className="my-custom-class" />);
      expect(rendered.hasClass('my-custom-class')).toBe(true);
    });
  });

  describe('styles', () => {
    test('backgroundColor should set a backgroundColor style', () => {
      const rendered = shallow(<Group backgroundColor="#000" />);
      expect(rendered.props().style.backgroundColor).toBe('#000');
    });

    test('height should set a height style', () => {
      const rendered = shallow(<Group height={100} />);
      expect(rendered.props().style.height).toBe(100);
    });

    test('width should set a width style', () => {
      const rendered = shallow(<Group width={100} />);
      expect(rendered.props().style.width).toBe(100);
    });

    test('custom style is passed through', () => {
      const rendered = shallow(<Group style={{ lineHeight: 1 }} />);
      expect(rendered.props().style.lineHeight).toBe(1);
    });
  });

  describe('attributes', () => {
    test('id is passed through', () => {
      const rendered = shallow(<Group id="id" />);
      expect(rendered.props().id).toBe('id');
    });
  });
});
