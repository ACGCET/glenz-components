import React from 'react'
import './style.css'

export default function Button({type, children,bcolor,onClick,color}) {
    
    return (
       <button
        className={`btn btn-${type}`} 
        style={{backgroundImage:bcolor,color:color}}
        onClick={onClick}
        >{children}</button>
    )
}