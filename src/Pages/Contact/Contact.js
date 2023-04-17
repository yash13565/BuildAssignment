import React, { useState } from 'react'
import style from './Contact.module.css'
import Navbar from '../../Components/Navbar'
import CustomInput from '../../Atoms/CustomInput'
import CustomButton from '../../Atoms/CustomButton'
import { useNavigate } from 'react-router-dom'
function Contact() {

    const [nameCapture, setNameCapture] = useState()
    const [lastnameCapture, setLastNameCapture] = useState()
    const [emailCapture, setEmailCapture] = useState();
    const [numberCapture, setNumberCapture] = useState();
    const [nameAlert, setNameAlert] = useState(false);
    const [lnameAlert, setLNameAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false);
    const [phonenoAlert, setPhoneNoAlert] = useState(false);
    const navigate = useNavigate()
    const localData = JSON.parse(localStorage.getItem("myList")) || []
    function handleSubmit(e) {
        e.preventDefault();
        // const nameRegixExpression = /^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/;
        // const lnameRegixExpression = /^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/;
        // const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const phoneNumberRegixExpression = /^[0]?[789]\d{9}$/;
        // if (
        //     emailRegixExpression.test(emailCapture) &&
        //     phoneNumberRegixExpression.test(numberCapture) &&
        //     nameRegixExpression.test(nameCapture) && lnameRegixExpression.test(lastnameCapture)
        // ) {
            let mydata = {
                fname: nameCapture,
                lname: lastnameCapture,
                email: emailCapture,
                password: numberCapture,
            };
            const data = localData.push(mydata)
            localStorage.setItem("myList", JSON.stringify(localData));
            console.log(mydata);
            navigate("/")
        // }
    }

    function nameValidation(e) {
        setNameCapture(e.target.value);
        const nameRegixExpression = /^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/;
        if (!nameRegixExpression.test(nameCapture)) {
            setNameAlert(true);
        } else {
            setNameAlert(false);
        }
    }
    function lnameValidation(e) {
        setLastNameCapture(e.target.value);
        const lnameRegixExpression = /^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/;
        if (!lnameRegixExpression.test(lastnameCapture)) {
            setLNameAlert(true);
        } else {
            setLNameAlert(false);
        }
    }

    function emailValidation(e) {
        setEmailCapture(() => e.target.value);
        console.log(emailCapture);
        const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!emailRegixExpression.test(emailCapture)) {
            setEmailAlert(true);
        } else {
            setEmailAlert(false);
        }
    }
    function phoneNumber(e) {
        setNumberCapture(() => e.target.value)
        const phoneNumberRegixExpression = /^[0]?[789]\d{9}$/;
        if (!phoneNumberRegixExpression.test(numberCapture)) {
            setPhoneNoAlert(true)
        } else {
            setPhoneNoAlert(false)
        }
    }

    return (
        <>
            <div>

                <Navbar />
            </div>
            <form >
                <div className={style.maincont}>

                    <h2>Register Here😁</h2>
                    <label>FirstName</label> <CustomInput type={'text'} customCss={style.inpfields} handleOnChange={(e) => nameValidation(e)} /> <p style={{color:'red'}}>{nameAlert ? "enter valid firstname" : ""}</p>
                    <label>LastName</label><CustomInput type={'text'} customCss={style.inpfields} handleOnChange={(e) => lnameValidation(e)} /> <p style={{color:'red'}}>{lnameAlert ? "enter valid lastname" : ""}</p>
                    <label>Email</label> <CustomInput type={'email'} customCss={style.inpfields} handleOnChange={(e) => emailValidation(e)} /> <p style={{color:'red'}}>{emailAlert ? "enter valid email" : ""}</p>
                    <label>PhoneNo</label><CustomInput type={'text'} customCss={style.inpfields} handleOnChange={(e) => phoneNumber(e)} /> <p style={{color:'red'}}>{phonenoAlert ? "enter valid Number add zero in starting" : ""}</p>
                    <CustomButton handleOnClick={handleSubmit} text={'Submit'}/>
                </div>
            </form>
        </>
    )
}

export default Contact