import React from 'react';
import './App.css';

function App() {
  // Step 1: Object representing a single office
  const office = {
    name: 'Tech Park',
    rent: 55000,
    address: '123 IT Street, Chennai'
  };

  // Step 2: List of multiple office spaces
  const officeSpaces = [
    { name: 'WeWork', rent: 45000, address: 'T Nagar, Chennai' },
    { name: 'Regus', rent: 70000, address: 'OMR, Chennai' },
    { name: 'SmartSpace', rent: 60000, address: 'Velachery, Chennai' }
  ];

  // Step 3: JSX for rendering officeSpaces with conditional CSS
  const officeList = officeSpaces.map((o, index) => (
    <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{o.name}</h3>
      <p>Address: {o.address}</p>
      <p style={{ color: o.rent < 60000 ? 'red' : 'green' }}>Rent: ₹{o.rent}</p>
    </div>
  ));

  return (
    <div className="App">
      {/* Step 4: JSX heading */}
      <h1>🏢 Office Space Rental App</h1>

      {/* Step 5: JSX image with attributes */}
      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" alt="Office Space" width="400" />

      {/* Step 6: Rendering a single office object */}
      <h2>Featured Office:</h2>
      <div style={{ border: '2px solid #000', padding: '10px', width: '300px' }}>
        <h3>{office.name}</h3>
        <p>Address: {office.address}</p>
        <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>Rent: ₹{office.rent}</p>
      </div>

      {/* Step 7: Rendering list of office spaces */}
      <h2>Available Office Spaces:</h2>
      {officeList}
    </div>
  );
}

export default App;
