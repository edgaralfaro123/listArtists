// Aqui estan todos los reducers de los inputs, checkbox, botones, labels, etc

import * as inputsTypes from '../types/inputsTypes'


export default function componentsReducer (state = { online:false , list:[] }, action) {
    console.log("action.payload",action.payload)
    switch (action.type) {
        
        case inputsTypes.SAVE_TOP_ARTISTS:
            return {
                ...state,
                state: action.payload
            };
        default:
            return state;
    }
}