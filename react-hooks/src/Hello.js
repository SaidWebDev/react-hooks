import React, {useEffect} from 'react'
 
export const Hello =() => {
 
    // Adding effect only if password or email value change
    React.useEffect(()=>{
    console.log("render");
    
    return()=> {
        console.log("unmount");
    }
  }, [ ]);

    return <div>Hello</div>;
};
