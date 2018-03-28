import post from '../post';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
	byId:{},
	idsByPage:{},
	isPostsRequested:false,
};

describe('post reducer',() => {
    it('should return initialState', () => {
        expect(post(undefined,{})).toEqual(initialState);
    });
	it('should handle FETCH_POSTS_REQUEST action', () => {
        expect(post(initialState,{
            type: actionTypes.FETCH_POSTS_REQUEST,
        })).toEqual({
			byId:{},
			idsByPage:{},
			isPostsRequested:true,
		});
	});
	it('should handle FETCH_POSTS_SUCCESS action', () => {
		const state = {
			...initialState,
			isPostsRequested: true,
		};

		expect(post(state,{
			type: actionTypes.FETCH_POSTS_SUCCESS,
			response: {
				entities: {
					posts: {
						'1':{
							userId: '1',
							id: '1',
							title: 'testTitle',
							body: 'testBody',
						}
					},
				},
				result: [
					1
				],
			},
			page: 1,
		})).toEqual({
			byId:	{
				'1':{
					userId: '1',
					id: '1',
					title: 'testTitle',
					body: 'testBody',
				}
			},
			idsByPage: {
				"1": [
					1,
				],
			},
			isPostsRequested:false,
		});
	});
});