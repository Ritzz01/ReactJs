import React from 'react'
import Members from './Members';

function FunctionProp(props) {
 console.log(props);
 
  return (
    <div>
    
      <h1>Hellow</h1>
      {props.name}
      {props.age}

      <Members name=  {props.name}/>
    </div>
  )
}

export default FunctionProp
