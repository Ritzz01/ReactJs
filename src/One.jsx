import React from "react";
import "./One.css";

function One(props) {
  const click = () => {
    alert("submitted");
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Form</legend>

          <label htmlFor="">Name</label>
          <input type="text" name="" id="" placeholder="enter Your name" />
          <br />
          <label htmlFor="">Password</label>

          <input
            type="password"
            name=""
            id=""
            placeholder="enter your password"
          />
          <br />

          <button onClick={click}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default One;
