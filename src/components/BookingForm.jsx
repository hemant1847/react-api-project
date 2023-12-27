// BookingForm.js
import React, { useState } from 'react';
import '../styles/styles.css'; 

const BookingForm = ({ showName }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleBooking = () => {
   
    console.log('Show:', showName);
    console.log('User Name:', userName);
    console.log('User Email:', userEmail);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form>
        <label>
          Your Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          Your Email:
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;