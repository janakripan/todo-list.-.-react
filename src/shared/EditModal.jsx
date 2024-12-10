import {  useState } from 'react';
import SharedButton from './SharedButton'


function EditModal({onAddTask,setModal,itemForEdit}) {
  
  
 

   console.log(itemForEdit?.task)
    
    const [eTask, setTask] = useState(itemForEdit?.task);
    const [eDate, setDate] = useState(itemForEdit?.date);

    
      
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setModal(false)
        if(eTask.trim()|| eDate){
            onAddTask(eTask,eDate,itemForEdit?.id);
            setTask("");
            setDate("");
        }
        else{
            
            alert("please fill the field you want to edit fields")
        
        }

    }


  return (
    <div className='w-5/12 mx-auto flex flex-col bg-gray-200 rounded-lg p-4 items-center gap-y-10'>

<form action="" onSubmit={(e)=>handleSubmit(e)}>
         <div className='mb-10' >
        <label htmlFor="eTask" className="block text-sm font-medium text-gray-700">
          Task
        </label>
        <input
          type="text"
          id="eTask"
          value={eTask}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className='mb-10'>
        <label htmlFor="eDate" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="eDate"
          value={eDate}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
    <SharedButton type='submit'  className='w-full rounded-full hover:bg-gray-700 mb-10'>
        Confirm
    </SharedButton>
    <SharedButton onClick={()=>setModal(false)} className='w-full rounded-full hover:bg-gray-700 mb-10' >
        Cancel
     </SharedButton>


    </form>
      
    </div>
  )
}

export default EditModal
