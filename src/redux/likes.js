import * as ActionTypes from './ActionTypes';

export const likes = (state = {
        errMess: null,
        likes: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_LIKES:
        window.location.reload();
            return {...state, errMess: null, likes: action.payload};

        case ActionTypes.LIKES_FAILED:
            return {...state, errMess: action.payload, likes: null};

        default:
            return state;
    }
}