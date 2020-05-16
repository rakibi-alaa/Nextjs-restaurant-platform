import * as actions from '../actions/types';



const initialState = {
    test : 'test auth reducer',
    user: null,
    jwtToken: null,
    refreshToken: null,
    roles : []
}

const placeCredentials = (state, action) => {
    console.log('here 3333')
    return {
        ...state,
        user : action.user,
        jwtToken: action.token,
        refreshToken : action.refreshToken,
        roles : action.role
    };
};

const createAccount = (state, action) => {
    console.log('here 4444');
    return {
        ...state,
        user : action.user,
        jwtToken: action.token,
        refreshToken : action.refreshToken,
        roles : action.role
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