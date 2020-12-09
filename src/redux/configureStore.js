//Configure Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Messages } from './messages';
import { Single } from './single';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            messages: Messages,
            single: Single
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

