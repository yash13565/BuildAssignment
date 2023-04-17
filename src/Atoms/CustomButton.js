//Passing this button component as a props

import React from 'react'
function CustomButton({handleOnClick,text,customCss}) {
  return (
    <>
    <button className={customCss} onClick={handleOnClick}>{text}</button>
    </>
  )
}

export default CustomButton