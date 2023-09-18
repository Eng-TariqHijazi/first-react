import React from 'react'
import './style.css'
function Input({type , placeholder ,value,onchange ,name}) {
  return (
        <input type={type} placeholder={placeholder} value={value} onChange={()=>onchange()} name={name} id='' />
    )
}

export default Input