import React, { useState } from 'react'
import { connect } from 'react-redux'
import { mapToArr } from '../../utils'
import { Redirect } from 'react-router-dom'
import { addBookAction, editBookAction } from '../../redux/ac/booksAction'

const BookForm = ({ bookId, categories, books, addBookAction, editBookAction }) => {

    const options = [{ value: '-1', label: 'Choose category' }]
    const bookForEdit = bookId ? books.filter(book => book._id === bookId)[0] : null
    categories.map(cat => options.push({ value: cat._id, label: cat.title }))

    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({})
    const [book, setBook] = useState(bookForEdit || {})

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!isFormValid()) return

        bookForEdit ? editBookAction(book) : addBookAction(book)

        setRedirect(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setErrors((prev) => ({ ...prev, [name]: '' }))

        setBook((prev) => ({
            ...prev,
            [name]: name === 'categoryId' ? parseInt(value) : value
        }))
    }

    const isFormValid = () => {
        const { title, desc, categoryId } = book
        const errors = {}

        if (!title) errors.title = 'Title is required.'
        if (!desc) errors.desc = 'Description is required.'
        if (!categoryId || categoryId === -1) errors.categoryId = 'Category is required.'

        setErrors(errors)

        return Object.keys(errors).length === 0
    }

    return (
        <form onSubmit={handleSubmit} className='col-md-5'>
            {redirect && <Redirect to={'/'} />}
            <div className='form-group'>
                <label html-for='title'>Title</label>
                <input
                    name='title'
                    type='text'
                    className='form-control'
                    defaultValue={book.title || ''}
                    onChange={handleChange}
                />
                <p style={{ color: 'red' }}>{errors.title}</p>
            </div>
            <div className='form-group'>
                <label html-for='desc'>Description</label>
                <textarea
                    name='desc'
                    type='text'
                    className='form-control'
                    defaultValue={book.desc || ''}
                    onChange={handleChange}
                />
                <p style={{ color: 'red' }}>{errors.desc}</p>
            </div>
            <div className='form-group'>
                <select
                    name='categoryId'
                    className='form-control'
                    onChange={handleChange}
                    defaultValue={book.categoryId || ''}
                >
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
                </select>
                <p style={{ color: 'red' }}>{errors.categoryId}</p>
            </div>
            <div className='form-group'>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

function mapStateToProps(state, ownProps) {
    const { categories } = state.categories

    return {
        categories: mapToArr(categories),
        books: state.books,
        bookId: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, { addBookAction, editBookAction })(BookForm)
