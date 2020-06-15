import React from 'react';

function TodoItem(props){
  const completedStyle = {
    textDecoration:"line-through"
  }
  const hiddenStyle = {
    display:"none",
  }

  return(
    <div className="todo-item" style={props.filterOn && props.task.completed ? hiddenStyle : null}>
      <input type="checkbox" checked={props.task.completed} onChange={() => props.handleChange(props.task.id)}/>
        <p style={props.task.completed? completedStyle: null}>{props.task.text}</p>
      </div>
  )
}

export default TodoItem;
