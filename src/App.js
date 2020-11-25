import React, { Component } from 'react'
import Todos from './Components/Todos'

export default class App extends Component {

  state = {
    todos : [
        {id: 1, title: 'Take out trash', completed: false},
        {id: 2, title: 'Fogo Gaucho lunch date', completed: false},
        {id: 3, title: 'Learn REACT', completed: false},
        {id: 4, title: 'Meeting with Baus', completed: true}
    ]
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

