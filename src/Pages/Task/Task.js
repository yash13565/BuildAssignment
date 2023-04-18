import React, { useState } from 'react'
import style from './Task.module.css'
import Navbar from '../../Components/Navbar'
import CustomInput from '../../Atoms/CustomInput'
import CustomButton from '../../Atoms/CustomButton'
function Task() {
    const [value,setValue]=useState('')
    const[isedit,setIsEdit]=useState('')
    const [data,setData]=useState([{
        task:'compete',
        id:Math.random()*20,
        isUpdated:false
    },
    {
        task:'Acquire',
        id:Math.random()*20,
        isUpdated:false

    }

])
function handleAdd(){
    setData([...data,
    {
        task:value,
        id:Math.random()*20,
        isUpdated:false
    },
    ])

}
function handleDelete(x){
    const deletedItem=data.filter((e)=>e.id!==x.id)
    setData(deletedItem)
}
function handleEdit(x,value){
    x.isUpdated = true
    setData([...data])
}
function handleEditDone(i){
    data.splice(i,1, {
        task:isedit,
        id:Math.random()*20,
        isUpdated:false
    })
    setData([...data])
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
                    {x.isUpdated?<CustomInput handleOnChange={(e)=>setIsEdit(e.target.value)}/>:
                    <h3 >{x.task}</h3>}

                    <CustomButton customCss={style.btn} handleOnClick={()=>handleDelete(x)} text={'Delete'}/>
                  {x.isUpdated?<CustomButton handleOnClick={()=>handleEditDone(i)} text={'EditDone'}/>: <CustomButton customCss={style.btn} handleOnClick={()=>handleEdit(x,value)} text={'Edit'}/>}
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Task