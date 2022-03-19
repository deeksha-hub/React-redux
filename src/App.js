import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component{
//------------------------------using local state--------------------------
  constructor(props){

    super(props);

//     this.state={
//       count:10
 }

//     this.increase=this.increase.bind(this);
//     this.decrease=this.decrease.bind(this);

//   }
//   increase=()=>
// {
//   this.setState({...this.state,count:++this.state.count})
// }

// decrease=()=>{
//   this.setState({...this.state,count:--this.state.count});
// }

//-------------------------------------------------------------------------


// using redux 


  render(){
    return (<div>
    <h1>Counter</h1>
      <button onClick={this.props.increase}>Increase</button>
      <input type="text" value={this.props.count} />
      <button onClick={this.props.decrease}>Decrease</button>
    </div>)
  }


}
//export default App;

const mapDispatchToProps=(dispatch)=>{

  return{
    increase:()=>dispatch({type:"INCREMENT"}),
    decrease:()=>dispatch({type:"DECREMENT"})
  }
  
  }
  const mapStateToProps=(state)=>{
  
    return {
      count:state.count
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);