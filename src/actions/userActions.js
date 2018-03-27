import * as ActionTypes from '../constants/ActionTypes';
import { get } from '../utils/httpRequests';

export const getUser = (userId) => (dispatch) => {
    dispatch({
        type:ActionTypes.GET_USER_REQUEST,
    });

    return get("https://jsonplaceholder.typicode.com/users").then((response) => {
		dispatch({
			type:ActionTypes.GET_USER_SUCCESS,
			response: response,
		});
    }).catch((error) => {
        dispatch({
            type:ActionTypes.GET_USER_FAIL,
            message: error.message || 'Something went wrong.',
        });
    });
};

