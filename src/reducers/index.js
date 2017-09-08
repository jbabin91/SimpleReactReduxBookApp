'use strict'
import { combineReducers } from 'redux'

// Import reducers
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
})

export default rootReducer
