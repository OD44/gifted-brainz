import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Home from './Components/Home/Home';

const App= ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>

  );
}

export default App;
