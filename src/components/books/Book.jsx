import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteBookAction, selectBookAction } from '../../redux/ac/booksAction'

const Book = ({ book, isActive, toggle, category, deleteBook }) => (
    <li className='list-group-item'>
        <h2 onClick={toggle} style={{ cursor: 'pointer' }}>{book.title}</h2>
        <p>Category: {category.title}</p>
        {isActive && <p>{book.desc}</p>}
        <div className='btn-group'>
            <NavLink className='btn btn-primary btn-sm' to={`edit-book/${book._id}`}>Edit book</NavLink>
            <button className='btn btn-danger btn-sm' onClick={deleteBook}>Delete book</button>
        </div>
    </li>
)

Book.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        categoryId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool,
    category: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
    const { categories } = state.categories

    return {
        isActive: state.activeBook === ownProps.book._id,
        category: categories[ownProps.book.categoryId],
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggle: () => dispatch(selectBookAction(ownProps.book._id)),
        deleteBook: () => dispatch(deleteBookAction(ownProps.book._id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
