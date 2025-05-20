import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api'; 
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
        setLocations(extractLocations(fetchedEvents));
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

    const handleNumberOfEventsChange = (number) => {
        setNumberOfEvents(number);
    };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const getEventsByLocation = (location) => {
        if (!location) {
            return events.slice(0, numberOfEvents);
        }
        const filteredEvents = events.filter(event => event.location === location);
        return filteredEvents.slice(0, numberOfEvents);
    };

  return (
    <div data-testid="app-dom" className="app">
      <CitySearch locations={locations} onCitySelect={handleCitySelect} />
      <NumberOfEvents setNumberOfEvents={handleNumberOfEventsChange} />
      <EventList events={getEventsByLocation(selectedCity)} />
    </div>
  );
};

export default App;
