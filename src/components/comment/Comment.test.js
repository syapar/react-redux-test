import React from 'react';
import { shallow } from 'enzyme';

import Comment from './Comment';

const setup = (additionalProps) => {
	const props = {
		data:{
			name: 'testName',
			email: 'testEmail',
			body: 'testBody'
		},
		...additionalProps,
	};

	const component = shallow(
		<Comment {...props} />
	);

	return {
		component,
	};
};

describe('Comment Component', () => {
	it('should render without crashing', () => {
		const { component} = setup();
		expect(component.find(".comment__user-profile")).toHaveLength(1);
	});
	it('should render comment data', () => {
		const { component} = setup();
		expect(component.find("h4").text()).toEqual('testName');
		expect(component.find("h5").text()).toEqual('testEmail');
		expect(component.find("p").text()).toEqual('testBody');
	});
});
