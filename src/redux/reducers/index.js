import {combineReducers} from "redux"
import books from './books'
import categories from './categories'
import activeBook from './activeBook'
import bookSearch from './bookSearch'

export default combineReducers({
    books,
    categories,
    activeBook,
    bookSearch
})
