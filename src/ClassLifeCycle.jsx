import React, { Component } from "react";

export class ClassLifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Mounted", this.state.count);
    if (this.state.count < 4) {
      console.log("I can run only once remember it", this.state.count);
    }
  }

  getSnapshotBeforeUpdate() {
    return this.state.count;
  }

  shouldComponentUpdate() {
    console.warn("shouldcomponentupdate");

    return true;
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("I got updated to ", this.state.count);
    console.log("I am snapshot", snapshot);

    if (this.state.count === 10) {
        console.log("Ready to be Unmounted");
      }
  }

  componentWillUnmount() {
  
   alert("unmounted")
   
    
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h1>React Life Cycle </h1>

        <h3>Count {this.state.count}</h3>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

export default ClassLifeCycle;

// import React, { Component } from "react";

// export class ClassLifeCycle extends Component {
//   constructor() {
//     console.warn("constructor");

//     super();

//     this.state = {
//     //   email: "alu@gmail.com",
//     count:0
//     };
//   }

//   componentDidMount() {
//     console.warn("Component Mount");

//   }

//   shouldComponentUpdate()
//   {
//     console.warn("STopped",this.state.count);
//     // if(this.state.count<10)
//     //     {
//     //         this.setState({ count: this.state.count+1 })
//             return true
//     //     }
//   }
//   componentDidUpdate(prevState,prevProps,snapshot)
//   {
//     console.log("Component Update",prevState.count,this.state.count);
//     console.log(snapshot);

//     // if(prevState.count==this.state.count)
//     // {
//     //     alert("Data is same")
//     // }
//     // else{
//     //     alert("Not same")
//     // }

//     if(this.state.count<10)
//     {
//         this.setState({ count: this.state.count+1 })
//     }
//   }

//   componentWillUnmount()
//   {
//     console.log("unmount");

//   }

//   render() {
//     // console.warn('render',this.props);

//   console.warn("render", this.state.count);

//     return (
//       <>
//         {/* <h1>LIFE CYCLE OF REACT {this.props.name}</h1> */}

//         <h1>Hello {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count+1 })}>
//           UpdateEmail
//         </button>
//       </>
//     );
//   }
// }

// export default ClassLifeCycle;
