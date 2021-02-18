import { generate as id } from 'shortid'
import C from '../constants'

export default store => next => action => {
    if (action.type.indexOf(C.ADD_BOOK) !== -1) {
        action = { ...action, payload: { _id: id(), ...action.payload } }
    }

    next(action)
}

