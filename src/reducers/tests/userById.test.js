import byId from '../userById';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {};

describe('userById reducer',() => {
    it('should return initialState', () => {
        expect(byId(undefined,{})).toEqual(initialState);
    });
    it('should handle FETCH_USER_SUCCESS action', () => {
        let state = {...initialState};

        expect(byId(state,{
            type: actionTypes.FETCH_USER_SUCCESS,
            response: {
                entities: {
                    users: {
                        '1':{
                            id: '1',
							name: 'testName',
                            email: 'testEmail',
                            userName: 'testUsername',
                        }
                    },
                },
            },
        })).toEqual({
			'1':{
				id: '1',
				name: 'testName',
				email: 'testEmail',
				userName: 'testUsername',
			},
        });
    });
});