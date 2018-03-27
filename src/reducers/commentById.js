import {FETCH_COMMENTS_SUCCESS} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
    switch (action.type){
        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                ...action.response.entities.comments,
            }
        default:
            return state;
    }
};
export default byId;

export const getComment = (state, id) => state[id];