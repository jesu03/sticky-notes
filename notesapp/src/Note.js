import React from 'react'
import { useState } from 'react';
import './Note.css'
const Note = () => {
 const[show,setshow] = useState();
 
  return (
    <div className='note'>
        <h1>{show}</h1>
        <div className='note__content'>
        <div class="md-form form-lg" className='fir'>
        <input type="text" id="inputLGEx" class="form-control form-control-lg" onChange={(event) =>{
            setshow(event.target.value);
        }} />
        </div>
        <div class="md-form mb-4 pink-textarea active-pink-textarea" className="sec">
        <textarea id="form18" class="md-textarea form-control" rows="3"  />
        </div>  
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
    </div>
  )
}

export default Note
