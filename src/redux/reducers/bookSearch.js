import C from '../constants'


export default (state = '', action) => {
    const { type, payload } = action

    switch (type) {
        case C.SEARCH_BOOK: return payload

        default: return state
    }
}