import React from 'react';

function AddTask(props){
  if(typeof AddTask.counter == 'undefined'){
    AddTask.counter = 0;
  }

  const addTask = () => {
    let taskName = document.getElementById("id").value
    if(taskName){
      let newTask = {
        id: AddTask.counter++,
        text: taskName,
        completed: false,
      }
      document.getElementById("id").value = ""
      props.handleAdd(newTask)
    }
  }

  return(
    <div>
      <input id="id" type="text" />
      <input type="button" value="+" onClick={()=> addTask()}/>
    </div>
  )
}
export default AddTask;
