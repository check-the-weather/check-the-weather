import React from 'react';
import { shallow } from 'enzyme';

import Group from 'components/Group'
import BottomCard from 'components/BottomCard';

describe('BottomCard', () => {
	let MOCK_TITLE;
	let MOCK_TITLE_COLOR;
	let MOCK_SUBTITLE;
	let MOCK_ROWS;
	let MOCK_STATUS;

	beforeEach(() => {
		MOCK_TITLE = 'test title';
		MOCK_TITLE_COLOR = 'blue';
		MOCK_SUBTITLE = 'test subtitle';
		MOCK_ROWS = [
			{ name: 'Next High Tide', value: '21:00 (5m)' },
			{ name: 'Next Low Tide', value: '13:00 (0.85m)' },
		];
		MOCK_STATUS = { code: 'good', message: 'good' };
	});

	function render(otherProps = {}) {
		return shallow(<BottomCard title={MOCK_TITLE} titleColor={MOCK_TITLE_COLOR} subtitle={MOCK_SUBTITLE} rows={MOCK_ROWS} {...otherProps} />);
	}

	test('it should render green', () => {
		const rendered = render({ status: MOCK_STATUS })

		expect(rendered.matchesElement(
			<div className="BottomCard">
				<Group className="BottomCardRow">
					<p className="BottomCardTitle Blue">
						test title
					</p>
					<p className="Status Green">
						good
					</p>
				</Group>
				<p className="BottomCardSubTitle">
					test subtitle
				</p>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next High Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							21:00 (5m)
						</p>
					</div>
					<div className="Divider" />

				</Group>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next Low Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							13:00 (0.85m)
						</p>
					</div>
				</Group>
			</div>
		)).toBe(true)
	});

	test('it should render red', () => {
	  MOCK_STATUS = { code: 'bad', message: 'bad' }
		const rendered = render({ status: MOCK_STATUS })

		expect(rendered.matchesElement(
			<div className="BottomCard">
				<Group className="BottomCardRow">
					<p className="BottomCardTitle Blue">
						test title
					</p>
					<p className="Status Red">
						bad
					</p>
				</Group>
				<p className="BottomCardSubTitle">
					test subtitle
				</p>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next High Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							21:00 (5m)
						</p>
					</div>
					<div className="Divider" />

				</Group>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next Low Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							13:00 (0.85m)
						</p>
					</div>
				</Group>
			</div>
		)).toBe(true)
	});

  test('it should render yellow', () => {
	  MOCK_STATUS = { code: 'medium', message: 'medium' }
		const rendered = render({ status: MOCK_STATUS })

		expect(rendered.matchesElement(
			<div className="BottomCard">
				<Group className="BottomCardRow">
					<p className="BottomCardTitle Blue">
						test title
					</p>
					<p className="Status Yellow">
            medium
					</p>
				</Group>
				<p className="BottomCardSubTitle">
					test subtitle
				</p>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next High Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							21:00 (5m)
						</p>
					</div>
					<div className="Divider" />

				</Group>
				<Group className="BottomCardRow">
					<div className="BottomCardTextLeft">
						<p>
							Next Low Tide
						</p>
					</div>
					<div className="BottomCardTextRight">
						<p>
							13:00 (0.85m)
						</p>
					</div>
				</Group>
			</div>
		)).toBe(true)
	});
});
