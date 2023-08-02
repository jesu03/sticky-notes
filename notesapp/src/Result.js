import React from 'react'
import './Result.css'
const Result = ({title,content}) => {
    return(
        <div className="result">
        <div className="result__content">
        <h3>{title}</h3>
        <h5>{content}</h5>
        </div>
        </div>
    )    
}

export default Result;
