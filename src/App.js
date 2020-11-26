import React, { Component } from 'react'
import Todos from './Components/Todos'

export default class App extends Component {

  state = {
    todos : [
        {id: 1, title: 'Take out trash', completed: false},
        {id: 2, title: 'Fogo Gaucho lunch date', completed: false},
        {id: 3, title: 'Learn REACT', completed: false},
        {id: 4, title: 'Meeting with Baus', completed: false}
    ]
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })})
  }

  delTodo =(id) => {
   this.setState(
     {todos: [...this.state.todos.filter(todo => todo.id !== id)]}
     )
  }




  render() {
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo}
        />
      </div>
    )
  }
}

