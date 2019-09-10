import React , {useEffect, useState} from 'react'
import {useForm} from "./useForm";
import {Hello} from "./Hello"
import { useFetch } from './useFetch';

const App=() =>{
   const [values, handleChange]= useForm({email:'', password:'', firstName:''});
   const [count, setCount] = useState(0);
   const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
   //


  return (
    <div>
      <div>{!data? "loading ..." : data}</div>
      <div>count: {count}</div>
      <button onClick={()=> setCount(c => c+1)}> increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>} */}
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