import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Hero from "./routes/Hero";
import Pending from "./routes/Pending";
import Completed from "./routes/Completed";
import Add from "./routes/Add";
import { createContext, useEffect, useState } from "react";




export const taskContext = createContext()

const LOCAL_STORAGE_KEY = 'tasks';
const loadInitialData = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedData ? JSON.parse(savedData) :[
    {task:"", date:"" ,  id:"", currently:"" }
  ]
}

function App() {
  
  const [tasks , setTasks] = useState(loadInitialData())
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>

    <taskContext.Provider value={{tasks,setTasks}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
            <Route index element={<Hero/>} />
            <Route path="pending" element={<Pending statusFilter="pending" />} />
            <Route path="completed" element={<Completed statusFilter="done" />} />
          </Route>
          <Route path="/add" element={<Add/>} >
           
          </Route>
        </Routes>
      </BrowserRouter>

      </taskContext.Provider>

      
    </>
  );
}

export default App;
