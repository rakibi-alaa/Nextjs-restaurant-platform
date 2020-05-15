import * as ActionTypes from './types';

export const placeCredentials = (data) => {

    return {
        type: ActionTypes.PLACE_CREDENTIALS,
        user: data.user,
        token: data.token,
        refreshToken: data.refreshToken,
        roles: data.role,
    };
}


export const logOut = () => {
    return {
        type: ActionTypes.LOG_OUT
    };
}