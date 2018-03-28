import React from 'react';
import { shallow } from 'enzyme';

import { AppBase } from './App';

const setup = (additionalProps) => {
	const props = {
		fetchUsers: jest.fn(),
		fetchPosts: jest.fn(),
		...additionalProps,
	};

	const component = shallow(
		<AppBase {...props} />
	);

	return {
		component,
		fetchUsers: props.fetchUsers,
		fetchPosts: props.fetchPosts
	};
};

describe('App Container', () => {
	it('should render without crashing', () => {
		const { component} = setup();
		expect(component.find("h1")).toHaveLength(1);
		expect(component.find("Paging")).toHaveLength(1);
	});
	it('should call fetchUsers and fetchPosts functions in constructor', () => {
		const { fetchUsers,fetchPosts } = setup();
		expect(fetchUsers).toBeCalled();
		expect(fetchPosts).toBeCalled();
	});
	it('should render loading component when without posts', () => {
		const { component } = setup();
		expect(component.find('.loading-container')).toHaveLength(1);
	});
	it('should hide loading component with posts', () => {
		const additionaParams = {
			posts: []
		}
		const { component } = setup(additionaParams);
		expect(component.find('.loading-container')).toHaveLength(0);
	});
});
