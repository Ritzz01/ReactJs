import React, { useState } from "react";

function Forms() {
    let[count,setCount]=useState()
    let[print,setprint]=useState(false)
  function main(e) {
    console.log(e.target.value);
    setCount(e.target.value)
    setprint(false)
  }
  return (
    <div>
      <h1>Forms</h1>
      <input type="text" id="one" onChange={main} />
     {
     print?<h1>{count}</h1>:null
     }

      <button onClick={()=>setprint(true)}>Print Data</button>
    </div>
  );
}

export default Forms;
