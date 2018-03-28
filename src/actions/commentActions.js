import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api/fakeApi';
import { getIsCommentsRequested } from '../reducers';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchComments = (postId) => (dispatch, getState) => {

	if(getIsCommentsRequested(getState())){
		return Promise.resolve();
	}
	dispatch({
		type:ActionTypes.FETCH_COMMENTS_REQUEST,
		postId
	});

	api.fetchComments(postId).then((response)=>{
		dispatch({
			type:ActionTypes.FETCH_COMMENTS_SUCCESS,
			postId,
			response: normalize(response, schema.arrayOfComments),
		});
	}).catch((e)=>{
		dispatch({
			type:ActionTypes.FETCH_COMMENTS_FAIL,
			message: e.message || 'Something went wrong.',
		});
	});

};



