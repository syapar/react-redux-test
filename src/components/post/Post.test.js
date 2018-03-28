import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';

const setup = (additionalProps) => {
	const props = {
		userData: {
			name: 'testName',
		},
		data:{
			title: 'testTitle',
			body: 'testBody'
		},
		...additionalProps,
	};

	const component = shallow(
		<Post {...props} />
	);

	return {
		component,
	};
};

describe('Post Component', () => {
	it('should render without crashing', () => {
		const { component} = setup();
		expect(component.find(".post__container")).toHaveLength(1);
	});
	it('should render post data', () => {
		const { component} = setup();
		expect(component.find("h2").text()).toEqual('testName');
		expect(component.find("h3").text()).toEqual('testTitle');
		expect(component.find("p").text()).toEqual('testBody');
	});
	it('should call onCommentsClicked when Comment Button Clicked', () => {
		const onCommentsClicked = jest.fn();
		const { component} = setup({onCommentsClicked});
		component.find(".post__comments-button").simulate('click');
		expect(onCommentsClicked).toBeCalled();
	});
	it('should render Comments when isCommentsVisible set and comments not empty ', () => {
		const additionalProps = {
			comments: [
				{
					name: 'testName',
					email: 'testEmail',
					body: 'testBody'
				},
				{
					name: 'testName2',
					email: 'testEmail2',
					body: 'testBody2'
				},
			],
			isCommentsVisible: true,
		};
		const { component} = setup(additionalProps);
		expect(component.find("Comment")).toHaveLength(2);
	});
});
