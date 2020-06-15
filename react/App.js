import React from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import Filter from './Filter';
import './App.css'

class App extends React.Component{
constructor() {
    super()
    this.state = {
        tasks: [],
        filter: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleHide = this.handleHide.bind(this)
    this.handleAdd   = this.handleAdd.bind(this)
  }

  handleHide(){
    this.setState(prevState =>{
        return {
            ...prevState,
            filter: !prevState.filter,
        }
    })
  }

  handleAdd(task){
    this.setState(prevState =>{
        return {
            ...prevState,
            tasks: [...prevState.tasks, task],
        }
    })
  }

  handleChange(id) {
    this.setState(prevState =>{
      const newTasks = prevState.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
      return {
        ...prevState,
        tasks: newTasks,
      }
    })
  }

//const hideCompleted = this.state.hide;
  render(){
      return(
        <div className="header">
        <h1>Welcome to my Todo List!</h1>
          <AddTask className="addTask" handleAdd={this.handleAdd}/>
          <Filter handleHide={this.handleHide}/>
          <TodoList tasks={this.state.tasks} handleChange={this.handleChange} filterOn={this.state.filter}/>
        </div>
      )
    }
}

export default App;
