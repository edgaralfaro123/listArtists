// Aqui estan todos los reducers de los inputs, checkbox, botones, labels, etc

import * as inputsTypes from '../types/inputsTypes'

const initialState = {
    isSelected: false
}

export default function componentsReducer (state = initialState, action) {
    switch (action.type) {
        case inputsTypes.CHANGE_VALUE:
            return {
                ...state,
                isSelected: action.payload
            };
        default:
            return state;
    }
}