import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mapToArr } from '../utils'
import { selectCatAction } from '../redux/ac/catAction'

const Categories = ({ categories, selectCatAction }) => (
    <select
        className='form-control'
        onChange={(e) =>
            e.target.value === 'all' ?
                selectCatAction(null) :
                selectCatAction(parseInt(e.target.value))
        }
    >
        <option defaultValue='all'>All</option>
        {categories.map(category => (
            <option 
                value={category._id}
                key={category._id}
            >
                {category.title}
            </option>
        ))}
    </select>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

Categories.defaultProps = {
    categories: [],
}

function mapStateToProps(state) {
    const { categories } = state.categories

    return {
        categories: mapToArr(categories)
    }
}

export default connect(mapStateToProps, { selectCatAction })(Categories)
