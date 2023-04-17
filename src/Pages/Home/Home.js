import React from 'react'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../Atoms/CustomButton'
import style from './Home.module.css'
function Home() {
  function removeUsers(){
    localStorage.clear()
  }
  const data=JSON.parse(localStorage.getItem('myList'))
  return (
    <>
    <div>
    <Navbar/>
    <div className={style.main}>
    <h2>Hii, Welcome
      {
        data.map((x)=>{
          return (
            <div>
              
            </div>
          )
        })
      }
    </h2>
    <CustomButton customCss={style.btn} handleOnClick={removeUsers} text={'Clear'}/>
    </div>
    </div>
    </>
  )
}

export default Home