import React from 'react'

export default function Listtask({task, index, removeTask}) {
  return (
    <div className='list-tasks'>
        {task.tittle}
      <button onClick={() => {
        removeTask(index);
      }}
       className='delete-btn'>Delete</button>
    </div>
  )
}
