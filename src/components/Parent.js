import React, { useCallback, useRef, useState } from 'react'
import Memoized from './Memoized'

const Parent = () => {
    const [state,setState]=useState(0);

    const [value,setValue]=useState(0);

    const [something,setSomething]=useState(0);
   // let  functionRef=useRef();

  //  let  functionRef2=useRef();

 
    // Use callback hook ,is used to memoize the function such that 
    // functions are not re created after every render of the component 

    // and it mainatains referential equality


    const changeSomething=useCallback(()=>{
        /// we wanna be doing here 
        console.log("hi hello ")
    

    },[])
    
 
    const handleClick=()=>{
        setState(state+1);
     //   functionRef.current=changeSomething;
    }


  
    

    const handleClickReRenderChild=()=>{
       
        setValue(value+1);  // if this value is changing and this value is passed as prop 
        // so it wil render the child Memoized compoenent
      
    }
  return (
    <div>

     <h1>Parent Component</h1>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClickReRenderChild}>Click Me For Rerender</button>

{
    /** this component will be re rendered because the function gets recreated and its reference or ad
     * 
     *address gets changed  ,the solution for this problem is useCallback hook
     */
}
     <Memoized value={value} changeSomething={changeSomething}/>

    </div>
  )
}

export default Parent