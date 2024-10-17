import React, { useState } from "react";

function Toggle() {
  const [text, settext] = useState(true);
  function main() {
    if (text) {
      settext(null);
    } else {
      settext(true);
    }
  }
  return (
    <div>
      {<h1>{text}</h1>}

      <h1>{text ? "Arya " : null}</h1>
      <button onClick={() => settext(true)}>Show</button>
      <button onClick={() => settext(null)}>Hide</button>

      <button onClick={main}>Toggle</button>
    </div>
  );
}

export default Toggle;

// import React, { useState } from 'react'

// function Toggle() {
//     const[show,setshow]=useState(true)

// function click()
// {
//    setshow(false)
// }

//   return (
//     <div>
//      {
//         show? <h1>Hello</h1>:null
//      }
//      <button onClick={click}>Click</button>

//      <button onClick={()=>setshow(!show)}>Click</button>
//     </div>
//   )
// }

// export default Toggle
