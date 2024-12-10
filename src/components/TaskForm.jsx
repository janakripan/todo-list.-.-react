import React, { useState } from 'react'
import SharedButton from '../shared/SharedButton';
import { useNavigate } from 'react-router';

function TaskForm({onAddTask}) {
    const navigate= useNavigate()
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    if(task.trim()&& date){
        onAddTask({task,date});
        setTask("");
        setDate("");
    }
    else{
        
        alert("please fillboth fields")
    
    }
    }
    const handleNavigate=()=>{
        navigate("/")
    }

  return (
    <div className='w-5/12 mx-auto flex flex-col items-center gap-y-10'>

        
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
         <div className='mb-10' >
        <label htmlFor="task" className="block text-sm font-medium text-gray-700">
          Task
        </label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className='mb-10'>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    <SharedButton type='submit'  className='w-full rounded-full hover:bg-gray-700 mb-10'>
        Save
    </SharedButton>
    <SharedButton className='w-full rounded-full hover:bg-gray-700 mb-10'onClick={handleNavigate} >
        Cancel
       </SharedButton>


    </form>


    </div>


  )
}

export default TaskForm
