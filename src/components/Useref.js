import React, { useEffect, useRef, useState } from 'react'


// it gives you the acces to the native dom api 
// it helps you maintain the state in rerenders
const Useref = () => {

   const element= useRef(0);  // useRef maintains the state during re renders --->

   const inputRef=useRef();
   const divRef=useRef();

   const [rerenders,setRerenders]=useState(0);
   const [state,setState]=useState(0);

   const handleClick=()=>{
 //  setState(state+1);

const elements=divRef.current.childNodes

for(let i=0;i<elements.length;i++){
    elements[i].addEventListener("click",(event)=>{
        console.log("clicked",event.target.classList)
    })

} 
 //inputRef.current.  style.backgroundColor="lime";
 //inputRef.current.innerText="I am groot";
     

   }

   useEffect(()=>{
    element.current=element.current+1;
   // setRerenders(rerenders+1);  //  --->again state change called
   })

  return (
    <div>

     
        <div ref={divRef}>
        <h1 className='hi'>Re renders{ element.current}</h1>
        <span  ref={inputRef}>Hello I am span</span>
        </div>


<button onClick={handleClick}>
    Click Me
</button>

    </div>
  )
}

export default Useref