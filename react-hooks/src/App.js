import React , {useEffect, useState} from 'react'
import {useForm} from "./useForm";
import {Hello} from "./Hello"

const App=() =>{
  const [values, handleChange]= useForm({email:'', password:'', firstName:''});
  const [showHello, setShowHello]= useState(true);

  return (
    <div>
 
      <input
         name="email"
         placeholder="email"
         value={values.email}
         onChange={handleChange}
      ></input>
      <input
         name="firstName"
         placeholder="first name"
         value={values.firstName}
         onChange={handleChange}
      ></input>
            <input
         name="password"
         type= "password"
         value={values.password}
         onChange={handleChange}
      ></input>
    </div>
  )
}
export default  App;