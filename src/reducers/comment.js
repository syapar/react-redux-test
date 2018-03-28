import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import byId, * as fromById from './commentById';

const idsByPostId = (state = {}, action) => {
	switch (action.type){
		case ACTIONS.FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				[action.postId]: [...action.response.result],
			};
		case ACTIONS.FETCH_COMMENTS_FAIL:
			return state;
		default:
			return state;
	}
};

const isCommentsRequested = (state = false, action) => {
	switch (action.type){
		case ACTIONS.FETCH_COMMENTS_SUCCESS:
		case ACTIONS.FETCH_COMMENTS_FAIL:
			return false;
		case ACTIONS.FETCH_COMMENTS_REQUEST:
			return true;
		default:
			return state;
	}
};

const post = combineReducers(
	{
		byId,
		idsByPostId,
		isCommentsRequested,
	}
);

export default post;

export const getCommentById = (state,id) =>
	fromById.getComment(state.byId,id);

export const getComments = (state,postId) =>
	state.idsByPostId[postId];

export const getIsCommentsRequested = (state) =>
	state.isCommentsRequested;