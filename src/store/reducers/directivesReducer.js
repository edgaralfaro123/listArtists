// Aqui estan todos los reducers de los inputs, checkbox, botones, labels, etc

import * as directivesTypes from '../types/directivesTypes'

const initialState = {
}

export default function componentsReducer (state = initialState, action) {
    switch (action.type) {
        case directivesTypes.GET_DIRECTIVE:
            return {
                ...state,
                [action.payload.name]: action.payload.result
            };
        default:
            return state;
    }
}