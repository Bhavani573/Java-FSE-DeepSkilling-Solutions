import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false  // Initially guest user
    };
  }

  // Toggle login state
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    // Using element variables for conditional rendering
    let page;
    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
        <h1>✈️ Ticket Booking App</h1>

        {/* Conditional Button */}
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}

        {/* Render Page Based on Login Status */}
        {page}
      </div>
    );
  }
}

export default App;
