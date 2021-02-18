import React from 'react'
import { connect } from 'react-redux'
import { searchBookAction } from '../redux/ac/booksAction'

const SearchField = ({ searchQuery, searchBookAction }) => {

    const handleChange = (e) => {
        searchBookAction(e.target.value)
    }

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const { bookSearch } = state

    return {
        searchQuery: bookSearch
    }
}

export default connect(mapStateToProps, { searchBookAction })(SearchField)