// ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowContainer from './ShowContainer';
import '../styles/ShowContainer.css';
import BookingForm from './BookingForm';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const openBookingForm = () => {
    setBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setBookingFormOpen(false);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <ShowContainer showId={id} />

      {/* Booking button to open the form */}
      <button onClick={openBookingForm}>Book Ticket</button>

      {/* Render BookingForm component in a modal */}
      {isBookingFormOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeBookingForm}>&times;</span>
            <BookingForm showName={show.name} />
          </div>
        </div>
      )}

      {/* Add other show details as needed */}
    </div>
  );
};

export default ShowDetails;
