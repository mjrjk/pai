import React from "react"
import TodoItem from "./TodoItem"

function TodoList(props){
  const taskList = props.tasks.map(
    task => <TodoItem key={task.id} task={task} filterOn={props.filterOn} handleChange={props.handleChange}/>
  )

  if(props.tasks.length)
    return <div className="todo-list">{taskList}</div>
  else
    return <div className="error">Todo list is empty :(</div>
}

export default TodoList
