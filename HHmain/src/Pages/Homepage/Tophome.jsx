import React, { useState } from 'react';
import './Tophome.css';

const Tophome = () => {
  const [city, setCity] = useState('Select City');
  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

  return (
    <section className="hero-section">
      <h1 className="title">Home Service on demand</h1>
      <div className="city-picker">
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option disabled>Select City</option>
          {cities.map(cityOption => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search for service"
          className="search-bar"
        />
      </div>
    </section>
  );
};

export default Tophome;
