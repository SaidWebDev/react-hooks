import React, { useRef, useState,  useEffect, useLayoutEffect} from 'react'
import {useFetch} from "./useFetch";

export const Hello = () => {

 //   const renders = useRef(0);
    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem("count")));

    const { data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    const divRef = useRef();
    const [rect, setRect]=useState({});

    useLayoutEffect(()=>{
        setRect(`the dimension are`, divRef.current.getBoundingClientRect())
    }, [data])
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

 //   console.log("hello renders: ", renders.current++);

    return (
    <div >  
        <div style={{display:"flex"}}>
            <div ref={divRef}>{!data? "loading ..." : data}</div>
        </div> 
        <pre> {JSON.stringify(rect , null, 2)}</pre>
        <div>count: {count}</div>
        <button onClick={()=> setCount(c => c+1)}> increment</button> 
    </div>);
};