import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('NumberOfEvents Component', () => {
  let mockSetNumberOfEvents;

  beforeEach(() => {
    mockSetNumberOfEvents = jest.fn();
    render(<NumberOfEvents setNumberOfEvents={mockSetNumberOfEvents} />);
  });

  it('should contain an element with the role of textbox', () => {
    const textBox = screen.getByRole('textbox');
    expect(textBox).toBeInTheDocument();
  });

  it('should ensure that the default value of the input field is 32', () => {
    const textBox = screen.getByRole('textbox');
    expect(textBox).toHaveValue("32");
  });

  it('should update the value of the textbox when the user types in it', () => {
    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, { target: { value: '10' } });
    expect(mockSetNumberOfEvents).toHaveBeenCalledTimes(1);
    expect(mockSetNumberOfEvents).toHaveBeenCalledWith(10);
  });
});
