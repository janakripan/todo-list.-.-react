import React from 'react'
import NavbarData from '../constants/NavbarData'
import clsx from 'clsx'
import SharedButton from '../shared/SharedButton'
import AddIcon from '@mui/icons-material/Add'
import { NavLink, useNavigate } from 'react-router'




function Header() {

const navigate= useNavigate()
const handleNavigate= ()=>{
    navigate("/add")
}
    
  return (
    <header>

    <div className='flex flex-row justify-between px-10 '>
        <div></div>
        <div className=' w-8/12 mx-auto rounded-full h-20 shadow-xl border-2 mt-10 flex items-center flex-row' >
            <ul className='flex flex-row justify-around items-center h-full w-full '>
                {NavbarData.map((item)=>(
                        <NavLink  key={item.key}  to={item.route}  className={({ isActive }) => 
                        
                            clsx(
                                "w-1/3 flex h-full  justify-center items-center",
                                isActive ? "text-white bg-gray-900 rounded-full transition-all duration-500 " : ""
                            )
                         } >
                    <li  className='' >

                          

                            {item.title} 
                    </li>
                        </NavLink>
                ))}


            </ul>
            


        </div>
       
    
        <div>
               <SharedButton type='button' onClick={handleNavigate}
               className='w-26 h-16  whitespace-nowrap rounded-full  mt-11 hover:scale-105  ' >
                add task <AddIcon style={{ fontSize: 50, color:"white"}}/>
                </SharedButton>     
        </div>

    </div>

</header>
  )
}

export default Header
