// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Get Quotes/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders list of quotes', async () => {
//   render(<App />);

//   const getQuotesButton = screen.getByText(/Get Quotes/i);
//   await getQuotesButton.click();

//   const rows = screen.getAllByRole('row');
//   expect(rows.length).toBeGreaterThan(0);
// });
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Quotes/i);
  expect(linkElement).toBeInTheDocument();
});

