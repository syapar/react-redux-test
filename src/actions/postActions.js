import * as ActionTypes from '../constants/ActionTypes';
import { get } from '../utils/httpRequests';

export const getPosts = (userId) => (dispatch) => {
	dispatch({
		type:ActionTypes.GET_POSTS_REQUEST,
	});

	return get("https://jsonplaceholder.typicode.com/posts").then((response) => {
		dispatch({
			type:ActionTypes.GET_POSTS_SUCCESS,
			response: response,
		});
	}).catch((error) => {
		dispatch({
			type:ActionTypes.GET_POSTS_FAIL,
			message: error.message || 'Something went wrong.',
		});
	});
};

