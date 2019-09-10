import React , {useEffect, useState} from 'react'
import {useForm} from "./useForm";
import {Hello} from "./Hello"

const App=() =>{
   const [values, handleChange]= useForm({email:'', password:'', firstName:''});
  // // const [showHello, setShowHello]= useState(true);

  // useEffect(()=>{
  //   // console.log("render");
  //   const onMouseMove =e => {
  //     console.log(e);
  //   }
  //   window.addEventListener("mousemove", onmousemove);

  //   return()=> {
  //       window.removeEventListener("mousemove", onMouseMove);
  //   }
  // }, [ ]);

  useEffect(()=>{
    console.log('mount1');
  }, [])

  useEffect(()=>{
    console.log('mount2');
  }, [])

  return (
    <div>
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