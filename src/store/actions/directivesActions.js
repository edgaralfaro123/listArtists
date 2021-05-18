import { getService } from '../../services/serviceDirectives'
import * as directivesTypes from '../types/directivesTypes'

export const getDirective = (name, token) => async (dispatch) => {
    const result = await getService(name, token)
    dispatch(getDirectiveSuccess(name, result.data.tipoDocumento))
}

const getDirectiveSuccess = (name, result) => ({
    type: directivesTypes.GET_DIRECTIVE,
    payload: { name, result },
});