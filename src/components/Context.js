import React, { useContext } from 'react'
import { CommonContext } from '../context';


export const Context = () => {

  const contextdata=useContext(CommonContext);

  console.log("Context Data",contextdata);
  return (
    <div>

{
  contextdata.map(ele=>(
    <li>{ele.name}</li>
  ))
}

    </div>
  )
}
