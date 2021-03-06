import * as actions from '../actions/types';

import cookie from 'js-cookie'


const initialState = {
    user:   null,
    jwtToken: null,
    refreshToken: null,
    roles :   []
}

const placeCredentials = (state, action) => {


    return {
        ...state,
        user : action.user,
        jwtToken: action.token,
        refreshToken : action.refreshToken,
        roles : action.roles
    };
};

const createAccount = (state, action) => {


    return {
        ...state,
        user : action.user,
        jwtToken: action.token,
        refreshToken : action.refreshToken,
        roles : action.roles
    };
};



const logOut = (state, action) => {

    return {
        ...state,
        user: null,
        jwtToken: null,
        refreshToken: null,
        roles : []
    };
};



const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case actions.PLACE_CREDENTIALS :
            return placeCredentials(state, action);
        case actions.CREATE_ACCOUNT :
            return createAccount(state, action);
        case actions.LOG_OUT :
            return logOut(state, action);
        default:
            return state;
    }
};

export default authReducer;