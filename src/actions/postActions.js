import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/fakeApi';
import { getIsPostsRequested } from '../reducers';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchPosts = (page) => (dispatch, getState) => {

	if(getIsPostsRequested(getState())){
		return Promise.resolve();
	}
	dispatch({
		type:ActionTypes.FETCH_POSTS_REQUEST,
		page
	});

	api.fetchPosts(page).then((response)=>{
		dispatch({
			type:ActionTypes.FETCH_POSTS_SUCCESS,
			page:page,
			response: normalize(response, schema.arrayOfPosts),
		});
	}).catch((e)=>{
		dispatch({
			type:ActionTypes.FETCH_POSTS_FAIL,
			message: e.message || 'Something went wrong.',
		});
	});

};



