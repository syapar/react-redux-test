import * as ACTIONS from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
    switch (action.type){
        case ACTIONS.GET_USER_SUCCESS:
            return {
                ...state,
                ...action.response,
            };
        case ACTIONS.GET_USER_FAIL:
            return {};
        default:
            return state;
    }
};

const isUserRequested = (state = false, action) => {
    switch (action.type){
        case ACTIONS.GET_USER_SUCCESS:
        case ACTIONS.GET_USER_FAIL:
            return false;
        case ACTIONS.GET_USER_REQUEST:
            return true;
        default:
            return state;
    }
};

const user = combineReducers(
    {
        data,
		isUserRequested,
    }
);

export default user;

export const getUserData = (state) =>
    state.data;

export const getIsUserRequested = (state) =>
    state.isUserRequested;