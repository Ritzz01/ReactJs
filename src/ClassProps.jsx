import React, { Component } from 'react'

export class ClassProps extends Component {

    
    render(props) {
      console.log(this.props);
    return (
      <div>
  <h1>Class </h1>


<h3>Child componenet : {this.props.children}</h3>

        {this.props.surname}

        <button onClick={this.props.main}>Click</button>
      </div>
    )
  }
}

export default ClassProps
