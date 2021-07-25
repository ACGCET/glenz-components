import React from 'react'
import './style.css'

export default function Card(props,color) {
    return (
         <div className={`card card-${ props.variant} ${color}`}>
            {props.children}
        </div>

    )
}
