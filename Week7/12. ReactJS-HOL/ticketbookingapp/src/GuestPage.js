import React from 'react';

const GuestPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome Guest!</h2>
      <p>You can browse the flight details below.</p>
      <ul>
        <li>Flight AI202 - Chennai to Delhi - ₹5000</li>
        <li>Flight AI303 - Chennai to Mumbai - ₹4500</li>
      </ul>
    </div>
  );
};

export default GuestPage;
