import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/fakeApi';
import * as ActionTypes from '../constants/ActionTypes';
import { getIsUserRequested } from '../reducers';

export const fetchUsers = () => (dispatch, getState) => {

	if(getIsUserRequested(getState())){
		return Promise.resolve();
	}
	dispatch({
		type:ActionTypes.FETCH_USER_REQUEST
	});

	api.fetchUsers().then((response)=>{
		dispatch({
			type:ActionTypes.FETCH_USER_SUCCESS,
			response: normalize(response, schema.arrayOfUsers),
		});
	}).catch((e)=>{
		dispatch({
			type:ActionTypes.FETCH_USER_FAIL,
			message: e.message || 'Something went wrong.',
		});
	});

};
