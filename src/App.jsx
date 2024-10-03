import React, { useState, useEffect } from 'react';
import { getRandomActivity } from './services/api';
import './App.css';
import ActivityCard from './components/ActivityCard';

function App() {
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const fetchActivity = async (activityType = '') => {
    console.log(`Fetching activity with type: ${activityType}`);
    const data = await getRandomActivity(activityType);
    if (data) {
      console.log('Fetched activity:', data);
      setActivity(data);
      setErrorMessage(''); 
    } else {
      setErrorMessage('Too many requests. Please wait a moment and try again.');
    }
  };

  useEffect(() => {
    fetchActivity(); 
  }, []);


  const handleFilterChange = (newType) => {
    if (type !== newType) {
      setType(newType);
      fetchActivity(newType);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <img src="/Boored_Logo.jpg" alt="Boored Logo" className="boored-logo" />
      </header>
      <div className="container">
        <div className="controls">
          <div className="filters">
            {['education', 'recreational', 'social', 'charity', 'cooking', 'relaxation', 'busywork'].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${type === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <ActivityCard activity={activity} onGenerate={() => fetchActivity(type)} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default App;




