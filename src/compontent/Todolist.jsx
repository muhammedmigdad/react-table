import React  from 'react'
import  {useState} from 'react'
import './Todo.css'
import Addtask from './Addtask'
import Listtask from './Listtask'


export default function Todolist() {
    const [tasks, setTasks] = useState([ ]);


  const addTask = (tittle) => {
    const newTask = [...tasks, {tittle}];
    setTasks(newTask);
    
  }

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  return (
    <div className='todo-container'>
      <div className='header'>ToDo List</div>
      <div className='add-task'>
        <Addtask addTask={addTask} />
      </div>
      <div className='tasks'>
        {tasks.map((task, index) => (
            <Listtask task={task} removeTask={removeTask} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
