/* import { nameOfInputs } from '../../helpers/constants'; */
import * as inputsTypes from '../types/inputsTypes'

export function changeValue ( value) {
    
    return {
        type: inputsTypes.SAVE_TOP_ARTISTS,
        payload: value,
    };

}
