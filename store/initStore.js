import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';


import authReducer from './reducers/authReducer';


const rootReducer = combineReducers({
    auth: authReducer
});

const initStore = () => {
    return createStore(rootReducer,{}, compose(applyMiddleware(thunk)));
};


export default initStore;