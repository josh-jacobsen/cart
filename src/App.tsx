import React from 'react';
import { Cart } from './features/cart/Cart';
import { Products } from './features/products/Products';

import './App.css';

function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <Cart />
        <Products />
      </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
