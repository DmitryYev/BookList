import { defaultBooks } from '../../books'
import C from '../constants'

export default (state = defaultBooks, action) => {
    const { type, payload } = action

    switch (type) {
        case C.ADD_BOOK: return [{ ...payload }, ...state]
        case C.EDIT_BOOK: return [payload, ...state.filter(book => book._id !== payload._id)]
        case C.DELETE_BOOK: return state.filter(book => book._id !== payload)

        default: return state
    }
}
