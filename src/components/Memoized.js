import React, { memo, useState } from 'react'


const Memoized = ({value,changeSomething}) => {

 const [count,setCount] =  useState(0);
    console.log("I am rendered")


    const handleClick=()=>{
setCount(count+1);
    }
  return (
    <div>Memoized Component - Prop {value}

    <h1>{count}</h1>
     <button onClick={handleClick}>
     Child 
</button>

<button onClick={changeSomething}>
    Call Change Something
</button>
    
     </div>
   
  )
}

export default memo( Memoized)