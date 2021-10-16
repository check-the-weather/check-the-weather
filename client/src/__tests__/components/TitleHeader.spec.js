import React from 'react';
import { shallow } from 'enzyme';

import Group from 'components/Group';
import TitleHeader from 'components/TitleHeader';
import DownloadButton from 'components/DownloadButton';

describe('TitleHeader', () =>{
  let MOCK_TITLE;
  let MOCK_NAME;
  let MOCK_DOWNLOAD;

  beforeEach(() => {
    MOCK_TITLE = 'test title';
    MOCK_NAME = 'test name';
    MOCK_DOWNLOAD = false;
  });

  function render() {
    return shallow(<TitleHeader title={MOCK_TITLE} name={MOCK_NAME} download={MOCK_DOWNLOAD} />);
  }
  
  test('it should render without download functionality', () => {
    const rendered = render();

    expect(rendered.matchesElement(
      <Group fullWidth={true} className="TitleHeader">
        <Group className="LeftContainer">
          <h1 className="TitleText">
            test title
          </h1>
        </Group>
        <Group className="RightContainer" fullWidth={true}>
          <div className="Divider" />
          <Group className="NameContainer" centeredContent={true}>
            <p className="Name">
              test name
            </p>
          </Group>
          <Group className="UserImageContainer">
            <img className="UserImage" src={`https://avatars.dicebear.com/api/identicon/${MOCK_NAME}.svg`} alt="User profile" />
          </Group>
        </Group>
      </Group>
    )).toBe(true);
  });

  test('it should render with download functionality', () => {
    MOCK_DOWNLOAD = true;
    const rendered = render();

    expect(rendered.matchesElement(
      <Group fullWidth={true} className="TitleHeader">
        <Group className="LeftContainer">
          <h1 className="TitleText">
            test title
          </h1>
        </Group>
        <Group className="RightContainer" fullWidth={true}>
          <DownloadButton />
          <div className="Divider" />
          <Group className="NameContainer" centeredContent={true}>
            <p className="Name">
              test name
            </p>
          </Group>
          <Group className="UserImageContainer">
            <img className="UserImage" src={`https://avatars.dicebear.com/api/identicon/${MOCK_NAME}.svg`} alt="User profile" />
          </Group>
        </Group>
      </Group>
    )).toBe(true);
  });
});