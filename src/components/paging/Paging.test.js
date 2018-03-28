import React from 'react';
import { shallow } from 'enzyme';

import Paging from './Paging';

const setup = (additionalProps) => {
	const props = {
		lastPageIndex:10,
		...additionalProps,
	};

	const component = shallow(
		<Paging {...props} />
	);

	return {
		component,
	};
};

describe('Post Component', () => {
	it('should render without crashing', () => {
		const { component} = setup();
		expect(component.find(".paging")).toHaveLength(1);
	});
	it('should render prev button when current page grater than 1', () => {
		const currentPage = 3;
		const { component} = setup({currentPage});
		expect(component.find({ buttonText: 'prev' })).toHaveLength(1);
	});
	it('should not render prev button when current page 1', () => {
		const currentPage = 1;
		const { component} = setup({currentPage});
		expect(component.find({ buttonText: 'prev' })).toHaveLength(0);
	});
	it('should not render next button when current page is last page', () => {
		const currentPage = 10;
		const { component} = setup({currentPage});
		expect(component.find({ buttonText: 'next' })).toHaveLength(0);
	});
	it('should render next button when current page is less than last page', () => {
		const currentPage = 9;
		const { component} = setup({currentPage});
		expect(component.find({ buttonText: 'next' })).toHaveLength(1);
	});
});
