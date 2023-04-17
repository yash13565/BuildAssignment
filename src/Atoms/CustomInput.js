//Passing this input component as a props


import React from 'react'

function CustomInput({handleOnChange}) {
  return (
    <>
   <input onChange={handleOnChange}/> 
    </>
  )
}

export default CustomInput


