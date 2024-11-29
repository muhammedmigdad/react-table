import React from 'react'
import  {useState} from 'react'


export default function Addtask({addTask}) {
    const [value, setValue] = useState('');
    const additem = () => {
        addTask(value);
        setValue('');
    }



  return (
    <div className='input-container'>
        <input value={value} type="text" className='input' placeholder='Add a new Task'
        onChange={(e) => {
            setValue(e.target.value)
        }} />
        <button onClick={additem} className='add-btn'>ADD</button>
    </div>
  )
}
