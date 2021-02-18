import React from 'react'
import Categories from '../Categories'
import BooksList from './BooksList'
import SearchField from '../SearchField'

const BooksPage = () => {
    return (
        <>
            <SearchField />
            <div className='col-sm-3 mb-2'>
                <h2>Categories</h2>
                <Categories />
            </div>
            <div className='col-sm-9'>
                <h2>Books</h2>
                <BooksList />
            </div>
        </>
    )
}

export default BooksPage