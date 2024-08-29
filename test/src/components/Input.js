import React from 'react';
import { useState } from 'react';

const Input = ({tasklist, setTasklist}) => {
    const [data, setData]=useState("");
    const handleAddTask =(e)=>{
        e.preventDefault()
        setTasklist([...tasklist, data]);
        setData('');

    }
  return (
    <div>
        <form onSubmit={handleAddTask}>
        <input type="text" placeholder='Add a task' value={data} onChange={(e)=>setData(e.target.value)}/>
        <button type='submit'>Add</button>
        </form>
      
    </div>
  )
}

export default Input;
