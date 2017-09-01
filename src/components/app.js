import React, { Component } from 'react'

// Import containers
import BookList from '../containers/book-list'

export default class App extends Component {
  render () {
    return (
      <div>
        <BookList />
      </div>
    )
  }
}
