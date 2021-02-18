import { createSelector } from 'reselect'

const books = state => state.books;
const categories = state => state.categories.categories;

export const booksSelector = createSelector(books, categories, (books, categories) => {
    return books.map(book => ({
        ...book,
        categoryName: categories[book.categoryId].title
    }))}
)
