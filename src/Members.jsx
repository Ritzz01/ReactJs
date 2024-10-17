import React from 'react'

function Members(props) {
    console.log(props);
    
  return (
    <div>
      I am a super class

      <h4>{props.name}</h4>
    </div>
  )
}

export default Members
