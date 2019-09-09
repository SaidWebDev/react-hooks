import React ,{useState} from 'react'

const App=() =>{
  const [{count, count2}, setCount]= useState({count:10, count2:20})
  return (
    <div>
      <button onClick={
        ()=>setCount(
          currentState=>(
            {
              ...currentState,
              count: currentState.count +1
            }
          )
        )
      }>+</button>
      <div> count : {count}</div>
      <div> count2 : {count2}</div>
    </div>
  )
}
export default  App;