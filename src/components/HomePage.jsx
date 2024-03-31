import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useParams,useNavigate } from 'react-router-dom';

function HomePage({box,setBox}) {

  let [filter,setFilter] = useState(0)
  let [view,setView] = useState(box)


    let params = useParams()
    let navigate = useNavigate()


    const handleStatusChange = (id,status)=>{
      let newArray = [...box]
      for(let i = 0;i<newArray.length;i++)
         {
            if(newArray[i].id===id)
             {
            newArray[i].isDone = status
            break;
             }
         }
          setBox(newArray)
      }

    
    useEffect(()=>{
      if(filter == 0){
        setView([...box])
      }
      else if(filter == 1){
        setView(box.filter((e)=>e.isDone == true)) 
      }
      else if(filter==2){
        setView(box.filter((e)=>e.isDone == false))
      }
    },[filter,box])

  
    const handleDelete = (id)=>{
      let newArray = [...box]
      let index = 0
      for(let i = 0;i<newArray.length;i++)
      {
          if(newArray[i].id===id)
          {
            index=i;
            break;
          }
      }
      newArray.splice(index,1)
      setBox(newArray)
      }
  
    
  return <>
 
  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1  style={{fontFamily:'serif',color:'black'}}>My Todos</h1>
  </div>
 
  <div>
    <label style={{fontFamily:'serif',fontSize:'1.5em',color:'black'}}><b>Filter: </b></label>{" "}
    <select style={{backgroundColor: "yellow"}} onChange={(e)=>{setFilter(e.target.value)}}>
       <option value={0}>All</option>
       <option value={1}>Completed</option>
       <option value={2}>Not Completed</option>
    </select>
  </div>
  &nbsp;

  <div className='row' id='roww'>
  {
      view.map((e,i)=>{
        return <Card style={{ width: '20rem',color:'black', backgroundColor: 'palegreen' }} key={i}>

            <Card.Body style={{fontFamily:'serif'}}>

              <Card.Title style={{fontSize:'1.5em'}}><b>{e.title}</b></Card.Title>
              <Card.Text>
                <b style={{fontSize:'1.2em'}}>Description:</b><br/>{e.description}
              </Card.Text>

              <>
                <label style={{fontSize:'1.1em'}}><b>Status: </b></label>{" "}
                <select style={{backgroundColor: "yellow"}} value={e.isDone} onChange={(event)=>{handleStatusChange(e.id,event.target.value==="true"?true:false)}}>   
                   <option value={true}>Completed</option>
                   <option value={false}>Not Completed</option>
                </select>
              </>

              <br/>
              <br/>
              <br/>

              <Button variant="primary" onClick={()=>navigate(`/edittodo/${e.id}`)}>Edit</Button>{' '}
              <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>{' '}

            </Card.Body>

          </Card>
      })
    }
  </div>
  </div>
  </div>    
  </div>

  
  </>
}
 
export default HomePage