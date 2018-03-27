import {FETCH_USER_SUCCESS} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
    switch (action.type){
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                ...action.response.entities.users,
            }
        default:
            return state;
    }
};
export default byId;

export const getUser = (state, id) => state[id];