import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';


import authReducer from './reducers/authReducer';
import adminReducer from './reducers/adminReducer';




const rootReducer = combineReducers({
    auth: authReducer,
    admin : adminReducer
});





const initStore = () => {
    return createStore(rootReducer,{}, compose(applyMiddleware(thunk)));
};



export default initStore;