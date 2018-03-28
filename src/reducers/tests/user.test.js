import user from '../user';
import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
	byId:{},
	isUserRequested:false,
};

describe('user reducer',() => {
    it('should return initialState', () => {
        expect(user(undefined,{})).toEqual(initialState);
    });
	it('should handle FETCH_USER_REQUEST action', () => {
        expect(user(initialState,{
            type: actionTypes.FETCH_USER_REQUEST,
        })).toEqual({
			byId:{},
			isUserRequested:true,
		});
	});
	it('should handle FETCH_USER_SUCCESS action', () => {
		const state = {
			...initialState,
			isUserRequested: true,
		};

		expect(user(state,{
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
			byId:	{
				'1':{
					id: '1',
					name: 'testName',
					email: 'testEmail',
					userName: 'testUsername',
				}
			},
			isUserRequested:false,
		});
	});
});