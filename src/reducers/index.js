import { combineReducers } from 'redux';

import user, * as fromUser from './user';
import post, * as fromPost from './post';
import comment, * as fromComment from './comment';
import * as ACTIONS from '../constants/ActionTypes';

const currentPage = (state = 1, action) => {
	switch (action.type){
		case ACTIONS.FETCH_POSTS_REQUEST:
			return action.page;
		default:
			return state;
	}
};

const app = combineReducers({
	user,
	post,
	comment,
	currentPage
});

export default app;

export const getUserById = (state,id) =>
	fromUser.getUserById(state.user,id)

export const getIsUserRequested = (state) =>
	fromUser.getIsUserRequested(state.user);

export const getPostById = (state,id) =>
	fromPost.getPostById(state.post,id)

export const getPosts = (state) =>
	fromPost.getPosts(state.post, state.currentPage);

export const getIsPostsRequested = (state) =>
	fromPost.getIsPostsRequested(state.post);

export const getCurrentPage = (state) =>
	state.currentPage;

export const getCommentById = (state,id) =>
	fromComment.getCommentById(state.comment,id);

export const getComments = (state, postId) =>
	fromComment.getComments(state.comment, postId);

export const getIsCommentsRequested = (state) =>
	fromComment.getIsCommentsRequested(state.comment);