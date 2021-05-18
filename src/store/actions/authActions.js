import * as authTypes from '../types'

export function loginAction (user) {
    return {
        type: authTypes.LOGIN,
        payload: user,
    };
}
export function logOutAction () {
    return {
        type: authTypes.LOGOUT
    };
}