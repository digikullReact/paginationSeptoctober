import React, { useReducer, useState } from 'react'



const UseReducer = () => {
    const initialState={
        count:0,
        inputValue:0
    };

    // All the changes in state is performed

    const reducer=(state,action)=>{
        switch (action.type) {
            case "increment":

                 state.count=state.count+1;
                return {...state};  // creating a new state object is required because you have to rerender the component 

                case "changeInputValue":

                state.inputValue=action.payload
               return {...state};       // return a new state reference otherwise it wont re render the component
        
            default:
                break;
        }


    }

     const [state,dispatch]=useReducer(reducer,initialState);
     const [count,setCount]=useState(0);

     const handleClick=()=>{
        // we will dispatch action 


       // setCount(count+1);
        dispatch({type:"increment"})

     }

     const handleChange=(event)=>{
        dispatch({type:"changeInputValue",payload:event.target.value});
     }

  return (
    <div>

        <h1>{state.count}</h1>
        <h1>{count}</h1>

        <h1>Input Value- {state.inputValue}</h1>

     <button onClick={handleClick}>
        Increment
     </button>
     
     <input type='text' onChange={handleChange}/>

     <button onClick={handleClick}>
        Increment By Value
     </button>
     


    </div>
  )
}

export default UseReducer