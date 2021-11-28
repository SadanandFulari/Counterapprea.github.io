import React from 'react';

class Counter extends React.Component {

    state ={
        Counter:0
    }

    Incount =() =>{
        this.setState({Counter: this.state.Counter+1})
    }
    Deccount =() =>{
        this.setState({Counter: this.state.Counter-1})
    }
    Reset =() =>{
        this.setState({Counter: this.state.Counter=0})
    }
    render(){
    return(
        
        <div className="App">
      <div><h1>Counter App</h1></div>
      <div>
        <h1>{this.state.Counter}</h1> <br />

        <button onClick={this.Incount}>Increase</button>
        <button onClick={this.Deccount}>Decrease</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    </div>
        
    )
}
}
export default Counter;