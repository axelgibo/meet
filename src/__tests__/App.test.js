import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    render(<App />);
    AppDOM = screen.getByTestId('app-dom');
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  it('should render NumberOfEvents component correctly', () => {
    const NumberOfEventsComponent = AppDOM.querySelector('#number-of-events');
    expect(NumberOfEventsComponent).toBeInTheDocument();
  });
});
