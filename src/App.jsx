// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> {/* Change 'Switch' to 'Routes' */}
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/show/:id/booking" element={<BookingForm />} />
        </Routes> {/* Change 'Switch' to 'Routes' */}
      </div>
    </Router>
  );
};

export default App;
