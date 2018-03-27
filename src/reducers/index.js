import { combineReducers } from 'redux';

import user, * as fromUser from './user';
import post, * as fromPost from './post';


const app = combineReducers({
	user,
	post,
});


export default app;

export const getUserData = (state) =>
	fromUser.getUserData(state.user)

export const getIsUserRequested = (state) =>
	fromUser.getIsUserRequested(state.user);

export const getPostsData = (state) =>
	fromPost.getPostsData(state.post)

export const getIsPostsRequested = (state) =>
	fromPost.getIsPostsRequested(state.post);