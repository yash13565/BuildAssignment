import React from 'react'
import style from './Navbar.module.css'
import {GiMoebiusTriangle} from 'react-icons/gi'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={style.mainnav}>
       <Link  className={style.navigation} to='/'><GiMoebiusTriangle/></Link>
       <Link className={style.navigation}  to='/'>Home</Link>
       <Link  className={style.navigation} to='/contact'>Contact</Link>
       <Link  className={style.navigation} to='/task'>Task</Link>
    </div>
  )
}

export default Navbar