import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Method 1: Increment counter
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Method 2: Say Hello
  sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // Method to invoke both increment and sayHello
  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  // Decrement counter
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Function with argument
  sayMessage = (msg) => {
    alert(msg);
  };

  // Synthetic event example
  handleClick = (e) => {
    e.preventDefault(); // Using synthetic event
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>React Event Handling Example</h1>

        {/* Counter with increment/decrement */}
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        {/* Button with argument */}
        <br /><br />
        <button onClick={() => this.sayMessage('Welcome')}>Say Welcome</button>

        {/* Synthetic Event */}
        <br /><br />
        <button onClick={this.handleClick}>OnPress</button>

        {/* Currency Converter Component */}
        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
