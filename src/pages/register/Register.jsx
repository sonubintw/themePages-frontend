import React from 'react'
import style from "./style.module.scss"
import { useState } from 'react'
import Card from '../../components/loginCard/Card'
import {TiUserAddOutline} from "react-icons/ti"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const URL=`${process.env.REACT_APP_BACKEND_URL}/v1/api/users/register`


const Register = () => {
  const [formData,setFormData]=useState({
    user_name:"",
    password:""
  }) 

  const navigate=useNavigate()

  const {user_name,password}=formData;
  
  const handleInputChange=(e)=>{
    const {name,value}=e.target;

    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const register=async(e)=>{
    e.preventDefault()
    if(!user_name || !password){
      return toast.error("All fields are required")
    }

    if(password.length < 6){
      return toast.error("Password must be up to 6 characters")
    }

    
    try {
      const response=await axios.post(URL,formData)
      console.log(response.data._id)
      localStorage.setItem("id",response.data._id)
      navigate("/dashboard")
      return toast.success("successfully registered")
    } catch (error) {
      // console.log(error)
       toast.error(error.response.data.message)
    }
  }
  
  return (
    <div className={style.register}>
      <Card>
      <div className={style.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color='#999'/>
          </div>
          <h2>Register</h2>

          <form onSubmit={register}>
            <input type="text" placeholder='Name'  name='user_name' value={user_name} onChange={handleInputChange}/>
            <input type="password" placeholder='Password' name='password' value={password} onChange={handleInputChange}/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Register