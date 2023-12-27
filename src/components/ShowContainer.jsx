// ShowContainer.js
import React, { useState, useEffect } from 'react';
import '../styles/ShowContainer.css';
import BookingForm from './BookingForm'; 

const ShowContainer = ({ showId }) => {
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [showId]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  const { name, image, runtime, premiered, ended, rating } = showDetails;

  
  const roundedRating = Math.round(rating.average * 10) / 10;

  
  const starPercentage = (roundedRating / 5) * 100;

  return (
    <div className="show-container">
      <h2>{name}</h2>
      {image && <img src={image.medium} alt={name} />}
      <p>Runtime: {runtime} minutes</p>
      <p>Premiered: {premiered}</p>
      <p>Ended: {ended}</p>
      <div className="rating-container">
        <p>Rating:</p>
        <div className="rating-stars" style={{ width: `${starPercentage}%` }}>
          {/* Render empty stars */}
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} role="img" aria-label="star">
              ☆
            </span>
          ))}
          {/* Render filled stars */}
          {Array.from({ length: Math.ceil(roundedRating) }).map((_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowContainer;
