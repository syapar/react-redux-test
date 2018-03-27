import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
	switch (action.type){
		case ACTIONS.GET_POSTS_SUCCESS:
			return {
				...state,
				...action.response,
			};
		case ACTIONS.GET_POSTS_FAIL:
			return {};
		default:
			return state;
	}
};

const isPostsRequested = (state = false, action) => {
	switch (action.type){
		case ACTIONS.GET_POSTS_SUCCESS:
		case ACTIONS.GET_POSTS_FAIL:
			return false;
		case ACTIONS.GET_POSTS_REQUEST:
			return true;
		default:
			return state;
	}
};

const post = combineReducers(
	{
		data,
		isPostsRequested,
	}
);

export default post;

export const getPostsData = (state) =>
	state.data;

export const getIsPostsRequested = (state) =>
	state.isPostsRequested;