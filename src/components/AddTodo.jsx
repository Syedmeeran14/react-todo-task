import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function AddTodo({box,setBox}) {

let [title,setTitle] = useState(" ");
let [description,setDescription] = useState(" ");
let [isDone,setisDone] = useState(false);

let navigate = useNavigate();

const handleSubmit = ()=>{
  let id = box.length?box[box.length-1].id+1:1
  let newArray = [...box]
  newArray.push({
      id,
      title,
      description,
      isDone
      });
  setBox(newArray);
  navigate('/homepage');
  };

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 style={{fontFamily:'serif',color:'black'}}>Add Todo</h1>
  </div>
  <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Todo Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Todo Name" onChange={(e)=>setTitle(e.target.value)}/>
        
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Todo Description" onChange={(e)=>setDescription(e.target.value)}/>

      </Form.Group>

      <Button variant="primary" onClick={()=> handleSubmit()}>Submit</Button>

    </Form>
  </div>
  </div>
  </div>
  </>
}

export default AddTodo