import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { mockData } from '../mock-data.js';

describe('Event Component', () => {
  let event;

  beforeEach(() => {
    // 1. Important:  Check if mockData is defined and has elements.
    if (!mockData || mockData.length === 0) {
      throw new Error(
        'mockData is undefined or empty.  Ensure mock-data.js is correctly set up and provides event data.'
      );
    }
    event = mockData[0];
    render(<Event event={event} />);
  });

  it('should initially hide the event details', () => {
    const details = screen.queryByText('About event:');
    expect(details).toBeNull();
  });

  it('should show the event details when the "Show details" button is clicked', async () => {
    const showDetailsButton = screen.getByText('Show details');
    fireEvent.click(showDetailsButton);
    const details = screen.getByText('About event:');
    expect(details).toBeInTheDocument();
  });

  it('should hide the event details when the "Hide details" button is clicked', async () => {
    const showDetailsButton = screen.getByText('Show details');
    fireEvent.click(showDetailsButton);
    const hideDetailsButton = screen.getByText('Hide details');
    fireEvent.click(hideDetailsButton);
    const details = screen.queryByText('About event:');
    expect(details).toBeNull();
  });
});
