import * as authTypes from '../types'

const initialState = {
    user: null,
    userToken: null
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case authTypes.RETRIEVE_TOKEN:
            const { userToken } = action.payload
            return {
                ...state,
                userToken: userToken
            };
        case authTypes.LOGIN:
            const { token, user } = action.payload
            return {
                ...state,
                user: user,
                userToken: token,
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null,
                userToken: null,
            };
        default:
            return state;
    }
}