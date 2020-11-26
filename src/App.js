import React, { Component } from 'react'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About'

export default class App extends Component {

  state = {
    todos : [
        {id: uuidv4(), title: 'Take out trash', completed: false},
        {id: uuidv4(), title: 'Fogo Gaucho lunch date', completed: false},
        {id: uuidv4(), title: 'Learn REACT', completed: false},
        {id: uuidv4(), title: 'Meeting with Baus', completed: false}
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

  //Delete Todo

  delTodo =(id) => {
   this.setState(
     {todos: [...this.state.todos.filter(todo => todo.id !== id)]}
     )
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false 
    }
   this.setState({
     todos: [...this.state.todos, newTodo]
   })
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <Route exact path="/" render={ props=> (
          <React.Fragment>
             <Todos 
              todos={this.state.todos} 
              markComplete={this.markComplete} 
              delTodo={this.delTodo}
              />
               <AddTodo addTodo={this.addTodo} />
          </React.Fragment>
        )} />
        <Route exact path="/about" Component={About} />
      </div>
      </Router>
    )
  }
}

