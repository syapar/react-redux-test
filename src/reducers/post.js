import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import byId, * as fromById from './postById';

const idsByPage = (state = {}, action) => {
	switch (action.type){
		case ACTIONS.FETCH_POSTS_SUCCESS:
			return {
				...state,
				[action.page]: [...action.response.result],
			};
		case ACTIONS.FETCH_POSTS_FAIL:
			return state;
		default:
			return state;
	}
};

const isPostsRequested = (state = false, action) => {
	switch (action.type){
		case ACTIONS.FETCH_POSTS_SUCCESS:
		case ACTIONS.FETCH_POSTS_FAIL:
			return false;
		case ACTIONS.FETCH_POSTS_REQUEST:
			return true;
		default:
			return state;
	}
};

const post = combineReducers(
	{
		byId,
		idsByPage,
		isPostsRequested,
	}
);

export default post;

export const getPostById = (state,id) =>
	fromById.getPost(state.byId,id);

export const getPosts = (state,page) =>
	state.idsByPage[page];

export const getIsPostsRequested = (state) =>
	state.isPostsRequested;