import React from 'react'
import { useState } from 'react';
import './Note.css'
const Note = (props) => {
 const[show,setShow] = useState({
  title : '',
  content : ''
});
 const handleClick = (event) =>{
     const{name,value} = event.target;
     setShow({
        ...show,
        [name] : value})
 }
 const handleNa = (e) =>{
     e.preventDefault();
     props.onAdd(show)
     setShow({
      title : '',
      content : ''
     })
     
 }
  return (
    <div className='note'>
      <h1 style={{color:'white',fontFamily: 'Arial,Helvetica,sans-serif'}}>Notes App</h1>

        <div className='note__content'>
        <div class="md-form form-lg" className='fir'>
        <input type="text" id="inputLGEx" name="title" value={show.title} class="form-control form-control-lg" onChange={handleClick} placeholder="...title"  />
        </div>
        <div class="md-form mb-4 pink-textarea active-pink-textarea" className="sec" >
        <textarea id="form18" name="content" value={show.content} class="md-textarea form-control" rows="3"  onChange={handleClick} placeholder="...description" />
        </div>  
        <button type="submit" class="btn btn-primary mb-2" onClick={handleNa}>Save</button>
        </div>
    </div>
  )
}

export default Note
