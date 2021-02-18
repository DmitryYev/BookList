import C from "../constants"

export const selectBookAction = id => ({
    type: C.SELECT_BOOK,
    payload: id,
})

export const addBookAction = book => ({
    type: C.ADD_BOOK,
    payload: book
})

export const editBookAction = book => ({
    type: C.EDIT_BOOK,
    payload: book
})

export const deleteBookAction = id => ({
    type: C.DELETE_BOOK,
    payload: id
})

export const searchBookAction = str => ({
    type: C.SEARCH_BOOK,
    payload: str
})