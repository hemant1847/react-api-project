// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;