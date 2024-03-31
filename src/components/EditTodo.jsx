import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditTodo({box,setBox}) {

    let params = useParams();
    let navigate = useNavigate();

    let [title,setTitle] = useState(" ");
    let [description,setDescription] = useState(" ");
    let [isDone,setisDone] = useState(" ");

    useEffect(()=>{
        let {id} = params
        let visited = false
        for(let i = 0;i<box.length;i++)
        {
          if(box[i].id == id)
          {
            visited = true
            setTitle(box[i].title)
            setDescription(box[i].description)
            setisDone(box[i].isDone)
            break;
          }
        }
        if(!visited)
        {
          alert("Enter a Valid User ID")
          navigate('/homepage')
        }
      },[])
      

      let handleEdit = (()=>{
        let {id} = params
        let newArray = [...box]
        let index = 0;
        for(let i = 0;i<box.length;i++)
        {
          if(box[i].id==id)
          {
            index = i
          }
        }
        newArray.splice(index,1,{
            id:Number(id),
            title,
            description,
            isDone
        });
        setBox(newArray);
        navigate('/homepage');
      })


  return <>
  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 style={{fontFamily:'serif',color:'black'}}>Edit Todo</h1>
  </div>

  <Form >

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Todo Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Todo Name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Todo Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>

        <select style={{backgroundColor: "yellow"}} value={isDone} onChange={(e)=>setisDone(e.target.value==='true'?true:false)}>   
              <option value={true}>Completed</option>
              <option value={false}>Not Completed</option>
         </select>

      </Form.Group>

      <Button variant="primary" onClick={()=> handleEdit()}>Submit</Button>

    </Form>
  </div>
  </div>
  </div>
  </>
}

export default EditTodo