import React , { useState, useRef, useLayoutEffect} from 'react'
import {useForm} from "./useForm";
import {Hello} from "./Hello"


const App=() =>{
   const [values, handleChange]= useForm({email:'', password:'', firstName:''});

   const inputRef = useRef();
   const [showHello, setShowHello] = useState(true);
  
   useLayoutEffect(()=>{
     console.log("The dimensions are", inputRef.current.getBoundingClientRect())
   })
  
  return (
    <div>
   
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>}
      <input ref={inputRef}
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
      <button onClick={()=>{
        inputRef.current.focus();
      }
      }>focus</button>
    </div>
  )
}
export default  App;