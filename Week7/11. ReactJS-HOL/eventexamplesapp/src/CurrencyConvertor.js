import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    const euroValue = (this.state.rupees / 90).toFixed(2); // Assume 1 Euro = 90 INR
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div style={{ marginTop: '20px', border: '1px solid gray', padding: '10px', width: '300px', margin: 'auto' }}>
        <h3>Currency Convertor (INR to EURO)</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <br /><br />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && <p>Euro: €{this.state.euro}</p>}
      </div>
    );
  }
}

export default CurrencyConvertor;
