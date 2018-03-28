import byId from '../commentById';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {};

describe('commentById reducer',() => {
    it('should return initialState', () => {
        expect(byId(undefined,{})).toEqual(initialState);
    });
    it('should handle FETCH_COMMENTS_SUCCESS action', () => {
        let state = {...initialState};

        expect(byId(state,{
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
            },
        })).toEqual({
			'1':{
				postId: '1',
				id: '1',
				name: 'testName',
				email: 'testTitle',
				body: 'testBody',
			},
        });
    });
});