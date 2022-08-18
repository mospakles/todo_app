import React, { Component } from 'react'

export default class Counter extends Component {
    constructor () {
        super ()
        this.state = {
            counter : 0,
        }
    }

    increment() {
        this.setState ({
            counter: this.state.counter + 1,
        })
    }

    decrement() {
      this.setState({
        counter: this.state.counter - 1,
      })
    }

  render() {
    return (
      <div>
        <h3>This counter is: {this.state.counter} </h3>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={() => this.decrement()}>Decrease</button>
      </div>
    )
  }
}
