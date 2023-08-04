import React from 'react'
import './Result.css'
// import {MdDeleteForever} from  'react-icons/md'
const Result = (props) => {
    
    return(
        <div className="result">
        <div className="result__content">
        <h3>{props.title}</h3>
        <h5>{props.content}</h5>
        <small>03-08-2023</small>
         {/* <MdDeleteForever className='delete-icon  /> */}
        </div>
        </div>
    )    
}

export default Result;
