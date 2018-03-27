import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import byId, * as fromById from './userById';

const isUserRequested = (state = false, action) => {
    switch (action.type){
        case ACTIONS.FETCH_USER_SUCCESS:
        case ACTIONS.FETCH_USER_FAIL:
            return false;
        case ACTIONS.FETCH_USER_REQUEST:
            return true;
        default:
            return state;
    }
};

const user = combineReducers(
    {
        byId,
		isUserRequested,
    }
);

export default user;

export const getUserById = (state,id) =>
	fromById.getUser(state.byId,id);

export const getIsUserRequested = (state) =>
    state.isUserRequested;