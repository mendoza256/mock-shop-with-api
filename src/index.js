import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllShopItems from './pages/AllShopItems';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Item from './pages/Item';
import { BrowserRouter, Routes, Route, useOutlet, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AllShopItems />} />
          <Route path="/all" element={<AllShopItems />} />
          <Route path="category" element={<Categories />}>
            <Route index element={<main>Select category</main>} />
            <Route path=":currentCategory" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
