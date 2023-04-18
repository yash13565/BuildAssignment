import React, { useState } from 'react'
import style from './Navbar.module.css'
import {GiMoebiusTriangle,GiHamburgerMenu} from 'react-icons/gi'
import {CgCloseO} from 'react-icons/cg'
import { Link } from 'react-router-dom'
function Navbar() {
  // const[isMobile,setIsMobile]=useState(true)
  // function handleClick(){
  //   setIsMobile(!isMobile)
  // }
  return (
    <>
    <div className={style.mainnav}>
       <Link  className={style.navigation} to='/'><GiMoebiusTriangle/></Link>
       
       <div className={style.mainnavs}>
       <Link className={style.navigation}  to='/'>Home</Link>
       <Link  className={style.navigation} to='/contact'>Contact</Link>
       <Link  className={style.navigation} to='/task'>Task</Link>
       </div>
       <div  className={style.hamburger}><GiHamburgerMenu/></div>
    </div>
  
    </>
  )
}

export default Navbar