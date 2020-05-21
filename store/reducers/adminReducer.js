import * as actions from '../actions/types';




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



const adminReducer = (state = initialState, action) => {


    switch (action.type) {

        default:
            return state;
    }
};

export default adminReducer;