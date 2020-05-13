import * as actions from '../actions/types';



const initialState = {
    test : 'test auth reducer',
    user: {},
    jwtToken: null,
    refreshToken: null,
    roles : []
}

const placeCredentials = (state, action) => {
    return {
        ...state,
    };
};

const logOut = (state, action) => {
    return {
        ...state,
    };
};



const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.PLACE_CREDENTIALS :
            return placeCredentials(state, action);


        case actions.LOG_OUT :
            return logOut(state, action);
        default:
            return state;
    }
};

export default authReducer;