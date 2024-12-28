import React, {useState} from 'react'
export default function TaskForm() {
    const [task ,settask] =useState('');
    return (
       
        <form><input type = 'text'
        placeholder='Enter your task'
        required 
        value ={task}
        onChange ={(e)=>settask(e.target.value)}/>
        <h1>{task}</h1>
    
        </form>

    )
}