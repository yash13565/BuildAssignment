import React, { useState } from 'react'
import style from './Task.module.css'
import Navbar from '../../Components/Navbar'
import CustomInput from '../../Atoms/CustomInput'
import CustomButton from '../../Atoms/CustomButton'
function Task() {
    const [value,setValue]=useState('')
    const[isedit,setIsEdit]=useState(false)
    const [data,setData]=useState([{
        task:'complete the Project',
        id:Math.random()*20,
    },
    {
        task:'Learn about Project',
        id:Math.random()*20,
    }

])
function handleAdd(){
    setData([...data,
    {
        task:value,
        id:Math.random()*20,
    },
    ])
    // setValue('')
}
function handleDelete(x){
    const deletedItem=data.filter((e)=>e.id!==x.id)
    setData(deletedItem)
}
function handleEdit(x,value){
    if(value===""){
        alert('please update or cancel')
    }
}
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className={style.inputfields}>
        <CustomInput customCss={style.inputtask} handleOnChange={(e)=>setValue(e.target.value)}/>
        <CustomButton customCss={style.addbtn} handleOnClick={handleAdd} text={'Add'}/>
    </div>
    <div>
    {
        data.map((x,i)=>{
            return(
                <div key={i} className={style.todo}>
                    <h3>{x.task}</h3>
                    <CustomButton customCss={style.btn} handleOnClick={()=>handleEdit(x,value)} text={'Edit'}/>
                    <CustomButton customCss={style.btn} handleOnClick={()=>handleDelete(x)} text={'Delete'}/>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Task