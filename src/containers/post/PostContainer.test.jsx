import React from 'react';
import { shallow } from 'enzyme';

import { PostContainerBase } from './PostContainer';

const setup = (additionalProps) => {
	const props = {
		postId: 1,
		userById: (id) => {},
		postById: (id) => ({
			userId: 1
		}),
		commentsByPostId: (id) => {},
		commentById: (id) => {},
		...additionalProps,
	};

	const component = shallow(
		<PostContainerBase {...props} />
	);

	return {
		component,
	};
};

describe('Post Container', () => {
	it('should render without crashing', () => {
		const { component} = setup();
		expect(component.find("Post")).toHaveLength(1);
	});
});
