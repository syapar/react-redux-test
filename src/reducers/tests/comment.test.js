import comment from '../comment';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
	byId:{},
	idsByPostId:{},
	isCommentsRequested:false,
};

describe('comment reducer',() => {
    it('should return initialState', () => {
        expect(comment(undefined,{})).toEqual(initialState);
    });
	it('should handle FETCH_COMMENTS_REQUEST action', () => {
		expect(comment(initialState,{
			type: actionTypes.FETCH_COMMENTS_REQUEST,
		})).toEqual({
			byId:{},
			idsByPostId:{},
			isCommentsRequested:true,
		});
	});
	it('should handle FETCH_COMMENTS_SUCCESS action', () => {
		const state = {
			...initialState,
			isCommentsRequested: true,
		};

		expect(comment(state,{
			type: actionTypes.FETCH_COMMENTS_SUCCESS,
			response: {
				entities: {
					comments: {
						'1':{
							postId: '1',
							id: '1',
							name: 'testName',
							email: 'testTitle',
							body: 'testBody',
						}
					},
				},
				result: [
					1
				],
			},
			postId: 1,
		})).toEqual({
			byId:	{
				'1':{
					postId: '1',
					id: '1',
					name: 'testName',
					email: 'testTitle',
					body: 'testBody',
				}
			},
			idsByPostId: {
				"1": [
					1,
				],
			},
			isCommentsRequested:false,
		});
	});
});