import { Component } from 'react'
import './App.css'

class App extends Component  {
  state ={
    counter:0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  } 

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  } 

  render(){
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
 
}

export default App
