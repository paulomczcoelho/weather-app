/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './helpers/initialData';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetchData(city).then((response) => {
      setData(response);
    });
  };
  
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          className="p-3 rounded-lg outline-none"
          // value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Search
        </button>
      </form>
        
      <Card data={data} />
      <Footer />
    </div>
  );
  
}
export default App;
