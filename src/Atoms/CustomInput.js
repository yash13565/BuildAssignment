//Passing this input component as a props


import React from 'react'

function CustomInput({handleOnChange,customCss,type}) {
  return (
    <>
   <input type={type} onChange={handleOnChange} className={customCss}/> 
    </>
  )
}

export default CustomInput


