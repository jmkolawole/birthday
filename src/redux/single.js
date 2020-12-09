import * as ActionTypes from './ActionTypes';

export const Single = (state  = { isLoading: true,
                                        errMess: null,
                                        messages:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SINGLE:
        return {...state, isLoading: false, errMess: null, messages: action.payload};

        case ActionTypes.SINGLE_LOADING:
            return {...state, isLoading: true, errMess: null, messages: []}

        case ActionTypes.SINGLE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, messages : []};

        default:
          return state;
      }
};