import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <h2 className="summary">{event.summary}</h2>
      <p className="created">{event.created}</p>
      <p className="location">{event.location}</p>
      <button className="details-button" onClick={toggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && (
        <div className="event__details">
          <h3>About event:</h3>
          <p className="description">{event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
