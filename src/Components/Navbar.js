import React from 'react'
import style from './Navbar.module.css'
import {GiMoebiusTriangle} from 'react-icons/gi'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={style.mainnav}>
       <span><Link to='/'><GiMoebiusTriangle/></Link></span>
       <Link to='/'>Home</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/task'>Task</Link>
    </div>
  )
}

export default Navbar