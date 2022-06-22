import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import ImgsPage from './components/ImgsPage';
import AddImgPage from './components/AddImgPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ImgsPage />} />
        <Route path='/add-img' element={<AddImgPage />} />
      </Routes>
    </BrowserRouter>
  )
}
