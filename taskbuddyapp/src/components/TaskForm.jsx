import React, {useState} from 'react'
export default function TaskForm() {
    const [task ,settask] =useState('');
    const [priority,setpriority]=useState('Medium');
    const [category,setcategory]=useState('General');
    return (
       
        <form className='task-form'><input type = 'text'
        placeholder='Enter your task'
        required 
        value ={task}
        onChange ={(e)=>settask(e.target.value)}/>
      
        <span><button>Add Task</button></span>
        <div className='btns'>
            <select value ={priority} onChange={(e)=>setpriority(e.target.value)}>
                <option>Medium</option>
                <option>Hard</option>
                <option>Low</option>
            </select>
            <select  value ={category} onChange={(e)=>setcategory(e.target.value)}>
                <option>General</option>
                <option>Work</option>
                <option>Personal</option>
            </select>
        </div>
    
        </form>

    )
}