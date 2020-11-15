import React from 'react';
import { render, fireEvent, screen, findByText, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// With more time would add a lot of additional tests, as well as organising test modules properly

describe("<App/>", () => {
  it("Renders the app without crashing", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText("Items in your cart:")).toBeInTheDocument();
  })
})

describe("<Products/>", () => {
  it("Loads data on render", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    await waitFor((options: { timeout: 4000 }) => {
      expect(getByText(/Sledgehammer/i)).toBeInTheDocument()
    })
  })
})

