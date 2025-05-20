import React, { useState } from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
  const [numberOfEvents, setLocalNumberOfEvents] = useState(32);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setLocalNumberOfEvents(value);
    setNumberOfEvents(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-number">Number of Events: </label>
      <input
        type="text"
        id="event-number"
        value={numberOfEvents}
        onChange={handleChange}
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;