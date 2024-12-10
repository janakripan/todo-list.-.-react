
import { taskContext } from '../App';
import TaskForm from '../components/TaskForm'
import { useContext } from 'react'



function Add() {

    const {tasks,setTasks} = useContext(taskContext)
    
        
      
        const addTask = (newTask) => {
            setTasks([...tasks, {...newTask,id:new Date() , currently:"pending" }]);
          
        };
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>

        <h1 className='font-semibold text-gray-900 text-4xl mb-14 '>
            Add a task
        </h1>
       <TaskForm onAddTask={addTask}  />

      


      
    </div>
  )
}

export default Add
