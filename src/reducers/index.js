'use strict'
import { combineReducers } from 'redux'

// Import reducers
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  books: BooksReducer
})

export default rootReducer
