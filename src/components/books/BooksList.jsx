import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Book from './Book'
import { booksSelector } from '../../selectors/booksSelector'

const BooksList = ({ books, searchQuery }) => (
    <ul className={'list-group'}>
        {books.filter(book => book.title.toLowerCase().includes(searchQuery))
            .map(book => (
                <Book key={book._id} book={book} />
            ))}
    </ul>
)

BooksList.propTypes = {
    books: PropTypes.array,
    searchQuery: PropTypes.string
}

function mapStateToProps(state) {
    const { categories, books, bookSearch } = state;

    return {
        books: categories.selectedCategory
            ? books.filter(book => book.categoryId === categories.selectedCategory)
            : booksSelector(state),
        searchQuery: bookSearch.toLowerCase()
    }
}

export default connect(mapStateToProps)(BooksList)
