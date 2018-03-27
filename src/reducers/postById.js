import { FETCH_POSTS_SUCCESS } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
    switch (action.type){
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                ...action.response.entities.posts,
            }
        default:
            return state;
    }
};
export default byId;

export const getPost = (state, id) => state[id];