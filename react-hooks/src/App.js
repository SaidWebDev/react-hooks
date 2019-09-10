import React , {useEffect} from 'react'
import {useForm} from "./useForm";


const App=() =>{
  const [values, handleChange]= useForm({email:'', password:'', firstName:''});
  
  // Adding effect only if password or email value change
  useEffect(()=>{
    console.log("render");
  }, [values.password, values.email ])
  
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