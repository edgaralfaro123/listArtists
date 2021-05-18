import { nameOfInputs } from '../../helpers/constants';
import * as inputsTypes from '../types/inputsTypes'

export function changeValue (name, value) {
    switch (name) {
        case nameOfInputs.NAME_CHECKBOX:
            return {
                type: inputsTypes.CHANGE_VALUE,
                payload: value,
            };

        default:
            break;
    }
}
