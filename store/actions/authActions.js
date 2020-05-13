import * as ActionTypes from './types';

export const placeCredentials = () => {
    return {
        type: ActionTypes.PLACE_CREDENTIALS,
        data: null
    };
}


export const logOut = () => {
    return {
        type: ActionTypes.LOG_OUT
    };
}