import React, { useState } from 'react'
import { useContext } from 'react'
import { taskContext } from '../App'
import SharedButton from '../shared/SharedButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditModal from '../shared/EditModal';


function Hero() {

  

const {tasks,setTasks} = useContext(taskContext)
console.log(tasks)
const [modal , setModal] =useState(false)
const [toEdit , SetToEdit]=useState(
  {
    task:"",
    date:""
  }
)



const handleEdit=(id)=>{
  
  
  const itemToEdit= tasks.filter((tasks)=>tasks.id === id)
  if(itemToEdit) {
    SetToEdit(itemToEdit[0])
  }

}
const editTask = (task,date,id) => {
  setTasks( tasks.map((item) =>
    item.id === id ? { ...item, task,date } : item)
  );
};


const statusUpdate = (id,state)=>{

  const filteredData = tasks.map((item)=>
    item.id === id ? {...item,...state}: item
  )
 setTasks(filteredData)

}


const deleteTask=(id)=>{
  setTasks((prevTasks)=>prevTasks.filter((tasks)=>tasks.id !== id))
  console.log(new Date())
}




const showModal= ()=>{
  setModal(!modal)
}


  
  return (
  <>
  
  <div className='w-full h-fit pt-16 flex flex-col  justify-center items-center ' >

<ul  className=' w-8/12 h-8 flex items-center justify-center '></ul>

     {tasks.map((item)=>(
       <li key={item.id} className=' w-8/12  list-none mb-3 ' >
         <h2 className='text-xl text-white bg-gray-700 w-fit p-0.5 rounded-md font-semibold' >{item?.date}</h2>
         <div className='w-full h-10 flex flex-row justify-between items-center '>
           <input type="text"
                   disabled={true}
           value={item?.task}
           className='w-full h-full flex items-center border-none p-3 '
           
            />

            <div className=' flex items-center justify-center gap-x-2'>
            <span className='p-1 bg-gray-400 rounded-lg text-blue-800 ' >{item.currently}</span>
            

            <SharedButton className=' rounded-lg  h-8 flex items-center justify-center  ' 
               onClick={()=>{
                handleEdit(item.id)
                showModal()}}
            >
               <EditNoteIcon   />
            </SharedButton>

            <SharedButton  className=' rounded-lg p-1 h-8 flex items-center justify-center'
                onClick={()=>deleteTask(item.id)}
            >
               <DeleteIcon/>
            </SharedButton>
            <SharedButton  className=' rounded-lg p-1 h-8 flex items-center justify-center'
            onClick={()=>statusUpdate(item.id,{currently:"done"})}
            >
               <CheckCircleOutlineIcon/>
            </SharedButton>
            </div>
           
         </div>
         
       </li>
     ))}
    



 
</div>

{modal&&(
  <div className='fixed left-0 right-0 top-0 bottom-0 w-full h-full z-[1000] backdrop-blur-lg flex items-center justify-center' >
  <EditModal  setModal={setModal} itemForEdit={toEdit} onAddTask={editTask}  />
</div>
)}

  </>
  )
}

export default Hero
