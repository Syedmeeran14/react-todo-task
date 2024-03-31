import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  let [box,setBox] = useState([
  {
    id:1,
    title:"Task 1",
    description:"Complete the EXCEL SHEET",
    isDone:true
  },
  {
    id:2,
    title:"Task 2",
    description:"Upadate the GITHUB",
    isDone:false
  },
  {
    id:3,
    title:"Task 3",
    description:"Paper Work",
    isDone:false
  }]);

  return <>
  <BrowserRouter>
   <div id="wrapper">
    <Sidebar/>
    <Routes>
    <Route path="/homepage" element={<HomePage box={box} setBox={setBox}/>}/>
      <Route path="/addtodo" element={<AddTodo box={box} setBox={setBox}/>}/>
      <Route path="/edittodo/:id" element={<EditTodo box={box} setBox={setBox}/>}/>
      <Route path="*" element={<Navigate to="/homepage"/>}/>
  
    </Routes>
    </div>
    </BrowserRouter>
  </>
}

export default App