import {  Outlet } from 'react-router'
import React from 'react'
import Header from './components/Header'

function HomeLayout() {

    
    
  return (
    <>

    <Header/>

    <div id='detail'>
        <Outlet/>
    </div>
      
    </>
  )
}

export default HomeLayout
