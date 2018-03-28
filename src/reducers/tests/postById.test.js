import byId from '../postById';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {};

describe('postById reducer',() => {
    it('should return initialState', () => {
        expect(byId(undefined,{})).toEqual(initialState);
    });
    it('should handle FETCH_POSTS_SUCCESS action', () => {
        let state = {...initialState};

        expect(byId(state,{
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
            },
        })).toEqual({
			'1':{
				userId: '1',
				id: '1',
				title: 'testTitle',
				body: 'testBody',
			},
        });
    });
});