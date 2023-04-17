//Passing this button component as a props

import React from 'react'

function CustomButton({handleOnClick,text}) {
  return (
    <>
    <button onClick={handleOnClick}>{text}</button>
    </>
  )
}

export default CustomButton