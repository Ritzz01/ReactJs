import React, { useState } from "react";
import FunctionProp from "./FunctionProp";
import ClassProps from "./ClassProps";
import Forms from "./Forms";
import Toggle from "./Toggle";
import Members from "./Members";
import ClassLifeCycle from "./ClassLifeCycle";

function App() {
  // let [name, setName] = useState("Ritika");

  // let age = 23;
  // let surname = "Swaraj";
  // function main() {
  //   alert("hey");
  // }


  const[name,setName]=useState("Alu")

  return (
    <div>
      <ClassLifeCycle name={name}/>
      {/* <button onClick={()=>setName("Arya")}>Update Name</button> */}
      {/* <Toggle/> */}
      {/* <Forms/> */}
      {/* <FunctionProp name={name} age={age} />

      <button
        onClick={() => {
          setName("Arya");
        }}
      >
        Update
      </button>

      <FunctionProp name={"Alu"} age={age} />

      <ClassProps surname={surname} main={main}>
        {/* <h1>Hellow</h1> */}
      {/* hello I am a child
      </ClassProps> */}

      {/* <FunctionProp name={"Alu"} age={age}/> */}
    </div>
  );
}

export default App;
