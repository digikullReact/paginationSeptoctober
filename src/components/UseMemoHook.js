import React,{useState,useMemo}from 'react'

const UseMemoHook = () => {
  const [state,setState]=useState(0);

  const [count,setCount]=useState(0);

  const veryMemoryExpensiveCalculation=()=>{

 

    console.log("Expensive calculation  called")
      let sum=0;
      for(let i=0;i<100000;i++){
        sum=sum+i;
      }
  
  return sum;
  }

  // useMemo hook saves the value or memoizes  it in the memory and it will be changed only when the count gets changed

  const calculation=  useMemo(()=>veryMemoryExpensiveCalculation(),[count])//;

  const handleClick=()=>{
    setState(state+1);
  }


  const handleCount=()=>{
    setCount(count+1);
  }

  return (
    <div>
      <h1>{state}</h1>
<button onClick={handleClick}>
  Click Me
</button>

<button onClick={handleCount}>
  Change Count
</button>

<h1>{calculation}</h1>

    </div>
  )





}





export default UseMemoHook