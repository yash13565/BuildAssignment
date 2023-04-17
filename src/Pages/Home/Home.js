import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../Atoms/CustomButton'
import style from './Home.module.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const[mydata,setMyData]=useState([])
  const navigate=useNavigate()
  function removeUsers(){
    localStorage.clear()
    alert('Your data will be cleared are u sure u have to register again')
    navigate('/contact')

  }
  const data=JSON.parse(localStorage.getItem('myList'))
  return (
    <>
    <div>
    <Navbar/>
    <div className={style.main}>
    {data.length===0?(<h2>Hii, Welcome
    </h2>):

      (
        data.map((x)=>{
          return (
            <div>
              <h2>Hii,{x.fname} {x.lname}</h2>
            </div>
          )
        })
      )}
    <CustomButton customCss={style.btn} handleOnClick={removeUsers} text={'Clear'}/>
    </div>
    </div>
    </>
  )
}

export default Home